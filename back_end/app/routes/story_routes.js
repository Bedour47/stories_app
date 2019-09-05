// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Story = require('../models/story')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()


router.get('/', function(req, res){
    res.json({ message: 'Home Page' });
  });
  

// Get All Stories
  router.get('/stories', function(req, res){
    Story.find()
    // Return all Stories as an Array
    .then(function(stories) {
      res.status(200).json({ stories: stories });
    })
    // Catch any errors that might occur
    .catch(function(error) {
      res.status(500).json({ error: error });
    });
});


/**
 * Action:      SHOW
 * Method:      GET
 * URI:         /api/articles/5d664b8b68b4f5092aba18e9
 * Description: Get An Article by Article ID
 */
router.get('/stories/:id', function(req, res) {
    Story.findById(req.params.id)
      .then(function(story) {
        if(story) {
          res.status(200).json({ story: story });
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      // Catch any errors that might occur
      .catch(function(error) {
        res.status(500).json({ error: error });
      });
  });


  /**
 * Action:      SHOW
 * Method:      GET
 * URI:         /api/articles/5d664b8b68b4f5092aba18e9
 * Description: Get An Article by Article ID
 */
router.get('/stories/:story_id/comments/comment_id', function(req, res) {
    Story.findById(req.params.id)
      .then(function(story) {
        if(story) {
          res.status(200).json({ story: story });
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: 'DocumentNotFoundError',
              message: 'The provided ID doesn\'t match any documents'
            }
          });
        }
      })
      // Catch any errors that might occur
      .catch(function(error) {
        res.status(500).json({ error: error });
      });
  });


// CREATE
// POST /stories
router.post('/stories', requireToken, (req, res, next) => {
    // set owner of new story to be current user
    req.body.story.owner = req.user.id
  
    Story.create(req.body.story)
      // respond to succesful `create` with status 201 and JSON of new "story"
      .then(story => {
        res.status(201).json({ story: story.toObject() })
      })
      // if an error occurs, pass it off to our error handler
      // the error handler needs the error message and the `res` object so that it
      // can send an error message back to the client
      .catch(next)
  })



// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/stories/:id', requireToken, removeBlanks, (req, res, next) => {
    // if the client attempts to change the `owner` property by including a new
    // owner, prevent that by deleting that key/value pair
    delete req.body.story.owner
  
    Story.findById(req.params.id)
      .then(handle404)
      .then(story => {
        // pass the `req` object and the Mongoose record to `requireOwnership`
        // it will throw an error if the current user isn't the owner
        requireOwnership(req, story)
  
        // pass the result of Mongoose's `.update` to the next `.then`
        return story.update(req.body.story)
      })
      // if that succeeded, return 204 and no JSON
      .then(() => res.status(204))
      // if an error occurs, pass it to the handler
      .catch(next)
  })


// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/stories/:id', requireToken, (req, res, next) => {
    Story.findById(req.params.id)
      .then(handle404)
      .then(story => {
        // throw an error if current user doesn't own `example`
        requireOwnership(req, story)
        // delete the example ONLY IF the above didn't throw
        story.remove()
      })
      // send back 204 and no content if the deletion succeeded
      .then(() => res.sendStatus(204))
      // if an error occurs, pass it to the handler
      .catch(next)
})


  module.exports = router
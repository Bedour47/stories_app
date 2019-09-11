import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Home.scss'
import LastStoriesList from './components/stories/LastStoriesList'
export default class Home extends Component {
  
    render() {
        return (
                   <div>
                   <div class="container">
                     <div class="row align-items-center my-5">
                       <div class="col-lg-7">
                         <img class="img-fluid rounded mb-4 mb-lg-0" src="https://files.slack.com/files-tmb/TA2AHQDQ8-FN7K1LNDU-81dae5760d/1467453280-4362606_720.jpg" alt="">
                     </img>
                       </div>
                       <div class="col-lg-5">
                         <h1 class="font-weight-light">Business Name or Tagline</h1>
                         <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                         <a class="btn btn-primary" href="#">Call to Action!</a>
                       </div>
                     </div>
                 
                     <div class="card text-white bg-secondary my-5 py-4 text-center">
                       <div class="card-body">
                         <p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
                       </div>
                     </div>
                 
                     <div class="row">
                       <div class="col-md-3 col-sm-6">
                         <div class="card h-100">
                           <div class="card-body">
                             <h2 class="card-title" id="cardOne">Card One</h2>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                           </div>
                           <div class="card-footer">
                             <a href="#" class="btn btn-primary btn-sm">More Info</a>
                           </div>
                         </div>
                       </div>
                       <div class="col-md-3 col-sm-6">
                         <div class="card h-100">
                           <div class="card-body">
                             <h2 class="card-title">Card Two</h2>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                           </div>
                           <div class="card-footer">
                             <a href="#" class="btn btn-primary btn-sm">More Info</a>
                           </div>
                         </div>
                       </div>
                       <div class="col-md-3 col-sm-6">
                         <div class="card h-100">
                           <div class="card-body">
                             <h2 class="card-title">Card Three</h2>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                           </div>
                           <div class="card-footer">
                             <a href="#" class="btn btn-primary btn-sm">More Info</a>
                           </div>
                         </div>
                       </div>
                 
                     </div>
                 
                   </div>
                   <LastStoriesList />  
                   <footer class="py-5 bg-dark">
                     <div class="container">
                       <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
                     </div>
                   </footer>
                 
                   <script src="vendor/jquery/jquery.min.js"></script>
                   <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                   </div>
                  

        )
    }
}

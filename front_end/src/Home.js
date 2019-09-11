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
                         <img class="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwix7e7j8MjkAhWFxoUKHTD6A5oQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F541557923916255732%2F&psig=AOvVaw0ZYBZP5M4hXS-9J-aAeXus&ust=1568295128368238" alt="">
                     </img>
                       </div>
                     
                     </div>
                     <div class=" text-white my-5 py-4 text-center " >
                       <div class="card-body">
                         <h2>This website offer you two types of stories Imaginations and Realty </h2>
                         <br></br>
                         <h2 class="text-white m-0">What Should you Read Next?!</h2>
                       </div>
                     </div>
                     <div>
                       <h4>Have you checked out Last add Stories?</h4>
                     <LastStoriesList />  
                     </div>
                    </div>
                   
                   <footer class="py-5 ">
                     <div class="container">
                       <p class="m-0 text-center text-white">Copyright &copy;  2019-2020</p>
                     </div>
                   </footer>
                 
                   </div>
                  

        )
    }
}

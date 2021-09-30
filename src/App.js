import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './auth/register';
import Login from './auth/login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './auth/user';

const App = () =>
  {
    return(
       <div>
         <Switch>
             <Route exact path ="/" component={Login}/>      
             <Route exact path ="/register" component={Register}/>
             <Route exact path ="/login" component={Login}/>
             <div>
             <div className="container mt-3">
              <div className="row">
                  <div className="col-6">
                  <Route exact path = "/user" component={User}/>

                  </div>
                  <div className="col-6">
                    </div>
                  </div>
              </div>
              </div>

         </Switch>
         <ToastContainer/>
        </div>
   

    )
  }
export default App;
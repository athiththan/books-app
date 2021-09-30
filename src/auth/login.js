import React,{Component} from 'react';
import {useFormik} from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login =(props) =>
{

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            confirmpassword:'',
            
        },
        validationSchema: yup.object({

            email: yup.string()
            .email("enter the valid email address")
            .strict()
            .trim()
            .required('This field is required'),

            password: yup.string()
            .strict()
            .trim()
            .required('This field is required')

        }),
        onSubmit: (data) =>{
           console.log(data);
           
           axios.post('http://localhost:8080/api/login',data)
            .then(res=> {
                console.log(res)
                
                if(res.data.statusCode==200){
                 localStorage.setItem('auth',JSON.stringify(res.data.UserToken));
                 toast.success("Success Notification !");
                props.history.push('./user');
                }
                else{
                    alert("EmailId or Password Wrong")
                }
            })
           // .catch(err => {
            //    toast.error(err.response.data);
          //  })
        }


    });

    return(
        <div className="container mt-4">
            <div className='jumbotron'>
                <h4>Log in</h4>
                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    
                    <div className='form-group'>
                        <label>email:</label>
                        <input name='email' className='form-control' type='text' 
                        onChange={formik.handleChange} 
                        value= {formik.values.email}
                        />
                        {formik.errors.email?
                        <div className = "text-danger">{formik.errors.email}</div>
                        : null
                    }
                    </div>
                    <div className='form-group'>
                        <label>password:</label>
                        <input name='password' className='form-control' type='text' 
                        onChange={formik.handleChange} 
                        value= {formik.values.password}
                        />
                        {formik.errors.password?
                        <div className = "text-danger">{formik.errors.password}</div>
                        : null
                    }
                    
                    </div>
                    <div className = "d-flex justify-content-between">
                    <button className = "btn btn-primary mt-3" type = "submit"  >Submit</button>
                    
                    <button onClick = {()=>{
                       localStorage.clear();
                       props.history.push('/register')
                    }} className = "btn btn-primary mt-3">Register</button>
                    
                        
                        </div>
                    
                    </form>             
             </div>
        </div>
    )
}
export default Login;

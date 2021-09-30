import React from 'react';
import {useFormik} from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register =(props) =>
{
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            
        },
        validationSchema: yup.object({
            name: yup.string()
            .strict()
            .trim()
            .required('This field is required'),

            email: yup.string()
            .email("enter the valid email address")
            .strict()
            .trim()
            .required('This field is required'),

            password: yup.string()
            .strict()
            .trim()
            .required('This field is required'),
            
            // confirmpassword: yup.string()
            // .oneOf([yup.ref('password'),null],'must be same')
            // .required('This field is required')
        }),
        onSubmit: (data) =>{
            console.log(data);
            toast.success("Success Notification !");
            axios.post('http://localhost:8080/api/',data)
            .then(res=> {
                props.history.push('./login');
            })
            .catch(err => {
                //toast.error(err.response.data);
            })
        }


    });

    return(
        <div className="container mt-4">
            <div className='jumbotron'>
                <div className='row'>
                    <div className='col-6'>
                <h4>Register</h4>
                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input name='name' className='form-control' type='text' 
                        onChange={formik.handleChange} 
                        value= {formik.values.name}
                        />
                        {formik.errors.name?
                        <div className = "text-danger">{formik.errors.name}</div>
                        : null
                    }
                    </div>
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
                        <input name='password' className='form-control' type='password' 
                        onChange={formik.handleChange} 
                        value= {formik.values.password}
                        />
                        {formik.errors.password?
                        <div className = "text-danger">{formik.errors.password}</div>
                        : null
                    }
                    </div>
                    {/* <div className='form-group'>
                        <label>confirmpassword:</label>
                        <input name='confirmpassword' className='form-control' type='text' 
                        onChange={formik.handleChange} 
                        value= {formik.values.confirmpassword}
                        />
                        {formik.errors.confirmpassword?
                        <div className = "text-danger">{formik.errors.confirmpassword}</div>
                        : null
                    }
                    </div> */}
                    <div className = "d-flex justify-content-between">
                    <button className = "btn btn-primary mt-3" type = "submit"  >Submit</button>
                    
                    <a
                    href='#'
                          onclick={() => {
                              window.location.href = 'Login';
                          }}
                    
                    >
                        login
                        </a>
                        </div>
                    
                    </form>
                    </div>
                    </div>             
             </div>
        </div>
    )
}
export default Register;
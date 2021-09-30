import React,{ Component } from 'react';
import InfoTable from "./infoTable";
import { toast } from 'react-toastify';
import axios from 'axios';
import InfoForm from './infoForm';

class User extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      data:[]
    }
  }
   create = data =>
        {
          const token = JSON.parse(localStorage.getItem('auth'));
         axios.post("http://localhost:8080/Api/addbooks",data,{ headers: {"auth" : token}}).then(res => {
           console.log(res);
           this.getAll()
         })
        }
  componentDidMount()
  {
     this.getAll();
  }
  getAll()
  {
    const token = JSON.parse(localStorage.getItem('auth'));
    axios.get("http://localhost:8080/api/getAll",{ headers: {"auth" : token}}).then(res => {
      this.setState({
        data:res.data
      })
        
      })
  }

  delete = data =>
   {
    var option = window.confirm('Are You Sure Want to Delete')
    if(option){
      const token = JSON.parse(localStorage.getItem('auth'));
         
      axios.delete(`http://localhost:8080/api/delete/${data.id}`,{ headers: {"auth" : token}}).then(res => {
      console.log(res);
      this.getAll()
        
      })
    }
  }
  
  render()
  {
   return(
    <div className='container mt-3'>
      <div className='row'>
         
           <InfoForm myData ={this.create}/>
         
         
        <InfoTable getData = {this.state.data} delete={this.delete}/>
      
    </div>
    </div>
   );
  }   
}
export default User;

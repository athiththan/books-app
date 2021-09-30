import React from "react";



class InfoForm extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            bookname: "",
            authorname: "",
            prize: ""
        };
    }
    infoChange = event =>
    {
        const { name,value } = event.target;
        this.setState({
            [name]: value
        })    
    }
    infoSubmit = event =>
{ 
    event.preventDefault();
    let data = {
        bookname:this.state.bookname,
        authorname:this.state.authorname,
        prize:this.state.prize
    }
    this.props.myData(data)
    
}


    render()
    {
        return(
            <form onSubmit= {this.infoSubmit} autoComplete='off'>
                <div className='form-group'>
                    <lable>BookName</lable>
                    <input type='text' className='form-control' placeholder='enter the bookname'
                    onChange={this.infoChange}
                    name='bookname'
                    value={this.state.bookname}/>
                </div>
                <div className='form-group'>
                    <label>AutherName</label>
                    <input type='text' className='form-control' placeholder='enter authername'
                    onChange={this.infoChange}
                    name='authorname'
                    value={this.state.authorname}/>
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input type='text' className='form-control' placeholder='price'
                    onChange={this.infoChange}
                    name='prize'
                    value={this.state.prize}/>
                </div>
             <button className='btn btn-primary mt-3'>Submit</button>
            </form>





        )
    }
}
export default InfoForm;
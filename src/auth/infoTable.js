import React from 'react';


class InfoTable extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
        <table className="table">
          <thead>
          <tr>
            {/* <th>S.No</th> */}
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Delete</th>
         </tr>
   
       </thead>
        <tbody>
            
          {
              this.props.getData.length > 0 ?
              (
                  this.props.getData.map(e => 
                    <tr key={e.id}>
                    <td>{e.bookname}</td>
                    <td>{e.authorname}</td>
                    <td>{e.prize}</td>
                    <td><button className="btn btn-danger"
                    onClick={event=>{
                      this.props.delete(e)
                    }}
                    >DELETE</button></td>

               </tr>
                  )

                  
                 
              )
              :
              (
                  <tr>
                      <td>No Data</td>
                      </tr>
              )
          }
          
       </tbody>
      </table>
      </div>

    )
 } 
}
export default InfoTable;
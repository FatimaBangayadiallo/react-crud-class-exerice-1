import React from 'react';

class UserList extends React.Component {
  render(){
    // contains users array
     const users = this.props.data;
    return(

      <div>

       // to loop through the users array and dispaly some jsx for each item
       {
         users.map((user, index) => {
           return(
             <div key={index}>
               <h1>{user.name}</h1>
               <h2>{user.email}</h2>
               <h2>{user.gender}</h2>
             </div>
           )
         })
       }
      </div>
    );
  }

};
export default UserList;

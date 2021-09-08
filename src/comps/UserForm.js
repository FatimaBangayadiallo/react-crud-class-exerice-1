import React from 'react';

class UserForm extends React.Component {
   constructor(){
     super();
     // we create our state
     this.state = {
       name: "",
       email: "",
       gender: ""
     };

   }
   // to update our state
   handleName(e){
     this.setState({name : e.target.value})
   };
   handleEmail(e){
     this.setState({email: e.target.value})
   };
   handleGender(e){
     this.setState({gender: e.target.value})
   };
   handleSubmit(e){
     e.preventDefault()
     this.setState({name: "",email: "",gender: ""})
   };

  render(){
    return (
      <div>
       <form onSubmit = {(e) => this.handleSubmit(e)}>
           <input name = 'name' type='txt' value = {this.state.name} onChange= {(e) => this.handleName(e)} />
           <input name = 'email' type='email' value = {this.state.email} onChange= {(e)=> this.handleEmail(e)} />
           <input name = 'gender' type = 'txt' value={this.state.gender} onChange = {(e) => this.handleGender(e)} />
           <input type = "submit" />
       </form>
      </div>
    );
  }
};
export default UserForm;

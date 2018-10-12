import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

export class RegistrationForm extends Component {
  render(){
    return(
      <form>
        <input type="text"> </input>
        <input type="password"> </input>
        <input type="submit"> </input>
      </form>
    )
  }
}

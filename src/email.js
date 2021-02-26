import React from 'react';
import './style.css';

class Email extends React.Component {
	CheckEmail(){
	const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailinput = document.getElementById("email");
	var message = document.getElementById("message");
	if(mailformat.test(emailinput.value.toLowerCase())){
		message.innerHTML = "Email successfully recorded";
	}else{
		message.innerHTML = "Invalid email address";
	}
}

	render(){
		return(
			<div>
			<form>
            <label for="email">Email:</label>
            <input type="email" id="email"/>

            <input type="button" onClick={this.CheckEmail} id ="submit" value="Submit" />
            <p id= "message"></p>
        </form>
        </div>
			)
	}
}
export default Email;
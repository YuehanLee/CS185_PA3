import React from 'react';
import './style.css';

class Image extends React.Component {

	ModalImage(input){
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("MI");

	modal.style.display = "block";
	modalImg.src = input.target.src;

	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display = "none";
		}
	}
}
componentDidMount() {
window.addEventListener('scroll', this.ToTopH);
}

ToTop(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

ToTopH(){
	var ToTopB = document.getElementById("ToTop");
	var height = window.innerHeight/4;
	if(document.documentElement.scrollTop>height || document.body.scrollTop >height){
		ToTopB.style.display="block";
	}else{
		ToTopB.style.display="none";
	}


}


	render(){
		return(
		<div>
		<button id="ToTop" onClick={this.ToTop} title="ToTop">BackToTop</button>
		<div className="contain">
            <div className="item">
                <img onClick={this.ModalImage} src="images/img1.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img2.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img3.png"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img4.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img5.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img6.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img7.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img8.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img9.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img10.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img11.jpg"/>
            </div>
            <div className="item">
                <img onClick={this.ModalImage} src="images/img12.jpg"/>
            </div>
        </div>
        <div id ="myModal" className="modal">
            <img src = "images/img10.jpg" className ="modal-content" id="MI"/>
        </div>
        </div>
			)
	}
}

export default Image
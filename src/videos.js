import React from 'react';
import './style.css';

class Video extends React.Component {

	ModalVideo(input){
    var modal = document.getElementById("myModal");
    var modalR = document.getElementById("MR");

    modal.style.display = "block";
    modalR.src = input.target.src;

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
                <video onClick={this.ModalVideo} src="videos/video1.mp4" type = "video/mp4" controls></video>
            </div>
            <div className="item">
                <video onClick={this.ModalVideo}  src="videos/video2.mp4" type = "video/mp4" controls></video>
            </div>
            <div className="item">
                <video onClick={this.ModalVideo}  src="videos/video3.mp4" type = "video/mp4" controls></video>
            </div>
            <div className="item">
                <video onClick={this.ModalVideo}  src="videos/video4.mp4" type = "video/mp4" controls></video>
            </div>
            <div className="item">
                <video onClick={this.ModalVideo}  src="videos/video5.mp4" type = "video/mp4" controls></video>
            </div>
            <div className="item">
                <video onClick={this.ModalVideo}  src="videos/video6.mp4" type = "video/mp4" controls></video>
            </div>
        </div>

        <button id="ToTop" onClick={this.ToTop()} title="BackToTop">Back To Top</button>
        <div id ="myModal" className="modal">
            <video className ="modal-content" id="MR" controls></video>
        </div>
        </div>
			)
	}
}

export default Video
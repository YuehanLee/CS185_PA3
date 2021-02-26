import React from 'react';
import './style.css';
import myimg from './self.jpg'

class Text extends React.Component {
  constructor(){
    super();
  }

  render()
  {
      return(
    <div>
    <div className="selfintro">
      <img src={myimg} className ='alignleft'/>
      <h1 className='alignright'>Introduction</h1>
      <p className='alignright'>
        Yuehan Li<br></br>
        <br></br>
        Senior student in Physics and CS major. Interested in condensed matter physics, and machine learning. Usually like to cook at home. This is my first class for UI/UX. Test sentence: A quick brown fox jumps over the lazy dog.
      </p>
      
    </div>
    </div>
    )
  }
}
export default Text;
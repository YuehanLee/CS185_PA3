import React from 'react';
import './style.css';

class Itab extends React.Component {
  constructor(props){
    super(props);
  }

  render()
  {
    const addclass=()=>{
        if(this.props.out.id === this.props.activetab){
            return("nactive");
        }
        else{
            return("nonnav");
        }
    };
    return (
        <div className={addclass()} onClick={this.props.ctab.bind(this, this.props.out.id)}>{this.props.out.title}</div>
        )
  }
}
export default Itab;
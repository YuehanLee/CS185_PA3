import React from 'react';
import Itab from './indtab.js'

class Tablist extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
        this.props.tabs.map((tab)=>
            <Itab out={tab} activetab={this.props.activetab} ctab={this.props.ctab}/>
        )
    )
  }
}

export default Tablist;
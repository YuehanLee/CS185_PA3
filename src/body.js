import React from 'react';
import Text from './text.js'
import Image from './images.js'
import Video from './videos.js'
import Table from './table.js'
import Email from './email.js'

class Body extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var displaycontent=()=>{
        var activetab = this.props.activetab;
        if(activetab===1){
            return <Text/>
        }else if(activetab===2){
            return <Image/>
        }else if(activetab===3){
            return <Video/>
        }else if(activetab===4){
            return <Table/>
        }else{
            return <Email/>
        }
    }
    return(displaycontent())
  }
}
export default Body;
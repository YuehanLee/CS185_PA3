import React from 'react';
import Tablist from './tablist.js'
import Body from './body.js'
import './style.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      active : 1
    }
    this.changetab = (id) =>{
      this.setState({
          active :id
        })
    }
  }

  render() {
    const tabs = [{
      id:1,
      title:'Text'
    },
    {
      id:2,
      title:'Images'
    },
    {
      id:3,
      title:'Videos'
    },
    {
      id:4,
      title:'Table'
    },
    {
      id:5,
      title:'Email'
    }
    ]
    
    return(
      <div>
        <div className="nav"> 
          <Tablist tabs={tabs} activetab={this.state.active} ctab={this.changetab}/>
        </div>
        <div>
          <Body activetab={this.state.active}/>
        </div>

      </div>
    );
  }
}

export default App;


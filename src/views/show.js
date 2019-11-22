import React , { Component } from 'react'
import {observer} from 'mobx-react'

@observer
class Show extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    console.log(this.props)
    return (
      <div>
  <h2>show--{this.props.store.count}--{this.props.store.doubleCount}</h2>
      </div>
    )
  }
}


export default Show
import React , { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class Demo1 extends Component{
  constructor(props){
    super(props)
    this.store = observable({
      count:0
    })
  }
  render(){
    return (
      <button onClick={()=>{
        this.store.count+=1
      }}>
        {this.store.count}
      </button>
    )
  }
}


export default observer(Demo1)
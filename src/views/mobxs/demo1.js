import React , { Component } from 'react'
import { observer } from 'mobx-react'
import listStore from './listStore'

@observer
class Demo1 extends Component{
  static defaultProps = {
    show:false
  }
  render(){
    console.log(this.props.show)
    return (
      <ul>
        <li>111</li>
        {
          this.props.show||listStore.noticeList.map((item,index)=>{
            return (
              <li key={index}>{item.desc}</li>
            )
          })
        }
      </ul>
    )
  }
}


export default Demo1
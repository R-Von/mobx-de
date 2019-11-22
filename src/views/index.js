import React , { Component } from 'react'
import store from '../store/index'
import { observer } from 'mobx-react'

import Show from './show'

// import Demo1 from './demo1'

//订阅数据仓库
class Index extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return (
      <div>
        {/* <Demo1 /> */}

        11
      </div>
    )
  }
}


export default Index
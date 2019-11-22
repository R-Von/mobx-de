import React , { Component } from 'react'
// import store from '../store/index'
import { observer } from 'mobx-react'

// import Show from './show'
import './index.css'
// import Demo1 from './demo1'

//订阅数据仓库
// @observer
// class Index extends Component{
//   constructor(props){
//     super(props)
//     console.log(store)
//   }
//   render(){
//     return (
//       <div className="app">
//         <button onClick={store.decrement}>--</button>
//           <p>{store.count}</p>
//         <button onClick={this.clickHandlee}>++</button>
//       </div>
//     )
//   }
//   clickHandlee = ()=>{
//     console.log('click')
//     store.increment()
//     console.log(store)
//   }
// }

import Demo1 from './mobxs/demo1'


class Index extends Component{
  constructor(props){
    super(props)
    // console.log(store)
  }
  render(){
    return (
      <div className="app">
        <p>Demo1</p>
        <Demo1 />
      </div>
    )
  }
}



export default Index
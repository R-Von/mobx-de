import { observable, autorun } from 'mobx'
// import hostUser from './userStore'
import list from './list'

class Lists {
  @observable noticeList = []

  // init(){
  //   autorun(()=>{
  //     if(hostUser.user){
  //       this.getList()
  //     }
  //   })
  // }
  // autorun(()=>{
  //   if(hostUser.user){
  //     this.getList()
  //   }
  // })
  // @autorun
  // user(){
  //   if(hostUser.user){
  //     this.getList()
  //   }
  // }
  constructor(){
    this.getList()
  }

  getList(){
    this.noticeList = list
  }

}

export default new Lists()
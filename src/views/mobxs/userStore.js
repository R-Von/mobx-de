import { observable } from 'mobx'

class HostUser {
  @observable user = {}
  constructor(){
    console.log(1)
    this.getUser()
  }
  getUser = ()=>{
    this.user  = {
      id:'1',
      name:'123'
    }
  }
}



export default new HostUser()
import { observable , action , computed } from 'mobx'

class CounterStore {
  name = "Counter App"
  @observable count = 100
  @computed get doubleCount(){
    return this.count * 2
  }
  @action.bound increment(){
    this.count += 1    //this 永远是正确的
  }
  @action.bound decrement(){
    this.count -= 1   //this 永远正确
  }
}

export default new CounterStore()
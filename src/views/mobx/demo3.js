import { observable , action , autorun , configure} from 'mobx'

configure({
  enforceActions:'always'
})

const store = observable({
  a:1
})

autorun(()=>{
  console.log(`a = ${store.a}`)
})
// a = 1

// store.a += 1
//抛出异常

const increaseA = action(()=>{
  store.a+=1
  store.a+=1
})

increaseA()
// a = 3
//整个action跑完才执行autorun 



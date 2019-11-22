import { observable , autorun , computed } from 'mobx'

const store = observable({
  a:1,
  b:2
})

autorun(()=>{
  console.log(`store.a=${store.a}`)
})

store.a+=1

store.b+=1

console.log(store.b)
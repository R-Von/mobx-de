import { observable , computed , autorun } from 'mobx'

const store = observable({
  a:1,
  b:2
})

const ca = computed(()=>{
  return 10*store.a
})

autorun(()=>{
  console.log(`${store.a}*10 = ${ca}`)
  console.log(store.a)
})

store.a += 1
store.a += 1
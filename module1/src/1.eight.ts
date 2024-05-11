
//destucturing 
{
const user = {
  id:345,
  name:{
    firstName:'Mezbaul',
     middleName:'persain'
  },
  class:12
}

 const {id,
  name:{firstName,middleName}
 } = user
}

const myFriends = ['chandler','joey','ross','rachel','monica'] 

const [, ,bestFried,...rest] = myFriends
console.log(rest)
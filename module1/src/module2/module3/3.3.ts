{
  // type guard 
  // typeof --> type guard 
  type AlphaNumeric = string|Number;

  const add = (parma1:AlphaNumeric,
    parm2:AlphaNumeric):AlphaNumeric=>{
   if(typeof parma1 === 'number' && typeof parm2 ==='number'){
    return parma1+parm2
   }else {
    return parma1.toString() + parm2.toString();
   }
  }
  const result1 = add(2,3)
  console.log(result1)


  //in guard 
  type normalUser = {
    name:string;
  }
  type AdminUser = {
    name:string;
    role:'admin';
  }
  const getUser = (user:normalUser | AdminUser)=>{
    if("role" in user ){
     console.log(`My name is ${user.name} and role is ${user.role}`)
    }else{
      console.log(`My name is ${user.name}`)
    }
  }

}
{
  //Type Alias 

  type Student = {
    name:string;
    age:number;
    roll:number;
    address:string;
    contactNo:string
  }
  const student1:Student = {
    name:"Bushra",
    age:34,
    roll:46,
    address:'Gotatikor,sylhet',
    contactNo:'34343333'
  };
 type userName = string
 const userName1 : userName = 'busra'
 type isAdmin =  boolean
 const isAdmin1: isAdmin = true
 console.log(isAdmin1)

type add = (num1:number,num2:number)=> number;

const add:add = (num1,num2) => num1+num2;


  //
}
{
  //interface : object type type 
  type User1 = {
    name:string;
    age:number;
  }
  const user1:User1 = {
    name:'Bushra',
    age:24
  }
  interface user2 {
    name:string;
    age:number
  }
  type rollnumber = number;
  
  type UserWithRole1 = User1 & {role:string}
  const user2:UserWithRole1 = {
    name:'bushra',
    age:300,
    role:'manager'
  }
  interface UserWithRole2 extends User1 {
   role:string
  }
  interface UserWithRole3 extends user2 {
     bi:'string'
  }
  type Roll1 = number[];

  interface Roll2 {
    [index:number]:number
  }
  const rollNumber:Roll2 = [1,2,4]


  type Add = (num1:number,num2:number)=>number
  const add:Add = (num1,num2)=>num1+num2
  
  interface Add2 {
    (num1:number,num2:number) :number
  }
  const add2:Add2 = (num1,num2) => num1+num2;



}
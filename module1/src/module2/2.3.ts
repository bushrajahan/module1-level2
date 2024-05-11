{
  //generic type 
  
  // const rollNumber:number[] = [3,4,5];

  type GenericArry <T> = Array<T> 
  const rollNumber:GenericArry<number>= [3,4,5];

  // const mentors:string[] = ["Mr.x",'Mr.y','Mr.z'];

  const mentors:GenericArry<string>=["Mr.x",'Mr.y','Mr.z'];

  // const boolArray:boolean[] = [true,false,true]
  const boolArray:GenericArry<boolean> = [true,false,true]

  const user:GenericArry<{name:string,age:number}> = [
    {
      name:'Mexba',
      age:200
    },
    {
      name:'jankar',
      age:3003
    },
  
  ]

  const add = (x:number,y:number) => x+y;
  add(30,30)



  //generic tuple 
  type GenericTuple<x,y>= [x,y]
  const Manush:GenericTuple<string,string> = ['Mr.x','Mr.y'];

const UserWithId:GenericTuple<number,{name:string,email:string}> = [12,{name:'persio',email:'jde.gmail.co,'}]

 type User = {
  
 }



  //
}
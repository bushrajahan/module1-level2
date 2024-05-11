{



  //Generic  constrains
  const addCoursToStudent = <T extends {id:number; name:string;email:string}>(
    student:T
  )=>{
  const course = "Next level web development ";
  return{
    ...student,
    course
  }
  const student3 = addCoursToStudent({id:2,name:'bushra',email:'jbushra71@gmail.com'})
  const student1 = addCoursToStudent<{
    id:number;
    name:string;
    email:string;
    devType:string
  }>({
    id:222,
    name:'bushra',
    email:'jbushra3@gmail.com',
    devType:'ddd'
  })



  }
  
  
  
  
  
  
  //



}
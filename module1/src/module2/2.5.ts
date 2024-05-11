//Function with generices 

{
   const createArray =(param:string):string[]=>{
    return [param]
   }

   const createArrayWithGeneric = <T>(param:T):T[] =>{
    return [param]
   }
   const res1 = createArray('Bangladesh')
  const resGeneric = createArrayWithGeneric<string>('Bang;adesh')
  type user ={
    name:string;
    id:number
  }
  const resGenericObj = createArrayWithGeneric<user>({id:333,
    name:'gud'
  })

  const createArrayWithTuple = <T,Q>(param1:T,param2:Q):[T,Q] =>{
     return[param1,param2]
  }
  const res3 = createArrayWithTuple<string,{name:string}>("Bangldesh",
  {name:'Asia'});

  const addCourseToStudement =<T>(student:T)=>{
    const course = 'Next level web developemnt'
    return {
      ...student,
      course
    }
  }
  const sudent1 = addCourseToStudement({name:'MR.X',email:'x@gmail.com',devType:'NEM'})








}
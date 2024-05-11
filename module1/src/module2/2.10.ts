{
  //mapped types 
   
   const arrOfNumbers:number[] = [1,3,5];
  //  const arrOfStrings:string[]=['1','5','5']

  const mappedNumber : string[] =arrOfNumbers.map((num)=>{
    return num.toString();
  })

  console.log(mappedNumber)

  interface AreaNumber {
    width:string;
    height:number;
  }

  //generic type 
  type AreaString={
    [key in keyof AreaNumber]:string
  }
  // obj["name"] //string notation

  type Height = AreaNumber["height"] //look up type 

  

type AreaS<T>={
  [key in keyof T]:T[key] ;//lookup tyope
};

const area1:AreaS<{width:string;height:number}>={
  height:299,
  width:'333'
}


  //
}
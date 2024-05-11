//type assertation 

{
  // ami developer type script take basi buji
  let anything:any;

  anything = "Next level web developer";

  anything =333;
  (anything as number).toFixed;
   const kgToGM = (value:string | number| undefined) =>{
    if(typeof value === 'string'){
      const covertedValue = parseFloat(value)
      return `the converted value is : ${covertedValue}`
    }
    if(typeof value === 'number'){
      return value
    }
   }
   const result1 = kgToGM(1000) as number
   const result2 = kgToGM('1000') as string


type customError = {
  message:string
}
try{}
catch(error){
  console.log((error as customError).message)
}


}
{
  // nullable type
   const searchName = (value:string |null)=>{
    if(value)
      console.log('searching')
    else
    console.log('There is nothing to search')
   }
   searchName(null)

   const getSpeedMeterPerSecond = (value:unknown)=>{
    if(typeof value === 'number'){
      const convertedSpeed = value;
      console.log(`The speed is ${convertedSpeed}`)
    }
    if(typeof value === 'string'){
      const[result,unit] = value.split(" ")
      const speed = value;
      console.log(`The speed is ${value}`)
    }
   }
   getSpeedMeterPerSecond(`1000kms^-1`)
   const throwError = (msg:string): never=>{
       throw new Error(msg)
   }
   throwError('nuskjulk hoy gaya ')


}

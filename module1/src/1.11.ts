{
  // ? ternary operator || optional chaining || nullish coalescing operator

  const age : number = 34;

  if(age>=19){
    console.log('adult')
  }
  else {
    console.log('not adult ')
  }
   const isAdult = age>=10?'mor':'yes'
   //nullish operator
   const isAuthorized = null
   const result1 = isAuthorized??"Guest"
   console.log(result1)
}
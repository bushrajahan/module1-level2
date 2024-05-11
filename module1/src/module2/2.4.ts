{
  //interface - generic 


  interface Developer<T,X=null> {
    name:string ;
    computer:{
      brand:string;
      model:string;
    }
    smartWatch:T
    bike?:X
  }
  type EmailWatch = {
    brand:'Apple',
    model:'Something',
  }
  interface bike {
    band:string;
    name:string
  }

  const poorDeveloper:Developer <EmailWatch,bike> ={
    name:'persain',
    computer:{
      brand:'Asus',
      model:'x-344UR',
                                    
    },
    smartWatch:{
      brand:'Apple',
      model:'Something',
      
    },
    bike:{
      band:'Appe',
      name:'gogpp'
    }
  }
}
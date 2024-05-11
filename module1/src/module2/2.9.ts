//conditional type 

{

  //  jodi amon kono ar type maner opor nirbor kora than it is called contidtional tyoe 

  type a1 = number 

  type b1 = string 

  type x1 = a1 extends null? true:false 
  type y1 = a1 extends null? true : b1 extends string? string:any 

  type sheikh = {
    bike:string;
    car:string;
    ship:string;
    plain:string;
    
  }

  //car asse kina//bike ase kina //tractor ase kina 

  type checkVechicle<T>= T extends keyof sheikh?true:false

  type HasTractor = checkVechicle<"tractor">



}





//
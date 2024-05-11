{
  //generic constraint with keyof operator 
  type Vechicle = {
    bike:string;
    car:string;
    ship:string;
  }
  type Owner = "bike"| "car"|"ship";//maunally 

  type owner2 = keyof Vechicle;

  const person1:Owner = "bike" 

  const getPropertyValue = <X,Y extends keyof X>(obj :X, key:Y)=>{
    return obj[key]
  }

  const user = {
    name:"Mr Persian",
    age:34,
    address:"cth",
  }
  const car = {
    model:"Toyota 200",
    year:300
  }
  const result1 = getPropertyValue(user,"age")



//

}
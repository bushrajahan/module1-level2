{
  //polymotphism 
  class person{
    getSleep(){
      console.log(' i am sleeping eight hours per day')
    }
  }
   class student extends person{
    getSleep(){
      console.log('i am sleeping for 6 hours per day ')
    }
    
   }
   class Developer extends person{
    getSleep(){
      console.log('i am sleeping 9 hours per day ')
    }
   }

   const getSleepingHours = (param:person)=>{
    param.getSleep()
   }
   const person1 = new person()
   const person2 = new student()
   const person3 = new Developer()
   getSleepingHours(person1)
   getSleepingHours(person2)
   getSleepingHours(person3)


   class shape{
    getArea():number{
      return 0;
    }   
   }
  class Circle extends shape{
    radius:number;
    constructor(radius:number){
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI+this.radius+this.radius ;
    }
  }
  class Rectangular extends shape{
    height:number;
    width:number;
    constructor(height:number,width:number){
      super()
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height + this.width;
    }
  }
  const getShapeArea = (param:shape)=>{
    console.log(param)
  }
  const shape1 =new shape()
  const shape2 = new Circle(10)
  const shape3 = new Rectangular(20,30)
  getShapeArea(shape1)
  getShapeArea(shape2)
  getShapeArea(shape3)
  
  




}
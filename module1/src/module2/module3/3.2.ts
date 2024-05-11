
{
class Person {
  name:string;
  age:number;
  salary:number;
  

  constructor(name:string,age:number,salary:number){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
   getSleep() {
     console.log(`This ${this.name} is  ${this.age} years old `)

  }
}

class Student extends Person {
   constructor(name:string,age:number,salary:number){
    super(name,age,salary)
   } 
}
const Student1 = new Student('Bushra',24,0);
Student1.getSleep()
class Teacher extends Person {
  desigination:string;
  constructor(name:string,age:number,salary:number,desigination:string){
    super(name,age,salary)
    this.desigination = desigination
  }
  
}
const Teacher1 = new Teacher('Busrha',202,23,'professor')
Teacher1.getSleep()

}
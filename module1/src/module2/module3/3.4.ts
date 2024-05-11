// instance of guard 
{
class Animal { 
  name:string;
  species:string;

  constructor(name:string,species:string){
    this.name = name;
    this.species = species
  }
  makeSound(){
    console.log('I am making sound');
  }
}
class Dog extends Animal {
  constructor(name:string,species:string){
    super(name,species)
  }
  makeBark(){
    console.log('i am barking')
  }

}
class Cat extends Animal {
  constructor(name:string,species:string){
    super(name,species)
  }
  makemhew(){
    console.log(`mhew mhew`)
  }
}

//smart way to handle korrar jonno function babohar kortapari 

const isDog = (animal:Animal):animal is Dog=>{
  return animal instanceof Dog;
}
const isCat = (animal:Animal):animal is Cat =>{
  return animal instanceof Cat;
}

//type guard checking 

const getAnimal = (animal:Animal)=>{
  if(isDog(animal)){
    animal.makeBark()
  }
  else if(isCat(animal)){
    animal.makemhew()
  }
  else{
    animal.makeSound()
  }
}

const Dog1 = new Dog('kutta','dog');
const cat1 = new Cat('mhew','Cat')
getAnimal(cat1)



}
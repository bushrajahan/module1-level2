interface vechile1{
  startEngine():void;
  stopEngine():void;
  move():void;
}

//real implementation 

class Car1 implements vechile1 {
  startEngine(): void {
    console.log('i am starting the car engine');
  }
  stopEngine(): void {
    console.log('i am stopped the car engine');
  }
  move(): void {
    console.log('i am moving the car') 
   }
   test(){
    console.log('Testing the car')
   }
}
abstract class Car2{
  abstract startEngine():void;
  abstract stopEngine():void;
  abstract move(): void;
  test(){
    console.log('i am just testing ')
  }
}
class ToyotaCar extends Car2{
  startEngine(): void {
    console.log('i am starting the car engine')
  }
  stopEngine(): void {
    console.log('i am stop the car ')
  }
  move(): void {
    console.log('i am move the car ')
  }
}
const hondar = new ToyotaCar();
hondar.startEngine();

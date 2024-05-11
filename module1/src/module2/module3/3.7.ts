

{

  // static
class Counter{
 static count:number = 0;
  static incerement(){
    return(Counter.count = Counter.count +1)
  }
 static decrement(){
    return(Counter.count = Counter.count -1)
  }
}
// const instance1 = new Counter();
console.log(Counter.incerement())//1->different memory
// const instance2 = new Counter();
console.log(Counter.incerement())//2->different memory 


// const instance3 = new Counter();
console.log(Counter.incerement)//1
}
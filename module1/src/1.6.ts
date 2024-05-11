
{
function add(num1:number , num2:number =10):  number{
    return num1+num2;
}
add(2,3)

const addArraow = (num1:number,num2:number):number => num1+num2;

// object -> function -> method

const poorUser = {
  name:'Bushra',
  balance:0,
  addBalance(balance:number):string {
    return `My new balance is: ${this.balance+ balance}`
  }
}

const arr : number[] = [1,4,9];

const numArray: number[] = arr.map((elem:number):number=> elem)
}
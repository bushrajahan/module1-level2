{
  //setter and gettter 
   class BankBalance {
    public id:number;
    public name:string;
    protected balance: number;
    constructor(id:number,name:string,balance:number){
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    // public addDeposite(money:number){
    //    this.balance = this.balance+money;
    // }
    // public getBalance(){
    //   return this.balance;

    
    // }

  //setter 
  set deposite(amount:number){
    this.balance = this.balance + amount;
  }

    //getter 

    get Balance(){
      return this.balance;
    }
   }
   class student1 extends BankBalance{
     
   }


   const balance1 = new BankBalance(22,'buahra',0)
  //  const account = balance1.getBalance()//Function call kore 
   balance1.deposite= 39;
  const myBalance = balance1.Balance;//property use kore 
   console.log(myBalance)

}
// access modifier

{
  class BankAccount{
   public id:number;
    public name:string;
   protected _balance:number;
    constructor(id:number,name:string,balance:number){
      this.id = id ;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount:number){
     this._balance = this._balance+amount;
    }

    public getBalance(){
      return this._balance;
    }
  }
  class studentAccout extends BankAccount{
    test(){
      console.log(this._balance)
    }
  }


  const goribManushAccount = new BankAccount(111,"mr.gorib",2200)
  // goribManushAccount.balance =0

   goribManushAccount.addDeposit(0)
   const mybalance = goribManushAccount.getBalance()
   console.log(mybalance)

}
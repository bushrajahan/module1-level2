//utility type 
//pick 

type Person ={
  name:String;
  age:number;
  email?:string;
  contactNo:string

}

// kono akta type take pick use kora akta type nia aste pari 

type NameAge = Pick<Person,"name"|"age">

//omit for deleting type
type contactInfo = Omit<Person,"name"|"age">

//REquire
type PersonRequired = Required<Person>

//partial 
type PersonPertial = Partial<Person>

//ReadOnly 
type PersonReadOnly = Readonly<Person>
const person1:PersonReadOnly={
  name:'Mre',
  age:33,
  contactNo:'3300'

}
// person1.name='dmd'here you can assign value because now it is only readable
// Record type 
type Myobj ={
  a:string;
  b:string;
}
const obj1:Myobj={
  a:'aa',
  b:'bb',

}

//we know that object key and value two are string so we can assingn here 

type myobje2 = Record<string,number>

const obje:myobje2={
a:343,
b:33,
c:33
}
const EmptyObj:Record<string,unknown>={}
//rest operator 
//destucturing 


//leran spread operator 

const bros1 :string [] = ['mir','hamza','rahar']

const bros2 : string [] = ['a','b','c']

bros1.push(...bros2)

const mentors1 = {
  prisma: 'Firoz',
  next:'Tonmoy',
  cloud:'Nahid'
}
const mentorList = {

  ...mentors1
}

//learn rest operator 

const greetFriends = (...friends : string[]){
  friends.forEach((friends:string)=>{
    console.log(`hii ${friends}`)
  })
}
greetFriends('bushra','Shakira','khalid')

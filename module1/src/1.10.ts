// {
//   //union types 
//   type frontendDeveloper = 'fakibajdeveloper'|'juniorDeveloper'

//   const newDeveloper : frontendDeveloper = 'juniorDeveloper'
  
//   type fullStackDeveloper ='frontendDeveloper' | 'expertDeveloper'


//   type user = {
//     name:string;
//     email:string;
//     gender:'male'|'female';
//     bloodGroup:'o+'|'A+'|'AB+';
//   }
// }

type FrontendDeveloper = {
  skills: string[];
  designation: 'Frontend Developer';
};

type BackendDeveloper = {
  skills: string[];
  designation: 'Backend Developer'; // Changed to match the capitalization and type of designation in FrontendDeveloper
};

type full = FrontendDeveloper & BackendDeveloper 

const fullStackDeveloper: full = {
  skills: ['HTML', 'CSS', 'JavaScript'],
  designation1: 'Frontend Developer',
  designation2:'Backend Developer'
};


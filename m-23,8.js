 //m-23-8
 class TitleName{
    constructor(){
      this.fname='Sayed';
    }
  }
  class Names extends TitleName {
    constructor(name){
      super()
      this.name=name;
    }
    getTheFullName(){
      return this.fname+' '+this.name;
    }
  } 
  const fperson = new Names('Rishad');
  const sperson = new Names('Mahin');
  console.log(fperson.getTheFullName());
  console.log(sperson.getTheFullName());
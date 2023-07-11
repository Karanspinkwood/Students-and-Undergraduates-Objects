// Interface-like implementation for Iundergrad
const Iundergrad = {
    name: "string",
    age: "number",
    gender: "string",
    nationality: "string",
    batch: "number",
    GPA: "number"
  };
  
  // Parent class: Students
  class Students {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
  
    getNationality() {
      console.log(this.nationality);
    }
  }
  
  // Child class: Undergraduates
  class Undergraduates extends Students {
    constructor(name, age, gender, nationality, batch, GPA) {
      super(name, age, gender, nationality);
      this.batch = batch;
      this.GPA = GPA;
    }
  }
  
  // Associate the Undergraduates class with the Iundergrad interface-like implementation
  class JohnWick extends Undergraduates {}
  
  // Create an Undergraduate instance (John Wick)
  const johnWick = new JohnWick("John Wick", 58, "Male", "USA", 2003, 4.0);
  
  // Print John Wick's nationality in the console
  johnWick.getNationality();
  
class Animal{
    
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name+' eats food ')
    }

}

// let animal = new Animal('Dog');
// animal.eats();

class Alligator extends Animal{

     eats(){
         super.eats();
        console.log(this.name+' eats fishes ')
     }

}

let murphy = new Alligator('Murphy');
murphy.eats();
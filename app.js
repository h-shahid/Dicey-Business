
let generateBtn = document.getElementById('start-btn');
let rollBtn = document.getElementById('roll-btn');
let array = [];
let counter = 1;

let brandNew = document.querySelector('.new') // querySelector allows anything to be selected  *the word new can't be used as a variable name b/c it's a keyword
let value = Math.floor((Math.random()* 6 ) + 1) 
class Die {
    constructor(value) {
        this.div = document.createElement('div');
        this.value = document.createTextNode(value)
        this.div.id = counter 
        this.div.className = 'dice' 
        brandNew.appendChild(this.div)  //appends div created on line 42 
       this.roll();
       this.rollAll();
       
    }
//     roll(){
//         this.div.appendChild(this.value)
// }


    addEvents(){
        this.div.addEventListener('click', () => {
            this.roll();
            
        });
        this.div.addEventListener('dblclick', () => this.destroyDie());
    }

    roll() {
        //determines value of the dice
        let randomVal = Math.floor(Math.random() * 6) + 1;  //creates new variable randomVal 
        this.div.innerText = randomVal;  //replaced innerText of this.div with randomVal  
      
    }

    rollAll() {
    rollBtn.addEventListener('click', () => this.roll());
    } //rollAll button calls roll method  

    
      
    }
    
    generateBtn.addEventListener('click', function () {
        new Die(value); //creates new die w/ a value inside it.
       //die.roll()  //appending value to the die & calls the roll method
       value = Math.floor((Math.random()* 6 ) + 1) //get a new value/random number each roll
       counter++; 
    })
 
    

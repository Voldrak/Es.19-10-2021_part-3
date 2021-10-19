let myAnimal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");

let chose = (myAnimal == 1) ? "Chose the Dog" 
        : (myAnimal == 2) ? "Chose the Cat" 
        : (myAnimal == 3) ? "Chose the Goldfish" 
        : (myAnimal == 4) ? "Chose the Monkey" 
        : (myAnimal == 5) ? "Chose the Panda" 
        : "Animal not found"; 
console.log(chose)
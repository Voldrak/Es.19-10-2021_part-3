let myAnimal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda");

let chose = (myAnimal == 1 && true) ? "chose the Dog"
        : (myAnimal == 2 && true) ? "chose the Cat"
        : (myAnimal == 3 && true) ? "chose the Goldfish"
        : (myAnimal == 4 && true) ? "chose the Monkey"
        : (myAnimal == 5 && true) ? "chose the Panda"
        : "Animal not found"
console.log(chose)

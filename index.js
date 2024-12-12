let age = 25; 

function displayAge() {
    console.log("Age in displayAge:", age);
}

function changeAge(newAge) {
    age = newAge; 
    console.log("Age updated in changeAge:", age);
}

console.log("Initial age:", age); 
displayAge(); 
changeAge(30); 
displayAge(); 
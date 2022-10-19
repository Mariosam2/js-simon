/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const container = document.querySelector('ul.container');
const numOfNumbers = 5;
//const Nums = generateRandomNums(numOfNumbers);
const Nums = [1,2,3,4,5];
let userNumbers = [];
generateHTML(Nums, container);
setTimeout(function(){
    container.innerHTML = '';
}, 3000);
setTimeout(getUserNumbers, 4000);
setTimeout(getGuessedNumbers, 4000);






/**
 * Takes a numeric length and generate and array of
 * random numbers of that length
 * @param {number} length numeric Length of the output array
 * @returns {object} Array of random numbers
 */
function generateRandomNums(length){
    let Numbers = [];
    while(Numbers.length != length){
        const num = getRandomArbitrary(1,100);
        if(!Numbers.includes(num)){
            Numbers.push(num);
        }
    }
    return Numbers;
   
}
/**
 * Takes a minimum and a maximum and returns a random number between [min:max]
 * @param {number} min minimum
 * @param {number} max maximum
 * @returns {number} random number 
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Takes an array and appends to the domElement the elements of that
 * array
 * @param {object} array 
 * @param {object} domElement an HTML element
 */
function generateHTML(array, domElement){
    for(let i = 0; i < array.length; i++){
        const liEl = document.createElement('li');
        liEl.append(array[i]);
        domElement.append(liEl);
    
    }
    
}

// chiedo all'utente 5 prompt in cui inserire i numeri indovinati
function getUserNumbers(){
    for(let i = 0; i < 5; i++){
        userNumbers.push(Number(prompt('Inserisci un numero visto precedentemente')));
        console.log(i);
    }
    
    
}

function getGuessedNumbers (){
    console.log(userNumbers);
    for(let i = 0; i < Nums.length; i++){
        const liEl = document.createElement('li');
        if(Nums.includes(userNumbers[i])){
            // ho bisogno di stampare il numero in base alla sua posizione rispetto alla lista Nums
            liEl.append('Numero indovinato' + Nums[Nums.indexOf(userNumbers[i])]);
        } 
        container.append(liEl);
    }
}
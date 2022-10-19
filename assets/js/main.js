/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const container = document.querySelector('.container');
const NUM_OF_NUMBERS = 5;
//const Nums = generateRandomNums(numOfNumbers);
const NUMS = [1,2,3,4,5];
let userNumbers = [];
generateHTML(NUMS, container);
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
    let numbers = [];
    while(numbers.length != length){
        const num = getRandomArbitrary(1,100);
        if(!numbers.includes(num)){
            numbers.push(num);
        }
    }
    return numbers;
   
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
        const spanEl = document.createElement('span');
        spanEl.append(array[i]);
        domElement.append(spanEl);
    
    }
    
}

// chiedo all'utente 5 prompt in cui inserire i numeri indovinati
function getUserNumbers(){
    for(let i = 0; i < 5; i++){
        userNumber = Number(prompt('Inserisci un numero visto precedentemente'))
        userNumbers.push(userNumber);
        console.log(i);
    }
    
    
}

function getGuessedNumbers (){
    // rimuovo i duplicati in modo da stampare solo una volta un numero indovinato
    userNumbersNoDup = removeDuplicates (userNumbers);
    let scoreEl = document.createElement('div');
    scoreEl.classList.add('score');
    let counter = 0;
    for(let i = 0; i < NUMS.length; i++){
        const spanEl = document.createElement('span');
        if(NUMS.includes(userNumbersNoDup[i])){
            // ho bisogno di stampare il numero in base alla sua posizione rispetto alla lista NUMS
            spanEl.append('Numero indovinato' + NUMS[NUMS.indexOf(userNumbersNoDup[i])]);
            counter++;
        } 
        container.append(spanEl);
    }
    scoreEl.innerHTML = `Numeri indovinati: ${counter}`
    container.insertAdjacentElement('afterbegin', scoreEl);
}

function removeDuplicates (array){
    let arrayNoDuplicates = [];
    for(let i = 0; i < array.length; i++){
        if(!arrayNoDuplicates.includes(array[i])){
            arrayNoDuplicates.push(array[i]);
        }
    }
    return arrayNoDuplicates;
}
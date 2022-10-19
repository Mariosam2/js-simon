const container = document.querySelector('ul.container');
const numOfNumbers = 5;
const Nums = generateNums(numOfNumbers);
generateHTML(Nums);
setTimeout(function(){
    container.innerHTML = '';
}, 8000);

setTimeout(getUserNumbers, 10000);






/**
 * @param {number} length number Length of the output array
 * @returns {object} Array of random numbers
 */
function generateNums(length){
    let Nums = [];
    while(Nums.length != length){
        const num = getRandomArbitrary(1,100);
        if(!Nums.includes(num)){
            Nums.push(num);
        }
    }
    return Nums;
   
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 
 * @param {object} array 
 */
function generateHTML(array){
    for(let i = 0; i < array.length; i++){
        const liEl = document.createElement('li');
        liEl.append(array[i]);
        container.append(liEl);
    
    }
    
}

// chiedo all'utente 5 prompt in cui inserire i numeri indovinati
function getUserNumbers(){
    for(let i = 0; i < 5; i++){
        const userNumber = Number(prompt('Inserisci un numero visto precedentemente'));
        userNumber;
    }
    
}
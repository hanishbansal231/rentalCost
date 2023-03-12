let calculation = document.getElementById('calculation');

const economys = () => {
    let economy = document.getElementById('economy').value;
    let economyAmount = document.querySelector('#economyAmount');
    let result = 4000 * economy;
    economyAmount.innerText ="Total Economy = "+ result+ "/-";
};


const midsizes = () => {
    let midsize = document.getElementById('midsize').value;
    let midsizeAmount = document.querySelector('#midsizeAmount');
    let result = 10000 * midsize;
    midsizeAmount.innerText =  "Total Midsize = " + result+ "/-";
};

const luxurys = () => {
    let luxury = document.getElementById('luxury').value;
    let luxuryAmount = document.querySelector('#luxuryAmount');
    let result = 20000 * luxury;
    luxuryAmount.innerText = "Total Luxery = " +result + "/-";
};

calculation.addEventListener('click', economys)
calculation.addEventListener('click', midsizes)
calculation.addEventListener('click', luxurys)

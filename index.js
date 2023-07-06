const name = 'Amer';
let age = 25;
const isStudent = true;
let occupation = null;

const names = ['Omar', 'Davud', 'Belma', 'Amer'];

const arr1 = [[1, 2, 3], [4, 5, 6]];

const person = {
    name: 'Amer',
    age: 38,
    isStudent: false,
    cars: ['fabia', 'leon'],
    kids: {
        name: 'Omar',
        age: 2
    }
};

const persons = [
    {
        name: 'Amer',
        age: 38,
        isStudent: false
    },
    {
        name: 'Amer',
        age: 38,
        isStudent: false
    }
]

if(isStudent) {
    console.log('Omar je student');
} else {
    console.log('Omar nije student');
}

console.log(occupation);

const add = (num1, num2) => {
  return num1 + num2;
}

function functionName () {
 
}

const result = add(1, 2);

console.log(result);

const boja = "plava";
const gorivo = "benzin";
const snaga_u_kW = 66;
const zapremina_motora = 1600;
const broj_vrata = 5;

const skoda = {
        marka: "Škoda",
        model: "Fabia",
        boja: "plava",
        snaga_u_kW: 50,
        zapremina_motora: 1900,
        broj_vrata: 5
      };
      
 const seat = {
        marka: "Seat",
        model: "Leon",
        boja: "crvena",
        snaga_u_kW: 75,
        zapremina_motora: 1600,
        broj_vrata: 5
       };
    

const automobili = [skoda, seat]

function karakteristike(automobili) {
  console.log("Marka:", automobili.marka);
  console.log("Model:", automobili.model);
  console.log("Boja:", automobili.boja);
  console.log("Zapremina_motora:", automobili.zapremina_motora);
  console.log("Broj_vrata:", automobili.broj_vrata);
}

karakteristike(skoda);
karakteristike(seat);

function sabiranje(a, b){
    let rezultat=a + b;
    return rezultat;
}

let rezultat_sabiranja=sabiranje(3, 5);
console.log(rezultat_sabiranja)

function oduzimanje(a, b){
    let rezultat=a - b;
    return rezultat;
}

let rezultat_oduzimanja=oduzimanje(5, 3);
console.log(rezultat_oduzimanja)

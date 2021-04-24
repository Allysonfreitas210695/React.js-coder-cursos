const numeros = function aleatórioNumeros(){
const newArray = [];
let num;
while(newArray === undefined || newArray.length < 7){
   num = parseInt(Math.random()) * (parseInt(Math.random() - parseInt(Math.random()))) * 60
   console.log(num);
   if(newArray.indexOf(num) !== -1){
     newArray.push(num);
   }
}

}

console.log(numeros);
const numeros = [1,2,3];
const[a,b,c] = numeros;

console.log(a);
console.log(b);
console.log(c);

const[primeiro,,terceiro]=numeros;

console.log(primeiro);
console.log(terceiro);

const[x10,y=20,z=30]=[5,,25];

console.log(x);
console.log(y);
console.log(z);
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let cadena = [];
for (let key of pronoun) {
    for (let index of adj) {
        for (const iterator of noun) {
            console.log(key + index + iterator + ".com");
            cadena.push(key + index + iterator + ".com");
            console.log(key + index + iterator + ".net");
            console.log(key + index + "." + iterator);
        }
    }
}
console.log(cadena);
document.querySelector("div").innerHTML = JSON.stringify(cadena);
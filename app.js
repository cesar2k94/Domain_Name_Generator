let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let cadena = [];

for (let key of pronoun) {
    for (let index of adj) {
        for (const iterator of noun) {
            cadena.push(key + index + iterator + ".com");
            cadena.push(key + index + iterator + ".net");
            cadena.push(key + index + "." + iterator);
        }
    }
}

let element = document.getElementById("list");
for(let i = 0; i < cadena.length; i++ ){
let li = document.createElement("LI");
let text = document.createTextNode(cadena[i]);
console.log(text);
li.appendChild(text);
element.appendChild(li);
}

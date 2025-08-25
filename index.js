let soz = document.getElementById("h1");
let sozbir = document.getElementById("h2");
let soziki = document.getElementById("h3");
let ism = prompt("Ismingizni kiriting!!!");
let familiya = prompt("Familiyangizni kiriting!!!");
let yosh = prompt("Nechi yosh siz!!!");
let bir = prompt("Kata kichikni tanglang 1 yoki 2?")
if(bir == '1'){
    ism = ism.toUpperCase()
    familiya = familiya.toUpperCase()
    yosh = yosh.toUpperCase()
}else{
    ism = ism.toLowerCase()
    familiya = familiya.toLowerCase()
    yosh = yosh.toLowerCase()
}

soz.innerHTML = `Sizning ismingiz: ${ism}`
sozbir.innerHTML = `Sizning familiyangiz: ${familiya}`
soziki.innerHTML = `Sizning yoshingiz: ${yosh}`
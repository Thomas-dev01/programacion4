let compra = Number(prompt("Cual es el valor de su compra?"));

if (compra > "19999" && compra < "50000") {
    let total = compra - (compra * 10 / 100)
    alert("su compra tiene un descuento del 10%, costando en total: " + total);
}
else if (compra > "49999") {
    let total = compra - (compra * 20 / 100)
    alert("su compra tiene un descuento del 20%, costando en total: " + total);
}
else {
    alert("no hay descuento en su compra de " + compra);
}


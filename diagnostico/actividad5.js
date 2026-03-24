let cajero = prompt("Ingrese el numero:\n" +
                    "1 -> Consultar saldo\n" +
                    "2 -> Retirar dinero\n" +
                    "3 -> Depositar dinero\n")

switch (cajero) {
    case "1": 
        alert("Elegiste consultar saldo");
    break;
    case "2":
        alert("Elegiste retirar dinero");
    break;
    case "3":
        alert("Elegiste depositar dinero");
    break;
    default: alert("Tiene que elegir una de las 3 opciones.")
}
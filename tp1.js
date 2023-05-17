// 1------------------
// alert ("un mensaje")

// 2----------------------
// document.write("Hello Word")

// 3-------------------------
// document.write(3+5)

// 4-------------------------
// let nombreUsuario =prompt("nombre de usuario");

// document.write("hola"+" "+nombreUsuario)

// 5---------------------------------
// let escribeUnNum =parseInt(prompt("Escribe Un Numero"));
// let escribeotroNum =parseInt (prompt("Escribe otro Numero"));
// document.write (escribeUnNum+escribeotroNum);

// 6-----------------------------------

// let numero1 =parseInt(prompt("Escribe Un Numero"));
// let numero2 =parseInt (prompt("Escribe otro Numero"));

// if (numero1>numero2){
//     document.write ("el mayor es"+" "+numero1)
// }
// else if (numero1<numero2) {
//       document.write ("el mayor es"+" "+numero2)}

// else {document.write (numero1+" "+"es igual a"+" "+numero2)}

// 7-----------------------------------------
// let numero1 =parseInt(prompt("Escribe Un Numero"));
// let numero2 =parseInt (prompt("Escribe otro Numero"));
// let numero3 =parseInt (prompt("Escribe otro Numero Mas"));


// if (numero1>numero2 && numero2>numero3)
//     document.write ("el mayor es"+" "+numero1)

//     else if (numero1<numero2 && numero2>numero3){document.write("el mayor es"+" "+numero2)}

//     else{document.write("el mayor es"+" "+numero3)}



// 8----------------------------------------------
// let numero1 =parseInt(prompt("Escribe Un Numero"));

// if (numero1 % 2 === 0 ){
//     document.write("si es divisible por 2")
// }
// else{document.write("No es divisible por 2")}



// 9-----------------------------------------------
let str =prompt("Escribe Una Palabra"); 

for(let i=0; i< str.length; i++){
    let vocal=str.charAt(i);
    if  (vocal =="a" || vocal =="e" || vocal =="i" || vocal =="o" || vocal =="u"
        || vocal =="A" || vocal =="E" || vocal =="I" || vocal =="O" || vocal =="U")

    {document.write(str.charAt(i))}}


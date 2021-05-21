
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: erledigt
3. Fkt. Grundrechenarten :: erledigt
4. Ausgabe in Konsole :: erledigt
*/


/***** Dateneingabe mit Überprüfung *****/ 
/** Tests **/
// ausgabe(rechner(getOp(),10,4)); // <-- test ganzer Rechner
ausgabe(getOp()); // <-- test getOp

// get Operator
function getOp() {
    let op = prompt("Bitte Rechenoperator eingeben")
    if (isOpValid(op)) {
        return true;
    } else {
        return "Bitte nochmal!"
    }
    return op;
}

// Operator Check
function isOpValid(checkString) {
    return false;
}





/***** Auswahl der Rechenart *****/ 
/** Tests **/
// ausgabe (rechner("+",2,1));
// ausgabe (rechner("-",2,1));
// ausgabe (rechner("*",2,1));
// ausgabe (rechner("/",2,1));
// ausgabe (rechner("/",2,0)); // <-- geteilt durch 0
// ausgabe (rechner("9",2,0)); // <-- ungültiger Operator
// ausgabe (rechner("+",1)); // <-- Parameter fehlen
function rechner (op,a,b) {    
    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "UPS! Es ist ein Fehler aufgetreten!"
    }
}


/***** Grundrechenarten *****/ 
/** Addition a + b **/ 
// ausgabe (addieren(1,1)); //<---- Test
function addieren(a,b) {
    return a + b;
}
/** Subtraktion a - b **/ 
// ausgabe (subtrahieren(1,1)); //<---- Test
function subtrahieren(a,b) {
    return a - b;
}
/** Multiplikation a * b **/ 
// ausgabe (multiplizieren(1,1)); //<---- Test
function multiplizieren(a,b) {
    return a * b;
}
/** Division a / b **/ 
//ausgabe (dividieren(1,0)); //<---- Test
function dividieren(a,b) {
    if (b!=0) {return a / b;}
    return "Dividieren durch 0 nicht möglich!";
}


/***** Ausgabe *****/ 
// ausgabe("Hallo Welt") //<---- Test
function ausgabe (outputStr) {
    console.log(outputStr);
}
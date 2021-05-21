
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: 
*/


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
ausgabe (dividieren(1,0)); //<---- Test
function dividieren(a,b) {
    if (b!=0) {return a / b;}
    return "Dividieren durch 0 nicht möglich!";
}

/***** Ausgabe *****/ 
// ausgabe("Hallo Welt") //<---- Test
function ausgabe (outputStr) {
    console.log(outputStr);
}
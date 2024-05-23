alert("Elige tu propia aventura: El abominable hombre de las nieves");

function nombre(){
        let nombre= (prompt("¿Cómo deberia llamarse el protagonista de la aventura?")).toLocaleLowerCase();
        return nombre;
}

let nombreProtagonista = nombre();
let jugar = " Ingrese JUGAR para continuar";

let advertencia = prompt("Hola " + nombreProtagonista +  " , este libro es distinto de otros, ¡Tu y solo TU eres el responsable de lo que ocurra en la historia!" + jugar);

if(advertencia == "jugar"){
        alert(nombreProtagonista + " hay peligros, disyuntivas, aventuras y consecuencias. Debes utilizar tus numerosos talentos y buena parte de tu enorme inteligencia. Una decision equivocada puede acabar en desastre, incluso en la muerte. No desesperes, en cualquier momento podes volver atras y elegir otra opcion, modificar el camino de tu historia y cambiar el resultado." + " Preciona ACEPTAR para saber mas sobre esta historia!");
}else {
        alert("sera la proxima!");
}

let introduccion = parseInt(prompt(" Tu y tu mejor amigo Carlos viajaron a Nepal en busca del lejendario Abominable hombre de las nieves. Carlos llego y se instalo directamente en las montañas cuando se entero del avistamieto de la criatura, desde entonces no se sabe nada de el... una tormenta de nieve cubrio las montañas y ahora son casi intransitables. Carlos depende de ti ¿Que haras?" + " Ingresa 1 si pensas que Carlos esta bien, o " + "ingresa 2 si decides buscar a Carlos"));

for(let introduccion=1; introduccion=2;){
        alert("hola aca pone el texto que sigue")
}
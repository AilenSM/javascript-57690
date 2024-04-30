alert("Elige tu propia aventura: El abominable hombre de las nieves");
let nombre = (prompt("¿Cómo deberia llamarse el protagonista de la aventura?")).toLocaleLowerCase()
let jugar = " Ingrese JUGAR para continuar";

let advertencia = (prompt("Hola " + nombre +  " , este libro es distinto de otros, ¡Tu y solo TU eres el responsable de lo que ocurra en la historia!" + jugar));

if(advertencia == "jugar"){
        alert(nombre + " hay peligros, disyuntivas, aventuras y consecuencias. Debes utilizar tus numerosos talentos y buena parte de tu enorme inteligencia. Una decision equivocada puede acabar en desastre, incluso en la muerte. No desesperes, en cualquier momento podes volver atras y elegir otra opcion, modificar el camino de tu historia y cambiar el resultado");
}else(advertencia = "");{
        alert("sera la proxima!");
}

var album=["agra.jpg", "manali.jpg", "Sea beach.jpg", "andaman and nicobar islands.jpg", "goa.jpg"];

var places=["Agra", "Manali", "Sea Beach", "Andaman and Nicobar islands", "Goa"];

var i=0;
function prev() {
    document.getElementById("i1").src=album[i];

    document.getElementById("p1").innerHTML=places[i];
    i--;
}

function next() {
    document.getElementById("i1").src=album[i];

    document.getElementById("p1").innerHTML=places[i];
    i++;
}
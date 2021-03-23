let btnCalc = document.getElementById("submit");
btnCalc.onclick = volume;

function volume() {
    var radius = document.getElementById("radius").value;
    var rad = parseInt(radius);
    var volume = (4.0/3.0) * Math.PI * Math.pow(rad,3);
    document.getElementById('volume').value = volume;
    return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

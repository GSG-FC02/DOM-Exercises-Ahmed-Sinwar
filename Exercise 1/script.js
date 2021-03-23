const btn = document.querySelector('button'); 
btn.addEventListener('click', changeStyle);

function changeStyle() 
{
 text.style.fontSize = "14px";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
 text.style.backgroundColor = "yellow";
}
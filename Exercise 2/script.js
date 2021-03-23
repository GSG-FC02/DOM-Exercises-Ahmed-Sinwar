const btn = document.querySelector('button');
btn.addEventListener('click', getAttributes);

function getAttributes()
{
 var u = document.getElementById("wcc").href;
 alert('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("wcc").hreflang;   
 alert('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("wcc").rel; 
  alert('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("wcc").target; 
  alert('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("wcc").type; 
  alert('The value of the type attribute of the link is : '+y);  
}
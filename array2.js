array=[]


function Hola(){
    var o=document.getElementById("Historia").value;
    var n=document.getElementById("Del").value;
    var p=document.getElementById("World Trade Center").value;
    var ñ=document.getElementById("torres gemelas").value;


    array.push(o);
    array.push(n);
    array.push(p);
    array.push(ñ);
    document.getElementById("cambio").innerHTML=array;

          
}
  

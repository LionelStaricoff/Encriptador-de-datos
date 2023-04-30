let btnEncriptar = document.querySelector(".encriptar");

function encriptar(){
    var entrada = document.querySelector("#text-area");
    alert(entrada.value)
    let arreglo = entrada.value.split('');
   let modificado ="";
    for(arr of arreglo){
      if (arr=="e"){
        modificado+="enter"
      }else if (arr=="i"){
        modificado+="imes";
      }else if (arr=="a"){
        modificado+="ai";
      }else if (arr=="o"){
        modificado+="ober";
      }else if (arr=="u"){
        modificado+="ufat";
      }else{
        modificado+=arr;
      }
        
    }
    let pantalla = document.querySelector(".datos");
    pantalla.innerHTML="<h2>"+modificado+"</h2>"
    
  
}
 
function desencriptar(dato){

}

btnEncriptar.onclick=encriptar;



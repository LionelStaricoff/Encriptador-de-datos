let btnEncriptar = document.querySelector(".encriptar");

function encriptar(){
    let entrada = document.querySelector("#text-area");
   
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
    let pantalla = document.querySelector(".mensaje");
    pantalla.innerHTML='<h2 id="datoH2"> '+modificado+ '</h2>';
    entrada.value="";
  
}
 
function desencriptar(){
  let entrada = document.querySelector("#text-area");
   
  let arreglo = entrada.value.split('');
 let modificado ="";
 let encrypt="";

 for (arr of arreglo){

      if(arr=="e" || arr=="n" || arr=="t" || arr=="r"|| arr=="i"|| arr=="m"|| arr=="s"
      || arr=="a"|| arr=="o"|| arr=="b"|| arr=="u"|| arr=="f"|| arr=="t" ){
        encrypt+=arr;
      }

 }



function vrevertirClave(arr){
  let dato="";
  if (arr=="enter"){
    dato="e"
  }else if (arr=="imes"){
    dato="i";
  }else if (arr=="ai"){
    dato="a";
  }else if (arr=="ober"){
    dato="o";
  }else if (arr=="ufat"){
    dato="u";
  }else{
    dato=arr;
  }
  return dato;
}




}

function copyToClipBoard() {

    var content = document.querySelector("#text-area");
    //alert(content.value)
    content.select();
    document.execCommand("copy");
    content.value="";
    
    }





    let btnCopiar = document.querySelector(".copiar")
    let btnDesencriptar = document.querySelector(".desencriptar")

    btnCopiar.onclick=copyToClipBoard;
    btnEncriptar.onclick=encriptar;
    btnDesencriptar.onclick=desencriptar;



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
    let pantalla = document.querySelector("#text-area-datos");
    pantalla.select();
    pantalla.value = modificado;
    entrada.value="";
  
}


 
function desencriptar(){
  let entrada = document.querySelector("#text-area");
   
 let arr = entrada.value.split('');
 let modificado ="";
 let encrypt="";


   
    //verifica y esta las palabras sifradas 
   for (let i=0; i<arr.length; i++){
    //verifica si esta enter
      if(arr[i]=="e" && arr[i+1]=="n" && arr[i+2]=="t" && arr[i+3]=="e" && arr[i+4]=="r"){
        encrypt="enter";
        i=i+4;
        // verifica imes
      }else if(   arr[i]=="i"&& arr[i+1]=="m"&& arr[i+2]=="e" && arr[i+3]=="s"){
        encrypt="imes";
        i=i+3;
        //verifica ai
      }else if(arr[i]=="a"&& arr[i+1]=="i"){
        encrypt="ai";
        i=i+1;
        //verifica ober
      }else if(arr[i]=="o"&& arr[i+1]=="b"&& arr[i+2]=="e"&& arr[i+3]=="r"){
        encrypt="ober";
        i=i+3;
        //verifica ufat
      }else if(arr[i]=="u"&& arr[i+1]=="f"&& arr[i+2]=="a" &&  arr[i+3]=="t"){
        encrypt="ufat";
        i=i+3;
      }else{
        encrypt+=arr[i];
      }
     
         encrypt=revertirClave(encrypt);
         modificado +=encrypt;
         encrypt="";

 }

 let pantalla = document.querySelector("#text-area-datos");
 pantalla.select();
 pantalla.value = modificado;
 entrada.value="";
}

function revertirClave(arr){
  let dato=arr;
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
  }
  return dato;
}






function copyToClipBoard() {

    let content = document.querySelector("#text-area-datos");
    content.select();
    document.execCommand("copy");
    content.value="";
    
    }





    let btnCopiar = document.querySelector(".copiar")
    let btnDesencriptar = document.querySelector(".desencriptar")

    btnCopiar.onclick=copyToClipBoard;
    btnEncriptar.onclick=encriptar;
    btnDesencriptar.onclick=desencriptar;



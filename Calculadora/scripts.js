function seleciona( aba ){
    let lista = document.getElementsByClassName("wrapper");
    for (let i = 0; i < lista.length ; i++){
        document.getElementById("wrapper-" + i).style.display="none";
        //document.getElementById("btn-" + i).style.background="transparent"
        document.getElementById("btn-"+ i).classList.remove("ativa");
    }
    document.getElementById("wrapper-" + aba).style.display="grid";
    //document.getElementById("btn-" + aba).style.background="#eee";
    document.getElementById("btn-"+ aba).classList.add("ativa");
  }
  
  window.onload = seleciona(0);
  
  document.getElementById("btn-0").addEventListener("click", function(){seleciona(0)});
  document.getElementById("btn-1").addEventListener("click", function(){seleciona(1)});
  document.getElementById("btn-2").addEventListener("click", function(){seleciona(2)});
  
  function calcret(){
    let areabase = document.getElementById("entrada-area").value;
    let arealateral = document.getElementById("entrada-lateral").value;
      
  }
  
  function pa(){
      let valor = parseInt(document.getElementById('entrada-ti').value);
      let razao = parseInt(document.getElementById('entrada-razao').value);
      let termo = parseInt(document.getElementById('entrada-utermo').value);
      
      for(let count=1; count<=termo ; count++){
       pa += "entrada-utermo "+count+" = "+valor+"<br />";
        valor += razao;
      }
      document.getElementById("result-wrapper").innerHTML="";
    }
    
  
    
    function ftor(){
      let tempf = document.getElementById("entrada-ftor").value;
      tempf = parseFloat(tempf);
      if (tempf < -459.67){
        document.getElementById("result-ftor").value = "Valor inexistente abaixo de 0K!";
    } else {
        let tempr = (tempf + 459.67);
        document.getElementById("result-ftor").value = tempr;
    }
  }
  document.getElementById("entrada-ftor").addEventListener("change", ftor);
function CalcularMedia() {
    var disciplina = document.getElementById("disciplina").value;
  
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
  
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
    document.getElementById("media").innerHTML = media;
  
    if (disciplina == "port") {
      document.getElementById("port1").innerHTML = nota1;
      document.getElementById("port2").innerHTML = nota2;
      document.getElementById("port3").innerHTML = nota3;
      document.getElementById("port4").innerHTML = nota4;
      document.getElementById("portMedia").innerHTML = media;
    } else if (disciplina == "mat") {
      document.getElementById("mat1").innerHTML = nota1;
      document.getElementById("mat2").innerHTML = nota2;
      document.getElementById("mat3").innerHTML = nota3;
      document.getElementById("mat4").innerHTML = nota4;
      document.getElementById("matMedia").innerHTML = media;
    } else if (disciplina == "cien") {
      document.getElementById("cien1").innerHTML = nota1;
      document.getElementById("cien2").innerHTML = nota2;
      document.getElementById("cien3").innerHTML = nota3;
      document.getElementById("cien4").innerHTML = nota4;
      document.getElementById("cienMedia").innerHTML = media;
    } else if (disciplina == "art") {
      document.getElementById("art1").innerHTML = nota1;
      document.getElementById("art2").innerHTML = nota2;
      document.getElementById("art3").innerHTML = nota3;
      document.getElementById("art4").innerHTML = nota4;
      document.getElementById("artMedia").innerHTML = media;
    } else {
      alert("Preencha os dados corretamente");
    }
  }
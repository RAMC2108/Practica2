function cargarPagina(data) {

    console.log(data)
  
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
  
    };
    xhttp.open("GET", data , true);
    xhttp.send();
  
    switch (data){
        case 'index.html':
        redireccionar('productos.html');
      break;
      case 'productos.html':
        redireccionar('mision.html');
      break;
      case 'mision.html':
        redireccionar('index.html');
      break;
    }
  }
  
  const redireccionar = (lugar) => {
    setTimeout(() => {
      cargarPagina(lugar)
    }, 3000);
  }
  
  const textoIndex = document.getElementById('titulo').innerHTML;
  if(textoIndex === 'index'){
    setTimeout(() => {
      cargarPagina('index.html')
    }, 3000);
  }
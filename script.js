function limpiarCampos() {
    document.getElementById("conversorForm").reset();
  }
  
  document.getElementById("conversorForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let km = parseFloat(document.getElementById("kmInput").value);
    let m = parseFloat(document.getElementById("mInput").value);
    let ft = parseFloat(document.getElementById("ftInput").value);
    let yardas = parseFloat(document.getElementById("yardaInput").value);
  
   
    if (isNaN(km) && isNaN(m) && isNaN(ft) && isNaN(yardas)) {
      alert("Ingrese al menos un valor para convertir.");
      return;
    }
  
    if (!isNaN(km)) {
      let metros = km * 1000;
      alert(km + " kilómetros son " + metros + " metros.");
    }
    if (!isNaN(m)) {
      let cm = m * 100;
      alert(m + " metros son " + cm + " centímetros.");
    }
    if (!isNaN(ft)) {
      let pulgadas = ft * 12;
      alert(ft + " pies son " + pulgadas + " pulgadas.");
    }
    if (!isNaN(yardas)) {
      let pulgadas = yardas * 36;
      alert(yardas + " yardas son " + pulgadas + " pulgadas.");
    }
  
    // Limpiar los campos del formulario
    limpiarCampos();
  });
  
  
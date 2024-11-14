const enviarDatos = () => {
    //Datos
    let nombre = document.getElementsByName('txtNombre')[0].value;
    let tel = parseInt( document.getElementsByName('txtTel')[0].value);
    let carrera = document.getElementsByName('cmbCarrera')[0].value;
    let semestre = document.getElementsByName('cmbSemestre')[0].value;
    let genero = document.querySelector("input[name='rbGenero']:checked").value;

    
    //Operaciones
    alert(`Nombre: ${nombre}\nTelefono: ${tel}\nCarrera: ${carrera}\nSemestre: ${semestre}\nGenero: ${genero}
           `);
    console.log("****Ciclo For ****")
    for(let i=1; i<=20; i++){
        console.log(i)
    }
    let tipoTarjeta = "Efectivo";
    switch(tipoTarjeta){
        case "Credito":
            console.log("Seleccionaste CREDITO")
            break;
        case "Efectivo":
            console.log("Seleccionaste Efectivo")
            break;
        default:
            console.log("No selecciono")
    }
  }
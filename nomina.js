
let cargos = {"CEO":100000, "Jefe":50000, "Oficina":10000, "Campo":8000, "Limpieza":2000};

let employees = {};
//employees.push({"codigo":0, "nombre":"Naruto","apellido":"Uzumaki", "cargo":"Campo", "cedula":"30437156", "fechadenacimiento":"10 de Octubre"});
employees[0] = {"nombre":"Naruto","apellido":"Uzumaki", "Cargo":"Campo", "cedula":"30437156", "fechadenacimiento":"10 de Octubre"};
//console.log(employees)
let employeesIds = [0];


let conceptos = {};
//conceptos.push({"codigo":0, "nombre":"Sueldo", "tipo":0, "modo":1, "descripcion":"Sueldo del Empleado", "monto":100});
conceptos[0] = {"nombre":"Sueldo", "tipo":0, "modo":1, "descripcion":"Sueldo del Empleado", "monto":100};
console.log(conceptos)
let conceptosIds = [0];

let asignaciones = {0:[0]};
//console.log(asignaciones);

var cuadradoEmpleados = document.getElementById("cuadrado1");
var cuadradoConceptos = document.getElementById("cuadrado2");
var cuadradoAsignar = document.getElementById("cuadrado3");
var cuadradoRevisar = document.getElementById("cuadrado4");

var tablaEmpleados = document.getElementById("tablaEmpleados");
var tablaConceptos = document.getElementById("tablaConceptos");
var tablaAsignados = document.getElementById("tablaAsignados");
var tablaRevisar = document.getElementById("tablaRevisar");

//Esto se hizo en el CSS
// tablaConceptos.style.display = 'none';
// tablaAsignados.style.display = 'none';
// tablaRevisar.style.display = 'none';


var botonEmpleados = document.getElementById("emp");
var botonConceptos = document.getElementById("con");
var botonAsignar = document.getElementById("asi");
var botonRevisar = document.getElementById("rev");
//var botonTablaEmpleados = document.getElementById("temp");
//var botonTablaConceptos = document.getElementById("tcon");
//var botonTablaAsignar = document.getElementById("tasi");

botonEmpleados.onclick = function(){
    cuadradoEmpleados.style.display = 'block';
    cuadradoConceptos.style.display = 'none';
    cuadradoAsignar.style.display = 'none';
    cuadradoRevisar.style.display = 'none';
    tablaEmpleados.style.display = "block";
    tablaConceptos.style.display = "none";
    tablaAsignados.style.display = "none";
    tablaRevisar.style.display = 'none';
}

botonConceptos.onclick = function(){
    cuadradoConceptos.style.display = 'block';
    cuadradoEmpleados.style.display = 'none';
    cuadradoAsignar.style.display = 'none';
    cuadradoRevisar.style.display = 'none';
    tablaEmpleados.style.display = "none";
    tablaConceptos.style.display = "block";
    tablaAsignados.style.display = "none";
    tablaRevisar.style.display = 'none';
}

botonAsignar.onclick = function(){
    cuadradoConceptos.style.display = 'none';
    cuadradoEmpleados.style.display = 'none';
    cuadradoAsignar.style.display = 'block';
    cuadradoRevisar.style.display = 'none';
    tablaEmpleados.style.display = "none";
    tablaConceptos.style.display = "none";
    tablaAsignados.style.display = "block";
    tablaRevisar.style.display = 'none';
}

botonRevisar.onclick = function(){
    cuadradoConceptos.style.display = 'none';
    cuadradoEmpleados.style.display = 'none';
    cuadradoAsignar.style.display = 'none';
    cuadradoRevisar.style.display = 'block';
    tablaEmpleados.style.display = "none";
    tablaConceptos.style.display = "none";
    tablaAsignados.style.display = "none";
    tablaRevisar.style.display = 'block';
}
/*
botonTablaEmpleados.onclick = function(){
    tablaEmpleados.style.display = "block";
    tablaConceptos.style.display = "none";
    tablaAsignados.style.display = "none";
}

botonTablaConceptos.onclick = function(){
    tablaEmpleados.style.display = "none";
    tablaConceptos.style.display = "block";
    tablaAsignados.style.display = "none";
}

botonTablaAsignar.onclick = function(){
    tablaEmpleados.style.display = "none";
    tablaConceptos.style.display = "none";
    tablaAsignados.style.display = "block";
}

*/

var botonRegistrarEmpleados = document.getElementById("registrarEmpleados");
var botonRegistarConceptos = document.getElementById("registrarConceptos");
var botonAsignarConceptos = document.getElementById("asignarConcepto");
var botonAsignarTodos = document.getElementById("asignarTodos");
var botonRevisarEmpleado = document.getElementById("botonRevisarEmpleado");

var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');

botonRegistrarEmpleados.onclick = function(){
    var codigo = Number(document.getElementById("codigo").value);
    var cargo = document.getElementById("cargos").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var cedula = document.getElementById("cedula").value;

    if(codigo == "" || cargo == "" || nombre == "" || apellido == "" || nacimiento == "" || cedula == ""){
        alert("Por favor introduzca los datos completos");
    } else if(employeesIds.includes(codigo)){
        alert("Por favor introduzca un codigo nuevo");
    }
    else{
        var html = "";
        html="<tr><td>"+codigo+"</td><td>"+nombre + ' ' + apellido +"</td><td>"+cargo+"</td><td>"+cedula+"</td><td>"+nacimiento+"</td></tr>";
        r1.innerHTML += html;
        employees[`${codigo}`] = {"nombre":nombre,"apellido":apellido, "Cargo":cargo, "Cedula":cedula, "FechaDeNacimiento":nacimiento};
        employeesIds.push(codigo);
        console.log(employeesIds);
        document.getElementById("codigo").value = "";
        document.getElementById("cargos").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("nacimiento").value = "";
        document.getElementById("cedula").value = "";

        asignaciones[`${codigo}`] = [0];

        html = "<tr><td>"+codigo+"</td><td>"+nombre+"</td><td>"+"0"+"</td><td>"+conceptos[0].nombre+"</td><td>"+cargos[`${cargo}`]+"</td></tr>";
        r3.innerHTML += html;
    }
}

botonRegistarConceptos.onclick = function(){
    var codigo = Number(document.getElementById("codigoConcepto").value);
    var nombre = document.getElementById('nombreConcepto').value;
    var tipo = document.getElementById("tipoConcepto").value;
    var modo = document.getElementById("modoConcepto").value;
    var descripcion = document.getElementById("descConcepto").value;
    var monto = document.getElementById("montoConcepto").value;

    if(codigo == ""|| nombre == ""|| tipo == ""|| modo == ""|| descripcion == ""|| monto == ""){
        alert("Por favor introduzca los datos completos");
    }else if(conceptosIds.includes(codigo)){
        alert("Por favor introduzca un codigo nuevo");
    }
    else{
        let tipoAux, modoAux;
        if(tipo == 0){
            tipoAux = "Pago";
        }else{
            tipoAux = "Retiro"
        }

        if(modo == 0){
            modoAux = "Cantidad";
        }else{
            modoAux = "Porcentaje";
        }

        var html ="";
        html = "<tr><td>"+codigo+"</td><td>"+nombre + "</td><td>"+tipoAux+"</td><td>"+modoAux+"</td><td>"+descripcion+"</td><td>"+monto+"</td></tr>";
        r2.innerHTML += html;
        //conceptos.push({"codigo":codigo, "nombre":nombre, "tipo":tipo, "modo":modo, "descripcion":descripcion, "monto":monto});
        conceptos[`${codigo}`] = {"nombre":nombre, "tipo":tipo, "modo":modo, "descripcion":descripcion, "monto":monto};
        conceptosIds.push(codigo);
        console.log(conceptosIds);
        document.getElementById("codigoConcepto").value = "";
        document.getElementById("nombreConcepto").value = "";
        document.getElementById("descConcepto").value = "";
        document.getElementById("montoConcepto").value = "";

        console.log(conceptos);
    }
}


botonAsignarConceptos.onclick = function(){
    var codigoE = Number(document.getElementById('idAsignarEmpleado').value);
    var codigoC = Number(document.getElementById('idAsignarConcepto').value);
    if(employeesIds.includes(codigoE) && conceptosIds.includes(codigoC)){
        asignaciones[`${codigoE}`].push(codigoC);
        console.log(asignaciones);


    //Empleado {"codigo":codigo, "nombre":nombre,"apellido":apellido, "Cargo":cargos, "Cedula":cedula, "FechaDeNacimiento":nacimiento}
    //Concepto {"codigo":codigo, "nombre":nombre, "tipo":tipo, "modo":modo, "descripcion":descripcion, "monto":monto};
        //Tengo que trabajar segun el codigo, a traves del codigo puedo obtener tipo, modo y monto

        //CodigoE para acceder al codigo del empleado y luego acceder a su cargo

        //CodigoC para acceder al codigo de Concepto

        //El TIPO puede ir al final ya que va a negar el resultado (+ o -)
        //El MODO debe ser el que afecte principalmente, y dichos efectos pueden ser
        //CANTIDAD (0): Se toma la cantidad presente en el concepto
        //PORCENTAJE (1): Se multiplica la cantidad presente en el concepto entre 100 por el sueldo del cargo.
        
        var cf = 0;

        if(conceptos[codigoC].modo == 0){
            cf = conceptos[codigoC].monto;
        }else{
            let porcen = conceptos[codigoC].monto;
            //console.log(porcen);
            let cargoEmpleado = employees[codigoE].Cargo;
            //console.log(cargoEmpleado);
            let sueldoCargo = cargos[cargoEmpleado];
            //console.log(sueldoCargo);

            cf = (porcen/100) * sueldoCargo;
        }



        if(conceptos[codigoC].tipo == 1){
            cf = cf * -1;
        }

        var html = "";
        html = "<tr><td>"+codigoE+"</td><td>"+employees[codigoE].nombre+"</td><td>"+codigoC+"</td><td>"+conceptos[codigoC].nombre+"</td><td>"+cf+"</td></tr>";
        r3.innerHTML += html;
    }
    else{
        alert("Inserte Identificadores Validos");
    }
}


botonAsignarTodos.onclick = function(){
    var idAsignarTodos = Number(document.getElementById("idAsignarTodos").value);

    if(conceptosIds.includes(idAsignarTodos)){
    employeesIds.forEach(element => {
        asignaciones[`${element}`].push(idAsignarTodos);
        var cf = 0;

        if(conceptos[idAsignarTodos].modo == 0){
            cf = conceptos[idAsignarTodos].monto;
        }else{
            let porcen = conceptos[idAsignarTodos].monto;
            //console.log(porcen);
            let cargoEmpleado = employees[element].Cargo;
            //console.log(cargoEmpleado);
            let sueldoCargo = cargos[cargoEmpleado];
            //console.log(sueldoCargo);

            cf = (porcen/100) * sueldoCargo;
        }

        if(conceptos[idAsignarTodos].tipo == 1){
            cf = cf * -1;
        }

        var html = "";
        html = "<tr><td>"+element+"</td><td>"+employees[element].nombre+"</td><td>"+idAsignarTodos+"</td><td>"+conceptos[idAsignarTodos].nombre+"</td><td>"+cf+"</td></tr>";
        r3.innerHTML += html;
    });
    }
    else{
        alert("Ingrese un Concepto Valido");
    }
}


botonRevisarEmpleado.onclick = function(){
    var codigoE = Number(document.getElementById("idRevisarEmpleado").value);
    if(employeesIds.includes(codigoE)){
    r4.innerHTML = "";
    asignacionesEmpleado = asignaciones[`${codigoE}`];

    let html = "";
    let total = 0;

    asignacionesEmpleado.forEach(element => {
        var cf = 0;

        if(conceptos[element].modo == 0){
            cf = conceptos[element].monto;
        }else{
            let porcen = conceptos[element].monto;
            //console.log(porcen);
            let cargoEmpleado = employees[codigoE].Cargo;
            //console.log(cargoEmpleado);
            let sueldoCargo = cargos[cargoEmpleado];
            //console.log(sueldoCargo);

            cf = (porcen/100) * sueldoCargo;
        }



        if(conceptos[element].tipo == 1){
            cf = cf * -1;
        }

        total += cf;

        html = "<tr><td>"+employees[codigoE].nombre+"</td><td>"+element+"</td><td>"+conceptos[element].nombre+"</td><td>"+cf+"</td><td>"+total+"</td></tr>";
        r4.innerHTML += html;
    });
    }
    else{
        alert("Introduzca un Codigo Valido");
    }
}
let sheetId = '/1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs';
let sheetTitle = 'Cronograma';

let fullUrl = ('https://docs.google.com/spreadsheets/d' + sheetId + '/gviz/tq?sheet=' + sheetTitle);

class miClase {
    constructor(fecha,clase,ut,teoria,practica,tp,docente){
        this.fecha = fecha;
        this.clase = clase;
        this.ut = ut;
        this.teoria = teoria;
        this.practica = practica;
        this.tp = tp;
        this.docente = docente;
        
    }
    tarjeta(){
        document.write(`<article class="col"> <div class="card h-100 shadow-sm"> <div class="card-header text-center bg1 border"> <div class="row"> <div class="col align-self-center"> <p class="m-0">Fecha</p> <p class="h5" id="idFecha">${this.fecha}</p> </div> <div class="col col align-self-center"> <p class="m-0">Clase N°</p> <p class="h5" id="idClase">${this.clase}</p> </div> <div class="col col align-self-center"> <p class="m-0">U. Temática</p> <p class="h5" id="idUnidad">${this.ut}</p> </div> </div> </div> <div class="card-body"> <h5 class="card-title">Teoría</h5> <div class="card-text" id="idTeoria">${this.teoria}</div> <h5 class="card-title mt-2">Práctica</h5> <div class="card-text" id="idPractica">${this.practica}</div> <h5 class="card-title mt-2">TP</h5> <div class="card-text" id="idTp">${this.tp}</div> </div> <div class="card-footer"> <p class="text-black-50" id="idDocente">${this.docente}</p> </div> </div> </article>`)
    }
}

fetch(fullUrl)
    .then(res => res.text())
    .then(rep => {
        var data = JSON.parse(rep.substr(47).slice(0,-2));
   
        let idFecha = document.getElementById('idFecha');
        let idClase = document.getElementById('idClase');
        let idUnidad = document.getElementById('idUnidad');
        let idTeoria = document.getElementById('idTeoria');
        let idPractica = document.getElementById('idPractica');
        let idTp = document.getElementById('idTp');
        let idDocente = document.getElementById('idDocente');
        let length = data.table.rows.length;
        let tabla = (data.table.rows)
            
        }
 
            
})

const primera = new miClase("00 ABR","01","1","Estructuras reticuladas:Estructuras de acero. Estructuras de madera Estudio isostático. Solicitaciones y esfuerzos de los componentes estructurales sometidos a cargas estáticas verticales y oblicuas. Métodos gráficos y analíticos.","Ejercitación sobre teoría","Seguimiento TP2","Valeria Herrero");
primera.tarjeta();

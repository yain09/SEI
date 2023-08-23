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
        return `<article class="col"> <div class="card h-100 shadow-sm"> <div class="card-header text-center bg1 border"> <div class="row"> <div class="col align-self-center"> <p class="m-0">Fecha</p> <p class="h5" id="idFecha">${this.fecha}</p> </div> <div class="col col align-self-center"> <p class="m-0">Clase N°</p> <p class="h5" id="idClase">${this.clase}</p> </div> <div class="col col align-self-center"> <p class="m-0">U. Temática</p> <p class="h5" id="idUnidad">${this.ut}</p> </div> </div> </div> <div class="card-body"> <h5 class="card-title">Teoría</h5> <div class="card-text" id="idTeoria">${this.teoria}</div> <h5 class="card-title mt-2">Práctica</h5> <div class="card-text" id="idPractica">${this.practica}</div> <h5 class="card-title mt-2">TP</h5> <div class="card-text" id="idTp">${this.tp}</div> </div> <div class="card-footer"> <p class="text-black-50" id="idDocente">${this.docente}</p> </div> </div> </article>`
    }
}

function load() {
    let sheetId = '/1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs';
    let sheetTitle = 'Cronograma';

    let fullUrl = ('https://docs.google.com/spreadsheets/d' + sheetId + '/gviz/tq?sheet=' + sheetTitle);
    fetch(fullUrl)
    .then(res => res.text())
    .then(rep => {
        var data = JSON.parse(rep.substr(47).slice(0,-2));
        let length = data.table.rows.length;
        let tabla = (data.table.rows)
            let m = [];

            for(let i = 0;i<=2;i++){
            let fila = tabla[i].c;

            const info = new miClase(
                String(fila[0].f),
                String(fila[1].f),
                String(fila[2].f),
                String(fila[5].v),
                String(fila[7].v),
                String(fila[9].v),
                String(fila[3].v));

                const miElemento = document.getElementById('miElemento');
                miElemento.innerHTML = info.tarjeta();
            }
    }
    )
}

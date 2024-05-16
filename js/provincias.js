let provincias = [
    "Buenos Aires",   "Córdoba",   "Santa Fe",   "Ciudad Autónoma de Buenos Aires",   "Mendoza",   "Tucumán",   "Entre Ríos",   "Salta",   "Misiones",   "Chaco",   "Corrientes" , "Santiago del Estero",    "San Juan",    "Jujuy",    "Río Negro",    "Neuquén",    "Formosa",    "Chubut",    "San Luis",    "Catamarca",    "La Rioja",    "La Pampa",    "Santa Cruz",    "Tierra del Fuego, Antártida e Islas del Atlántico Sur"   ];

    //for of / for in
    // for (data of provincias) {

    //     document.write("<option>"+data+"</option>")
        
    //     //console.log(data)
    // }

    for (data in provincias) {
        document.write("<option>"+data+"</option>")

        //provincias[data]
    }
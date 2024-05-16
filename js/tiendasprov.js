
var map = L.map('map').setView([-38.416097, -63.616672], 4); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const tiendas = {
    buenosaires: [
        {lat: -34.61653422877783, lng: -58.41874358061902, name: 'Para mi Sin Tacc,<br><br>Quito 3715, Cdad. Autónoma de Buenos Aires', image: 'https://i.ibb.co/99DPdb6/parami-sin-tacc.png'},
        {lat: -34.663597232014766, lng: -58.53867555914777, name: 'Organic Sin Tacc,<br><br>Av. Gral. Enrique Mosconi 1056, Lomas del Mirador, Provincia de Buenos Aires', image: 'https://i.ibb.co/6rMRR0g/organic-sin-tacc.png'},
        {lat: -34.706850683992656, lng: -58.39235044857535, name: 'Sin Gluten Express,<br><br>Juan Piñeiro 40, Provincia de Buenos Aires', image: 'https://i.ibb.co/Kzw7RTt/sin-gluten-express.png'}
    ],
    cordoba: [
        {lat: -31.397874638601127, lng: -64.18508345027232, name: 'GUSTAZO - Gluten Free,<br><br>Juan Antonio Lavalleja 1550, Córdoba', image: 'https://i.ibb.co/NCmzS2K/gustazo-sin-t.png'},
        {lat: -31.424391332492362, lng: -64.18441385868745, name: 'El kiosquito sin Tacc,<br><br>Ituzaingó 619, Córdoba', image: 'https://i.ibb.co/xM0ZGcS/el-kiosquito-sin-t.png'},
        {lat: -31.408489292675785, lng: -64.21964004861654, name: 'Cero Glut-Fábrica de Alimentos libres de gluten,<br><br>Av. Duarte Quirós 2743, Córdoba', image: 'https://i.ibb.co/Th8Ynmd/sin-gluten-fabrica-de-al.png'}
    ],
    jujuy: [
        {lat: -24.181999004042577, lng: -65.3048757385538, name: 'Vito´s almacen sin TACC,<br><br>Salta 842, San Salvador de Jujuy, Jujuy', image: 'https://i.ibb.co/MfkK8sq/vito-s.png'},
        {lat: -24.183709687434447, lng: -65.30547461061447, name: 'Celiaquina,<br><br>Mercado municipal 6 de agosto, Gral. Alvear 885 Local 11, San Salvador de Jujuy, Jujuy', image:'https://i.ibb.co/9ydhMsb/celiaquina.png'},
        {lat: -24.182866394888645, lng: -65.30421255930277, name: 'Suma Qamaña,<br><br>Gral. Güemes 799, San Salvador de Jujuy, Jujuy', image: 'https://i.ibb.co/3SCSjNq/suma-qama-a.png'}
    ],
    salta: [
        {lat: -24.78683173816094, lng: -65.41441147838695, name: 'Celicity Gluten Free,<br><br>Av. Belgrano 874, Salta', image: 'https://i.ibb.co/5Kfn1kd/celicity.png'},
        {lat: -24.78381655637785, lng: -65.41890086168925, name: 'Panetteria Sin Tacc,<br><br>Marcelo T. de Alvear 445, Salta', image: 'https://i.ibb.co/NyrrSVg/panetteria.png'},
        {lat: -24.794685976149886, lng: -65.4113622689941, name: 'Zayt Almacén Saludable,<br><br>Alberdi 395, Salta', image: 'https://i.ibb.co/Mp1kv9R/zayt.png'}
    ]
};

let markers = [];

function agregarTodosLosMarcadores() {
    Object.keys(tiendas).forEach(provincia => {
        tiendas[provincia].forEach(tienda => {
            const popupContent = 
            `<div style="display: flex; align-items: center;">
                    <img src="${tienda.image}" alt="${tienda.name}" style="width: 150px; margin-right: 10px;">
                    <div style="flex-grow: 1;">
                        <h4 style="margin: 0;" class= "ti";>${tienda.name}</h4>
                    </div>
                </div>`;
            
            const marker = L.marker([tienda.lat, tienda.lng])
                .addTo(map)
                .bindPopup(popupContent);
            markers.push(marker);
        });
    });
}

function agregarMarcadores(provincia) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    tiendas[provincia].forEach(tienda => {
        const popupContent = 
        `<div style="display: flex; align-items: center;">
                <img src="${tienda.image}" alt="${tienda.name}" style="width: 150px; margin-right: 10px;">
                <div style="flex-grow: 1;">
                    <p style="margin: 0;">${tienda.name}</p>
                </div>
            </div>`;

        const marker = L.marker([tienda.lat, tienda.lng])
            .addTo(map)
            .bindPopup(popupContent);
        markers.push(marker);
    });
}

document.getElementById('provincia').addEventListener('change', function() {
    const provincia = this.value;
    if (provincia) {
        agregarMarcadores(provincia);
        const bounds = L.latLngBounds(tiendas[provincia].map(tienda => [tienda.lat, tienda.lng]));
        map.fitBounds(bounds);
    } else {
        map.setView([-38.416097, -63.616672], 4);
    }
});

agregarTodosLosMarcadores();

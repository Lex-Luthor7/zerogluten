from flask import Flask, render_template, request,session, redirect, url_for, flash, jsonify
from os import remove
from os import path
from werkzeug.utils import secure_filename
from flask_mysqldb import MySQL, MySQLdb
from datetime import date, datetime
from controller_db import *
from db import *

app = Flask(__name__)
app.secret_key = 'zerogluten789'
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config ['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

def basicInfo(getTitle):
    today = date.today()
    now = datetime.now()
    title=getTitle
    return [title, today.strftime('%Y'), now]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


@app.route("/")
def home():
    title="Home"
    # return saludo
    return render_template("index.html",title=basicInfo(title))

@app.route("/tiendas")
def cargarTienda():
    title="Tienda"
    # productos = obtenerProductos()
    return render_template("tiendas.html",title=basicInfo(title))


#nuevo vinculado con la funcion
@app.route("/congelados")
def cargarCongelados():
    productos = obtenerProductos()
    return render_template("congelados.html", productos=productos)


@app.route("/carrito")
def cargarCarrito():
    title="Carrito"
    catalogo = obtenerProductos()
    return render_template("carrito.html",title=basicInfo(title), productos=catalogo)

if __name__ == "__main__":
    app.run(debug=True)


###Login###

@app.route("/login")
def Acc_Adm():
    title="Iniciar Sesion"
    return render_template("/login.html", title=basicInfo(title))
##
@app.route("/acceso-usuario", methods=['POST'])
def ingresa_datos():
        email = request.form ['email']
        password = request.form ['password']
        usuario = login(email, password)
        if usuario:
            session['loggedin'] = True
            session['correo'] = usuario['correo']
            flash('¡Inicio de sesión exitoso!', 'success')
            return redirect("/administrador")
        else:
            flash('¡Correo o contraseña incorrectos!', 'danger')
            return redirect("/login")

# Catalogo ADM
@app.route("/administrador")
def Admin():
    title="Catalogo"
    if 'loggedin' in session:
        catalogo = obtenerProductos()
        return render_template("administrador.html",title=basicInfo(title), productos=catalogo)
    else:
        return redirect("/login")

#Nuevo Producto
@app.route("/cargar_prod", methods=['GET', 'POST'])
def cargar_nuevo_producto():
    title = "Nuevo Producto"
    if request.method == 'POST':
        if 'imagen' not in request.files:
            flash('No se ha seleccionado ninguna imagen.', 'danger')
            return redirect(request.url)

        file = request.files['imagen']
        if file.filename == '':
            flash('No se ha seleccionado ninguna imagen.', 'danger')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            nom_prod = request.form['nombre']
            pre_prod = request.form['precio']
            img_prod = filename  

            result = cargarProducto(nom_prod, pre_prod, img_prod)  
            if result:
                flash('Producto agregado con éxito.', 'success')
            else:
                flash('Hubo un error al agregar el producto.', 'danger')
            return redirect('/administrador')

    return render_template('nuevo_prod.html', title=basicInfo(title))


@app.route("/editar_prod/<int:id>", methods=['GET', 'POST'])
def editarProd(id):
    title = "Editar Producto"
    if request.method == 'POST':
        nom_edit = request.form['prod_nombre']
        pre_edit = request.form['prod_precio']
        img_actual = request.form['prod_imagen_actual']

        if 'prod_imagen' in request.files:
            file = request.files['prod_imagen']
            if file and file.filename != '':
                if allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                    file.save(filepath)
                    img_edit = filename
                else:
                    flash('Tipo de archivo no permitido', 'danger')
                    return redirect(request.url)
            else:
                img_edit = img_actual
        else:
            img_edit = img_actual

        actualizar_prod(nom_edit, pre_edit, img_edit, id)
        flash('Producto actualizado con éxito.', 'success')
        return redirect('/administrador')
    else:
        producto = obtener_prod_id(id)
        return render_template('editar_prod.html', title=title, producto=producto)


#Borrar
@app.route("/borrar_prod/<int:id>")
def borrarProd(id):
    eliminar_prod(id)
    return redirect("/administrador")

#Buscar Producto en Form Congelados
@app.route('/buscar_producto', methods=['GET'])
def buscar_producto():
    query = request.args.get('query', '')
    conexion = conectarMySQL()
    try:
        with conexion.cursor() as cursor:
            query_sql = "SELECT id, nombre, precio, imagen FROM catalogo WHERE nombre LIKE %s OR precio LIKE %s"
            cursor.execute(query_sql, (f'%{query}%', f'%{query}%'))
            productos = cursor.fetchall()
        return jsonify(productos)
    finally:
        conexion.close()
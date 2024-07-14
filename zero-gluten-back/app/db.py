import pymysql


def conectarMySQL():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        db='productos',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def conectarRestaurantes():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        db='restaurant_db',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def conectarContacto():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        db='formulario',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def conectarPregFre():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        db='restaurantes',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

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

def conectarRest():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        db='restaurant_db_new',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
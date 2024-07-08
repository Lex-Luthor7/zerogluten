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

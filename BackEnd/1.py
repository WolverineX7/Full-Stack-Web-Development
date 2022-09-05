import mysql.connector

mydb = mysql.connector.connect(host='localhost',user='root',passwd='shree7',database='demo1',autocommit=True)

cursor = mydb.cursor()
# cursor.execute("insert into class values ('Jack',23,5,'Mysore')")
# city = 'Bengaluru'
# cursor.execute("insert into class values ('Chandler',25,10,%s)",(city,))

age = 20
city = 'Pune'
cursor.execute("insert into class values ('Chandler',%s,10,%s)",(age,city,))

cursor.execute("select * from class")

# x = cursor.fetchone()
# x = cursor.fetchmany()
x = cursor.fetchall()
print(x)
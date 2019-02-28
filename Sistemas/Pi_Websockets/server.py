import socket 
HOST = '192.168.137.26' 
PORT = 300  
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
s.bind((HOST, PORT)) 
s.listen(1) 
conn, addr = s.accept() 
print ('Connected by', addr )
while 1: 
    data = conn.recv(1024) 
    if not data: break 
    conn.sendall(data) 
conn.close()
import socket
HOST='192.168.137.26'
PORT=3000
s= socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect((HOST,PORT))
while True:
    command=input()
    s.send(command)
    r= s.recv(1024)
    #Print r
    print(r)
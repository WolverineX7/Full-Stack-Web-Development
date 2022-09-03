from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User,auth

# Create your views here.
def home(requests):
    first_name = "Adam"
    age = 20
    return render(requests,'home.html',{'name':first_name , 'age' : age})

def login(requests):
    if requests.method == 'POST':
        username=requests.POST.get('username')
        password = requests.POST.get('password')

        user=auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(requests,user)
            print("Login successful")
            return redirect('/')
    else:
        return render(requests,'login.html')

def signup(requests):
    if requests.method == 'POST':
        firstname = requests.POST.get('first_name')
        lastname = requests.POST.get('last_name')
        email = requests.POST.get('email')
        username = requests.POST.get('username')
        password = requests.POST.get('password')
        password2 = requests.POST.get('password2')

        if password == password2:

            user = User.objects.create_user(
                username = username, 
                email = email,
                password = password,
                first_name = firstname,
                last_name = lastname
            )
            print("User created")
            return redirect('/')
        else:
            print("Wrong password")

    else: 
        return render(requests,'signup.html')

def add(requests):
    val1 = int(requests.POST['num1'])
    val2 = int(requests.POST['num2'])
    val3 = val1 + val2
    return render(requests,'add.html',{'result' : val3})

def register(requests):
    return HttpResponse(requests,'register.html')
from django.shortcuts import render
from utils.shortcuts import json_response
from django.core.mail import send_mail
from . import models
from threading import Thread
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def index(request):
    return render(request, "CtrlXApp/index.html")

def join(request):
    models.Customer(
        name=request.POST["name"],
        email=request.POST["email"],
        skills=request.POST["skills"],
        reference=request.POST["reference"]
    ).save()
    Thread(target=lambda : send_mail("Welcome to Ctrl-X Hub", "Hello %s, \n Thank you for joining our community. Feel free to stop by the hub within our work hours.\n Regards, Ctrl-X Hub Management." %request.POST["name"], "ctrlxhub@gmail.com", [request.POST["email"]])).start()
    return json_response(True)
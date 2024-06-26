from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer,NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.
#serializer will check against fields against models and verify 

class NoteListCreate(generics.ListCreateAPIView): #list lists all notes or creates new note
    serializer_class=NoteSerializer
    permission_classes=[IsAuthenticated] #cant call unless u pass valid JWTTOken

    def get_queryset(self):
        user=self.request.user ##user that is authenticated gives user - used to filter nites
        return Note.objects.filter(author=user) #all notes written by a user
    
    def perform_create(self,serializer): ##overrding to custom function
        if serializer.is_valid(): #need to check if serializer is valid save make new version of noye
            serializer.save(author=self.request.user) #author need to be added manually

        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    queryset=Note.objects.all()
    serializer_class=NoteSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        user=self.request.user ##user that is authenticated gives user - used to filter nites
        return Note.objects.filter(author=user) #same filter fir delete automatically deletes
    


class CreateUserView(generics.CreateAPIView):
    queryset =User.objects.all()   #list of all objs to not create aldy existing user
    serializer_class=UserSerializer   #what data to accept username and password
    permission_classes=[AllowAny] #who can call this





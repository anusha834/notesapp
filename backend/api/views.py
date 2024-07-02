# from django.shortcuts import render

# from django.contrib.auth.models import User
# from rest_framework import generics
# from .serializers import UserSerializer,NoteSerializer
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from .models import Note,Hotels,Area
# from .serializers import HotelSeriaizer

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# # Create your views here.
# #serializer will check against fields against models and verify 

# class NoteListCreate(generics.ListCreateAPIView): #list lists all notes or creates new note
#     serializer_class=NoteSerializer
#     permission_classes=[IsAuthenticated] #cant call unless u pass valid JWTTOken

#     def get_queryset(self):
#         user=self.request.user ##user that is authenticated gives user - used to filter nites
#         return Note.objects.filter(author=user) #all notes written by a user
    
#     def perform_create(self,serializer): ##overrding to custom function
#         if serializer.is_valid(): #need to check if serializer is valid save make new version of noye
#             serializer.save(author=self.request.user) #author need to be added manually

#         else:
#             print(serializer.errors)

# class NoteDelete(generics.DestroyAPIView):
#     queryset=Note.objects.all()
#     serializer_class=NoteSerializer
#     permission_classes=[IsAuthenticated]

#     def get_queryset(self):
#         user=self.request.user ##user that is authenticated gives user - used to filter nites
#         return Note.objects.filter(author=user) #same filter fir delete automatically deletes
    


# class CreateUserView(generics.CreateAPIView):
#     queryset =User.objects.all()   #list of all objs to not create aldy existing user
#     serializer_class=UserSerializer   #what data to accept username and password
#     permission_classes=[AllowAny] #who can call this

# class HotelList(generics.ListAPIView):
#     # queryset=Hotels.objects.all()
#     serializer_class=HotelSeriaizer
    

#     def get_queryset(self):
#         queryset = Hotels.objects.all()
#         pincode = self.request.query_params.get('pincode', None)
#         if pincode is not None:
#             queryset = queryset.filter(pincode=pincode)
#         return queryset


# @api_view(['GET'])
# def get_areas(request):
#     areas = Area.objects.all()
#     area_data = [{"area": area.area, "pincode": area.pincode} for area in areas]
#     return Response(area_data)

# views.py
from .models import Note,Hotels,Area
# from .serializers import HotelSeriaizer
from rest_framework.decorators import api_view,permission_classes

from rest_framework.response import Response
from rest_framework import status
from .models import Area, Hotels
from .serializers import AreaSerializer, HotelSeriaizer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer

class CreateUserView(generics.CreateAPIView):
    queryset =User.objects.all()   #list of all objs to not create aldy existing user
    serializer_class=UserSerializer   #what data to accept username and password
    permission_classes=[AllowAny] #who can call this

@api_view(['GET'])

def get_areas(request):
    try:
        areas = Area.objects.all()
        serializer = AreaSerializer(areas, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def HotelList(request):
#     pincode = request.GET.get('pincode')
#     if pincode:
#         hotels = Hotels.objects.filter(pincode=pincode)
#     else:
#         hotels = Hotels.objects.all()
#     serializer = HotelSeriaizer(hotels, many=True)
#     return Response(serializer.data)

class HotelList(generics.ListAPIView):
    serializer_class = HotelSeriaizer

    def get_queryset(self):
        queryset = Hotels.objects.all()
        pincode = self.request.query_params.get('pincode', None)
        if pincode:
            queryset = queryset.filter(pincode=pincode)
        return queryset


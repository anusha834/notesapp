from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Note,Hotels,Area

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields= ["id","username","password"]
        extra_kwargs={"password": {"write_only":True}}

    def create(self,validated_data):  #valid data in fields
        user=User.objects.create_user(**validated_data)
        return user



class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Note
        fields=["id","title","content","created_at","author"]
        extra_kwargs={"author": {"read_only": True}}  #manually set person making note automatically becomes author
                
class HotelSeriaizer(serializers.ModelSerializer):
    class Meta:
        model=Hotels
        fields=["name", 'address','rating', 'review','latitude','longitude','url','pincode']
    

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'

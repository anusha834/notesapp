# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

from django.contrib.auth.models import User


class UserLoginDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    last_login = models.DateTimeField(auto_now=True)
    login_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username
    
class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title



class Area(models.Model):
    area = models.TextField(primary_key=True)
    pincode = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'area'




class Hotels(models.Model):
    name = models.CharField(max_length=300, blank=True, primary_key=True)
    address = models.TextField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    review = models.IntegerField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    url = models.TextField(blank=True, null=True)
    pincode = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hotels'

from django.db import models

from django.contrib.auth.models import User
# Create your models here.
class Note(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    created_at= models.DateTimeField(auto_now_add=True) #automatically populates
    author= models.ForeignKey(User,on_delete=models.CASCADE,related_name="notes") #link differernt pieces (each user to have collection of notes; one user many notes one to many relation)
    #on delete user models.Cascade deletes al notes user had , User nobj can access note objects
    #use foreign key to link 
    #make serialiser for api- need to convrt to json


    def __str__(self):
        return self.title

     

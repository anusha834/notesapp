
# Register your models here.
from django.contrib import admin
from .models import Note, Area, Hotels

admin.site.register(Area)
admin.site.register(Hotels)
admin.site.register(Note)

from django.urls import path
from .import views
from .views import HotelList, get_areas

urlpatterns=[
#viewing or creating notes
    path('areas/', get_areas, name='get-areas'),
    # path('hotels/', HotelList.as_view(), name='hotel-list'),
    # path('hotels/', HotelList, name='hotel-list'),
    # path("notes/",views.NoteListCreate.as_view(),name="note-list"),
    path('hotels/', HotelList.as_view(), name='hotel-list')
   
    # path("notes/delete/<int:pk>/",views.NoteDelete.as_view(),name="delete-note"), #pk primary key

]

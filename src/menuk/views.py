# Create your views here.
from django.shortcuts import get_object_or_404, redirect

import models

def place_like(request, pk):
    place = get_object_or_404(models.Place, pk=pk)
    place.like()
    return redirect(place)

def place_unlike(request, pk):
    place = get_object_or_404(models.Place, pk=pk)
    place.unlike()
    return redirect(place)
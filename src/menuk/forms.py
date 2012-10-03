from django.forms import ModelForm
import models

class DailyMenuForm(ModelForm):
    class Meta:
        model = models.DailyMenu
        fields = ['where', 'menu', 'from_url']
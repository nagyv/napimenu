import datetime
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

class DailyMenuManager(models.Manager):
    def get_query_set(self):
        return super(DailyMenuManager, self).get_query_set().filter(day=datetime.date.today())

class Place(models.Model):

    name = models.CharField(max_length=255)
    address = models.TextField()
    map_url = models.URLField()
    base_url = models.URLField(help_text='This is the url to be matched when looking up a place')
    likes = models.IntegerField(default=0)
    unlikes = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if self.base_url[-1] == '/':
            raise ValueError, "The base url should never end with a /"
        return super(Place, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name

    @models.permalink
    def get_absolute_url(self):
        return ('place_detail', (), {'pk': self.pk})

    def like(self):
        self.likes = self.likes + 1
        return self.save()

    def unlike(self):
        self.unlikes = self.unlikes + 1
        return self.save()

class DailyMenu(models.Model):
    day = models.DateField(auto_now_add=True)
    where = models.CharField(max_length=255)
    place = models.ForeignKey(Place, null=True, blank=True)
    menu = models.TextField()
    from_url = models.URLField()

    objects = models.Manager()
    current = DailyMenuManager()

    def __unicode__(self):
        return u'%s on %s' % (self.where, self.day)

    @models.permalink
    def get_absolute_url(self):
        return ('daily_menu_detail', (), {'pk': self.pk})

@receiver(pre_save, sender=DailyMenu)
def set_place(sender, **kwargs):
    instance = kwargs['instance']
    if not instance.pk and not instance.place:
        parts = instance.from_url.split('/')
        for final in range(len(parts), 2, -1):
            url = '/'.join(parts[:final])
            try:
                instance.place = Place.objects.get(base_url=url)
            except Place.DoesNotExist:
                continue


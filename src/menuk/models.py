import datetime
from django.db import models

class DailyMenuManager(models.Manager):
    def get_query_set(self):
        return super(DailyMenuManager, self).get_query_set().filter(day=datetime.date.today())

class DailyMenu(models.Model):
    day = models.DateField(auto_now_add=True)
    where = models.CharField(max_length=255)
    menu = models.TextField()
    from_url = models.URLField()

    objects = models.Manager()
    current = DailyMenuManager()

    def __unicode__(self):
        return u'%s on %s' % (self.where, self.day)

    @models.permalink
    def get_absolute_url(self):
        return ('daily_menu_detail', (), {'pk': self.pk})

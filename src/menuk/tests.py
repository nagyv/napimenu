"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from django.test import TestCase
from tastypie.test import ResourceTestCase
import models

class MenuTest(ResourceTestCase):

    def test_post_new_menu(self):
        post_data = {
            'where': 'Castro',
            'menu': 'asdf asdf',
            'from_url': 'http://index.hu'
        }
        self.assertHttpCreated(self.api_client.post('/api/v1/menu/', format='json', data=post_data))

    def test_post_new_menu_required(self):
        post_data = {
            'menu': 'asdf asdf',
            'from_url': 'http://index.hu'
        }
        self.assertHttpBadRequest(self.api_client.post('/api/v1/menu/', format='json', data=post_data))

        post_data = {
            'where': 'Castro',
            'from_url': 'http://index.hu'
        }
        self.assertHttpBadRequest(self.api_client.post('/api/v1/menu/', format='json', data=post_data))

        post_data = {
            'where': 'Castro',
            'menu': 'asdf asdf',
        }
        self.assertHttpBadRequest(self.api_client.post('/api/v1/menu/', format='json', data=post_data))

class PlaceTest(TestCase):

    def test_no_ending_slash(self):
        self.assertRaises(ValueError, models.Place.objects.create, name='Castro', address='', map_url='http://index.hu/valamimas/', 
            base_url='http://index.hu/valami/')

class DailyMenuTest(TestCase):

    def setUp(self):
        self.place = models.Place.objects.create(name='Castro', address='', map_url='http://index.hu/valamimas/', 
            base_url='http://index.hu/valami')

    def test_finding_place(self):
        menu = models.DailyMenu.objects.create(where='Valahol', menu='valami', from_url='http://index.hu/valami/mas/')
        self.assertEqual(menu.place.pk, self.place.pk)


class SimpleTest(TestCase):
    def test_basic_addition(self):
        """
        Tests that 1 + 1 always equals 2.
        """
        self.assertEqual(1 + 1, 2)

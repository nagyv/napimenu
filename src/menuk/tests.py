"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from django.test import TestCase
from tastypie.test import ResourceTestCase
import models
import json

class MenuTest(ResourceTestCase):

    def test_post_new_menu(self):
        post_data = {
            'where': 'Castro',
            'menu': 'asdf asdf',
            'from_url': 'http://index.hu'
        }
        self.assertHttpCreated(self.api_client.post('/menus/api/v1/menu/', format='json', data=post_data))

    def test_post_new_menu_required(self):
        post_data = {
            'menu': 'asdf asdf',
            'from_url': 'http://index.hu'
        }
        self.assertHttpBadRequest(self.api_client.post('/menus/api/v1/menu/', format='json', data=post_data))

        post_data = {
            'where': 'Castro',
            'from_url': 'http://index.hu'
        }
        self.assertHttpBadRequest(self.api_client.post('/menus/api/v1/menu/', format='json', data=post_data))

        post_data = {
            'where': 'Castro',
            'menu': 'asdf asdf',
        }
        self.assertHttpBadRequest(self.api_client.post('/menus/api/v1/menu/', format='json', data=post_data))

class PlaceTest(TestCase):

    def test_no_ending_slash(self):
        self.assertRaises(ValueError, models.Place.objects.create, name='Castro', address='', map_url='http://index.hu/valamimas/', 
            base_url='http://index.hu/valami/')

class DailyMenuTest(ResourceTestCase):

    def setUp(self):
        super(DailyMenuTest, self).setUp()
        self.place = models.Place.objects.create(name='Castro', address='', map_url='http://index.hu/valamimas/', 
            base_url='http://index.hu/valami')

    def test_finding_place(self):
        menu = models.DailyMenu.objects.create(where='Valahol', menu='valami', from_url='http://index.hu/valami/mas/')
        self.assertEqual(menu.place.pk, self.place.pk)

    def test_get_without_place(self):
        menu = models.DailyMenu.objects.create(where='Valahol', menu='valami', from_url='http://unknown.com/')
        rsp = self.api_client.get('/menus/api/v1/daily/', format='json')
        self.assertHttpOK(rsp)
        json_content = json.loads(rsp.content)
        self.assertFalse(json_content['objects'][0]['place'])

    def test_get_with_place(self):
        self.test_finding_place()
        rsp = self.api_client.get('/menus/api/v1/daily/', format='json')
        self.assertHttpOK(rsp)
        json_content = json.loads(rsp.content)
        self.assertTrue(json_content['objects'][0]['place'])
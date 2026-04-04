
from django.test import TestCase
from django.contrib.auth.models import User

class BasicTest(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username="test")
        self.assertEqual(user.username, "test")

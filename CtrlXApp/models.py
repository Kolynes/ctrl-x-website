from django.db import models

class Customer(models.Model):
    name = models.TextField()
    email = models.EmailField()
    skills = models.TextField()
    reference = models.TextField()
    friend = models.TextField()

    def __str__(self):
        return self.name

    def values(self):
        return {
            "name": self.name,
            "email": self.email,
            "skills": self.skills,
            "reference": self.reference,
            "friend": self.friend
        }
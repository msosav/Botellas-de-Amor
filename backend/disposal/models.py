from django.db import models
from accounts.models import User


class Site(models.Model):
    """
    Site model
    """

    id = models.AutoField(primary_key=True)
    image = models.CharField(max_length=50)
    opens = models.TimeField()
    closes = models.TimeField()
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)

    class Meta:
        db_table = "sites"

    def __str__(self):
        return self.name


class Challenge(models.Model):
    id = models.AutoField(primary_key=True)
    challenge = models.CharField(max_length=50)
    experience = models.IntegerField()

    class Meta:
        db_table = "challenges"

    def __str__(self):
        return self.challenge


class Disposition(models.Model):
    id = models.AutoField(primary_key=True)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    bottles = models.IntegerField()
    weight = models.FloatField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    operator = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="operator")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "dispositions"

    def __str__(self):
        return self.user

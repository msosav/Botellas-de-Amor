# Generated by Django 5.0.4 on 2024-04-22 23:16

import information.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Project",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=50)),
                (
                    "image",
                    models.ImageField(
                        default="projects/default.jpg",
                        upload_to=information.models.upload_to_projects,
                        verbose_name="Image",
                    ),
                ),
                ("location", models.CharField(max_length=50)),
                ("description", models.TextField()),
                ("goal_tons", models.CharField(max_length=50)),
                ("total_tons", models.CharField(max_length=50)),
                ("organizations", models.CharField(max_length=50)),
                ("status", models.CharField(max_length=50)),
            ],
            options={
                "db_table": "projects",
            },
        ),
    ]

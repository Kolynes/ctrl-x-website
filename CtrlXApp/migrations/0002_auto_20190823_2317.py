# Generated by Django 2.2.2 on 2019-08-23 22:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CtrlXApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='department',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='level',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='occupation',
        ),
    ]

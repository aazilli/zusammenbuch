# Generated by Django 3.2 on 2021-04-27 09:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sessions', '0001_initial'),
        ('webapp', '0005_auto_20210423_1425'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='session',
            field=models.ForeignKey(default='default', on_delete=django.db.models.deletion.CASCADE, to='sessions.session'),
            preserve_default=False,
        ),
    ]

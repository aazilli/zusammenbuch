# Generated by Django 3.2 on 2021-04-22 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0003_auto_20210422_0958'),
    ]

    operations = [
        migrations.AlterField(
            model_name='settings',
            name='order_de',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='settings',
            name='order_en',
            field=models.IntegerField(null=True),
        ),
    ]

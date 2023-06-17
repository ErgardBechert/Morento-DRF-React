# Generated by Django 4.2.1 on 2023-06-16 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carCatalog', '0003_carcomment_created_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='carcomment',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='car',
            name='image',
            field=models.ImageField(upload_to='cars/'),
        ),
        migrations.AlterField(
            model_name='carcomment',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
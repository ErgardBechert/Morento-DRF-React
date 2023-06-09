# Generated by Django 4.2.1 on 2023-05-27 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.FloatField()),
                ('type', models.CharField(max_length=255)),
                ('is_recommend', models.BooleanField(default=False)),
                ('capacity', models.IntegerField()),
                ('gasoline', models.IntegerField()),
                ('steering', models.CharField(max_length=255)),
                ('comments', models.IntegerField()),
                ('grade', models.FloatField()),
            ],
        ),
    ]

# PROFILESGUIDE

## SETUP BACKEND

```
  $ virtualenv env
  $ source env/bin/activate
  $ pip install django
      djangorestframework
      pylint
      pylint-django
      django-cors-headers
      PyJWT

  $ python3 manage.py makemigrations
  $ python3 manage.py migrate
  $ python3 manage.py createsuperuser
  $ python3 manage.py runserver
```

// pip freeze > requirements.txt
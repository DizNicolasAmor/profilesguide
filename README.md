# PROFILESGUIDE

## SETUP BACKEND

**Requirements**: python3 , pip3 and virtualenv

**Commands**:

```
  # if it is the first time you set up the project, create a virtual env
  $ virtualenv env

  #activate your virtual environment
  $ source env/bin/activate

  # install dependencies, if they are not installed yet
  $ pip3 install requirements.txt

  # make migrations and migrate, if it is not already done
  $ python3 manage.py makemigrations
  $ python3 manage.py migrate

  # if needed, create a superuser
  $ python3 manage.py createsuperuser

  # run the app
  $ python3 manage.py runserver
```

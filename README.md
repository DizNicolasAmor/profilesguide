# PROFILESGUIDE

## SETUP PROJECT WITHOUT DOCKER

### SETUP BACKEND

**Requirements**: python3 , pip3 and virtualenv

**Commands**:

```
  # go to backend directory
  $ cd backend

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

### SETUP FRONTEND

**Requirements**: node and npm

**Commands**:

```
  # go to frontend directory
  $ cd frontend

  # if it is the first time you set up the project, install dependencies
  $ npm i

  # run the app
  $ npm start
```

from flask import Flask

# configuration
DATABASE = 'theDataBase.db'
DEBUG = True
SECRET_KEY = '1234'


#create our little application :)
app = Flask(__name__)

app.config['DATABASE'] = DATABASE
app.config['DEBUG'] = DEBUG
app.config['SECRET_KEY'] = SECRET_KEY


#this import is neccesary even though it doesn't look like it is being used
import appFolder.views

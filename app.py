from appFolder import app
from werkzeug.contrib.fixers import ProxyFix

app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == '__main__':
	
	app.run(debug=True, host='0.0.0.0', port=8000)
	#app.run(debug=False)
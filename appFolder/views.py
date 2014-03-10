from flask import make_response, request, Response 
from appFolder import app
from pymongo import MongoClient
from bson import json_util, ObjectId

client = MongoClient()
db = client["openLab"]
collection = db["prjc"]

@app.route('/')
def ui(page=None):
	return make_response(open('/var/www/openLab/appFolder/static/partial/index.html').read())

@app.route('/api/message/<id>', methods=['DELETE'])
@app.route('/api/message', methods=['GET','POST'])
def message(id=None):
	if request.method == 'GET':
		rez = [doc for doc in collection.find()]
		return Response(
			json_util.dumps(rez), 
			mimetype='application/json'
			)
	if request.method == 'POST':
		collection.insert(request.json)
		return "POST"
	if request.method == 'DELETE':
		collection.remove({"_id": ObjectId(id)})
		return "DELETE"

@app.route('/api/comment/<id>/<index>', methods=['DELETE'])
@app.route('/api/comment/<id>', methods=['POST'])
def comment(id=None, index=None):
	if request.method == 'POST':
		req = request.json
		req['id'] = ObjectId()
		collection.update({"_id": ObjectId(id)}, {"$push": {"res":req}})
		return "POST"
	if request.method == 'DELETE':
		res = collection.find_one({'_id':ObjectId(id)}, {"res":1, "_id":0})
		del res["res"][int(index)]
		collection.update({'_id':ObjectId(id)},{"$set":{"res":res["res"]}})
		return "DELETE"





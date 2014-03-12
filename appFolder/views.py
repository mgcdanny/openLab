from flask import make_response, request, Response 
from appFolder import app
from pymongo import MongoClient
from bson import json_util, ObjectId

client = MongoClient()
db = client["openLab"]
collection = db["prjc"]

@app.route('/')
def ui(page=None):
	return make_response(open('appFolder/static/partial/index.html').read())

@app.route('/api/thread/<thread_id>', methods=['PUT','DELETE'])
@app.route('/api/thread', methods=['GET','POST'])
def thread(thread_id=None):
	if request.method == 'GET':
		rez = [doc for doc in collection.find()]
		return Response(json_util.dumps(rez), mimetype='application/json')
	if request.method == 'POST':
		collection.insert(request.json)
		return "Thread API POST"
	if request.method == 'PUT':
		req = request.json
		collection.update({"_id": ObjectId(thread_id)}, {"$set": {"ath":req['ath'],"dsc":req['dsc'], "tt":req["tt"]}})
		return "Thread API PUT"	
	if request.method == 'DELETE':
		collection.remove({"_id": ObjectId(thread_id)})
		return "Thread API DELETE"

@app.route('/api/comment/<thread_id>/<cmt_id>', methods=['PUT','DELETE'])
@app.route('/api/comment/<thread_id>', methods=['POST'])
def comment(thread_id=None, cmt_id=None):
	if request.method == 'POST':
		req = request.json
		req['cmt_id'] = ObjectId()
		collection.update({"_id": ObjectId(thread_id)}, {"$push": {"res":req}})
		return "Comment API POST"
	if request.method == 'PUT':
		req = request.json
		collection.update({"_id": ObjectId(thread_id), "res.cmt_id":ObjectId(cmt_id)}, {"$set": {"res.$.ath":req['ath'],"res.$.dsc":req['dsc']}})
		return "Comment API PUT"
	if request.method == 'DELETE':
		collection.update({"_id": ObjectId(thread_id)}, {"$pull": {"res" : {"cmt_id":ObjectId(cmt_id)}}})
		return "Comment API DELETE"



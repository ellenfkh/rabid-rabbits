from flask import Flask
from flask import json
from flask import request
from flask import jsonify

app = Flask(__name__)


@app.route("/player/update", methods=['POST'])
def handler():
    data = json.loads(request.data)
    print json.dumps(data)
    response = jsonify(data)
    return "WTF"
    return jsonify({'a': 10})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9001, debug=True)

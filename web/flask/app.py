import json
from flask import Flask, request
app = Flask(__name__)


@app.route('/log', methods=['GET', 'POST'])
def log():
    s = request.data.decode('UTF-8')
    j = json.loads(s)
    print(j)
    with open('log.txt', 'a') as f:
        f.write(str(j) + '\n\n')
    return 'ok'

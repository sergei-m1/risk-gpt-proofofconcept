from flask import Flask, jsonify, request
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)


@app.route("/api", methods=["GET", "POST"])
def handle_api():
    if request.method == "GET":
        # Handle GET request for the resource
        return jsonify({"type": "received", "text": "GET request received"})
    elif request.method == "POST":
        # Handle POST request to create a new resource
        print("sleeping...")
        time.sleep(0.5)
        print("woke up")
        data = request.get_json()
        print(data)
        text_to_return = "I have processed the following POST request: " + data["text"]

        # Process the data and create the resource
        return jsonify({"type": "received", "text": text_to_return}), 201


if __name__ == "__main__":
    app.run(debug=True)

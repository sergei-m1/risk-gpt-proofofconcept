from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/api", methods=["GET"])
def get_resource():
    # Handle GET request for the resource
    return jsonify({"type": "received", "text": "GET request received"})


@app.route("/api", methods=["POST"])
def create_resource():
    # Handle POST request to create a new resource
    data = request.get_json()
    # Process the data and create the resource
    return jsonify({"message": "Resource created", "data": data}), 201


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import time
import logging

from LLM.retrieve_openai import get_retrieval_chain, get_response

app = Flask(__name__, static_folder="static")
CORS(app)

qa_chain = get_retrieval_chain()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api", methods=["GET", "POST"])
def handle_api():
    if request.method == "GET":
        # Handle GET request for the resource
        return jsonify({"type": "received", "text": "GET request received"})
    elif request.method == "POST":
        # Handle POST request to create a new resource
        data = request.get_json()
        logging.info(data)

        response_text, sources = get_response(qa_chain=qa_chain, query=data["text"])

        # Process the data and create the resource
        return (
            jsonify({"type": "received", "text": response_text, "sources": sources}),
            201,
        )


if __name__ == "__main__":
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(filename)s:%(lineno)s - %(message)s",
        level=logging.INFO,
    )
    app.run(debug=True)

from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import logging

from LLM.retrieve_openai import get_retrieval_chain, get_response

app = Flask(__name__)
CORS(app)

qa_chain = get_retrieval_chain()


@app.route("/api", methods=["GET", "POST"])
def handle_api():
    if request.method == "GET":
        # Handle GET request for the resource
        return jsonify({"type": "received", "text": "GET request received"})
    elif request.method == "POST":
        # Handle POST request to create a new resource
        data = request.get_json()
        logging.info(data)

        llm_response = get_response(qa_chain=qa_chain, query=data["text"])
        text_to_return = llm_response["result"]

        # text_to_return = "I have processed the following POST request: " + data["text"]

        # Process the data and create the resource
        return jsonify({"type": "received", "text": text_to_return}), 201


if __name__ == "__main__":
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(filename)s:%(lineno)s - %(message)s",
        level=logging.INFO,
    )
    app.run(debug=True)

## Overview

This repository contains code for a prototype of a risk gpt chat bot. The bot is using OpenAI API for responses, with a possibility of using a quantised local LLM in the future.

It is based on the following technologies:

- OpenAI
- Instructor Embeddings
- LangChain
- Chroma Vectorstore
- TypeScript
- React
- ChakraUI
- Vite
- Flask

For more information on ChakraUI refer to the following link: https://chakra-ui.com/getting-started/vite-guide

## Front end

### Front end set up

To set up the front end do the following:

```
cd frontend
# this will install all dependencies from package.json
npm install
```

### Front end server

To start the development server do the following:

```
cd frontend
npm run dev
```

## Back End

### Back end set up

This model has been set up to run on MacOS. To set it up on MacOS follow the below steps:

```
# Create a virtual environment and install required libraries
conda create --name risk-gpt-proofofconcept -c conda-forge python=3.11
conda activate risk-gpt-proofofconcept
conda install flask flask_cors
pip install requirements.txt
# the below step is required to run local LLMs on MacOS
pip install -U --pre torch torchvision -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html
```

### Back end server

To start the development server run the following:

```
cd backend
python app.py
```

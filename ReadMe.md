## Overview

This repository contains code for a prototype of a risk gpt chat bot.

It is based on the following technologies:

- TypeScript
- React
- ChakraUI
- Vite
- Flask

For more information on ChakraUI refer to the following link: https://chakra-ui.com/getting-started/vite-guide

## Front End

To start the development server do the following:

```
cd frontend
npm run dev
```

## Back End

Create a virtual environment and install required libraries:

```
conda create --name risk-gpt-proofofconcept -c conda-forge python=3.11
conda install flask flask_cors
```

To start the development server run the following:

```
cd backend
python app.py
```

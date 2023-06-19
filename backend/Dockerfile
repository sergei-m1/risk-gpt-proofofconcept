# Use a Python 3.11 base image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
# RUN apt-get install -y nodejs

# # Copy the frontend files
# COPY frontend/package.json ./frontend/package.json
# COPY frontend/package-lock.json ./frontend/package-lock.json

# # Install JavaScript dependencies
# WORKDIR /app/frontend
# RUN npm install

# # Build the frontend
# RUN npm run build
 
# # Copy the static files
# WORKDIR /app
# COPY backend/static /app/backend/static

# # Copy the templates
# COPY backend/templates /app/backend/templates

# # Copy all Python code
# COPY . /app

# # Set environment variables (optional)
# # ENV FLASK_APP=app.py
# # ENV FLASK_ENV=production

# # Install a production-ready web server (Gunicorn)
# RUN pip install gunicorn

# # Expose the desired port (change it as needed)
# EXPOSE 8000

# # Start the server
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]

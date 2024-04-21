#!/bin/bash

# Docker login
docker login

# Build the Docker image
docker-compose build

# Push the Docker image to Docker Hub
docker-compose push



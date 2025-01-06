# API Test Node

A simple Node.js application for performing bulk API requests testing.

## Description

This tool allows you to send multiple concurrent requests to a specified API endpoint and monitor their responses. It's useful for testing API endpoints under load or performing basic stress testing.

## Installation

Clone the repository and install dependencies:
bash
git clone [your-repo-url]
cd api-test-node
npm install


## Configuration

Edit `index.js` to configure:
- `API_URL`: Your target API endpoint
- `REQUEST_COUNT`: Number of concurrent requests to send (default: 200)

## Usage

Run the application with:
bash
git clone [your-repo-url]
cd api-test-node
npm install


## Configuration

Edit `index.js` to configure:
- `API_URL`: Your target API endpoint
- `REQUEST_COUNT`: Number of concurrent requests to send (default: 200)

## Usage

Run the application with:

bash
node index.js


The script will:
1. Send the specified number of concurrent requests to the target API
2. Log the status of each request
3. Display a completion message when all requests are finished

## Dependencies

- axios: ^1.7.9 - Promise-based HTTP client for making requests

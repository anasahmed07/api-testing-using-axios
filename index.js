const axios = require('axios');

// Configuration
const API_URL = '<api url here>'; // Replace with your API endpoint
const REQUEST_COUNT = 200; // Number of requests

// Function to send a single request
const sendRequest = async (index) => {
  try {
    const response = await axios.get(API_URL);
    console.log(`Request ${index}: Status ${response.status}`);
  } catch (error) {
    console.error(`Request ${index}: Failed - ${error.message}`);
  }
};

// Send requests in bulk
const sendBulkRequests = async () => {
  const requests = [];
  for (let i = 1; i <= REQUEST_COUNT; i++) {
    requests.push(sendRequest(i));
  }
  await Promise.all(requests);
  console.log('Bulk API test completed.');
};

// Execute
sendBulkRequests();

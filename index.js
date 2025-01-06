const axios = require('axios');

// Configuration
const API_URL = 'https://camo.githubusercontent.com/d95569dd76cf766887bfeb59d791446620005837130ec57e2ad1c04fb5962c35/68747470733a2f2f76697369746f722d636f756e742d62386c622e76657263656c2e6170702f6170692f616e617361686d656430372f76697369746f722d636f756e74'; // Replace with your API endpoint
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

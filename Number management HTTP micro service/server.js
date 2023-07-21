const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 8008; // server runs at port 8008
const testUrls = [
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
    'http://20.244.56.144/numbers/odd'
  ];

// The '/numbers' endpoint that retrieves data from the provided URLs
app.get('/numbers', async (req, res) => {
  // Retrieve the 'url' query parameter, which should be an array of URLs
  const urls = Array.isArray(req.query.url) ? req.query.url : testUrls;

  let numbers = [];
  const promises = urls.map(url => fetchNumbers(url));

  try {
    const results = await Promise.allSettled(promises);

    results.forEach(result => {
      if (result.status === 'fulfilled') {
        numbers = [...numbers, ...result.value];
      }
    });

    // Remove duplicates and sort the numbers
    numbers = _.uniq(numbers);
    numbers.sort((a, b) => a - b);

    // Return the sorted, unique numbers
    res.json({ "numbers": numbers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Function that fetches the numbers from a given URL
const fetchNumbers = async (url) => {
  try {
    const response = await axios.get(url, { timeout: 500 }); // timeout set to 500ms as per requirement

    if (response.status === 200) {
      return response.data.numbers;
    }

    throw new Error(`Request to ${url} returned status ${response.status}`);
  } catch (err) {
    console.log(`Failed to fetch from ${url}: ${err.message}`);
    return [];
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

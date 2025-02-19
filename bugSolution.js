const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('An error occurred. Please try again later.');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrowAnError() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Simulated error');
  }
  return 'Success';
}
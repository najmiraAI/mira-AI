const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080/ws');

ws.on('open', function open() {
  console.log('Connected to MiraBrowser');
  
  // Example command: Open Google
  const command = {
    action: 'goto',
    url: 'https://google.com'
  };
  
  ws.send(JSON.stringify(command));
});

ws.on('message', function incoming(data) {
  const response = JSON.parse(data);
  console.log('Response from MiraBrowser:', response);
  
  if (response.success && response.action === 'goto') {
      // Next step: Search for something
      ws.send(JSON.stringify({
          action: 'type',
          selector: 'input[name="q"]',
          value: 'MiraBrowser AI Automation'
      }));
  }
});

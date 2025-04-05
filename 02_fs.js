const fs = require('fs');

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created and data written successfully!');
    }

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Reading the file:', data);
    }

    fs.unlink('message.txt', (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully!');
        }
  });
 });
});

  
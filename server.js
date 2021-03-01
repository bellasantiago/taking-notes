// DEPENDENCIES
const express = require('express');

// ROUTER
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

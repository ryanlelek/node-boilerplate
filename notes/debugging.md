
# Debugging

## Stack Traces

### Install Module

Add to package.json

    "errorhandler" : "1.1.1"

or run

    $ npm install --save errorhandler

### Add Code

    var error_handler = require('errorhandler');

    if (app.get('env') === 'DEVELOPMENT') {
      // Lots of information is in error_handler
      // Use it only in development environments
      // Or, configure it properly to be secure
      app.use(error_handler());
    }

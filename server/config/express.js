 const path = require('path'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

module.exports.init = () => {

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware; this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}


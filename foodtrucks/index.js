var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();

var trucks = require('./routes/trucks');

// Serve static files from the React app
app.use(express.static(path.join(__dirname , 'client/build')));

// Put all API endpoints under '/api'
app.use('/api/trucks', trucks);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
//app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname+'/client/build/index.html'));
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Food trucks listening on ${port}`);

module.exports = router;
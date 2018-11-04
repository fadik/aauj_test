var Todo = require('./models/todo');


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular and return list of all todos
        
    });

    // delete a todo and respond all todos list
    app.delete('/api/todos/:todo_id', function (req, res) {
        
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};

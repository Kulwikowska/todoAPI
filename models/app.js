var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodc://localhost/todo-api');

mongoose.Promise = Promise;
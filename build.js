const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

compiler.run((err, stats) => {
    if(err) {
        console.log('er--------------', err);
    } else {
        let messages = stats.toJson({ all: false, warnings: true, errors: true });
        if(messages.errors.length) {
            console.log('stats.errors ----------', messages.errors);
        } else {

            console.log('ok-------------', stats);
        }
    }
})
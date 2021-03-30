/*
 * Title : Uptime Monitoring Aplication
 * Description: A RESTFUL API  to monitoring up or down  of  user defienf  links
 * Author: Zakari Sumon
 * Date: 3/24/2021
 */
// Dependencies
const http = require('http');
// const url = require('url');
// const { StringDecoder } = require('string_decoder');

const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app odject - module scaffolding
const app = {};

// configuration \
app.config = {
    port: 3000,
};

// testing file system
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create serve \
app.cerateServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request and Response
app.handleReqRes = handleReqRes;
app.cerateServer();

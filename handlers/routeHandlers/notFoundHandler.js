/*
 * Title : Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Zakari Sumon
 * Date: 3/25/2021
 */

// module scaffolding\
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested utl was not found',
    });
};

module.exports = handler;

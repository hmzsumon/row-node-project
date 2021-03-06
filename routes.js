/*
 * Title : Routes
 * Description: Applications Routes
 * Author: Zakari Sumon
 * Date: 3/25/2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;

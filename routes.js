/*
 * Title : Routes
 * Description: Applications Routes
 * Author: Zakari Sumon
 * Date: 3/25/2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;

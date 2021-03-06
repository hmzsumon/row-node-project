/*
 * Title : Environments
 * Description: Handle All environment things
 * Author: Zakari Sumon
 * Date: 3/30/2021
 */
// Dependencies

// module scaffolding
const environments = {};

// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'somthingstaging',
};

// production environment
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'somthingProduction',
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;

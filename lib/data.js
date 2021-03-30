// Dependencies
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file function
lib.create = (dir, file, data, callback) => {
    // open file for write
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and than close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the file');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            });
        } else {
            callback('Could not create new file, it may already exists');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    // unling file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('An Error occurred to deleting existing file');
        }
    });
};

// Update existing file
lib.update = (dir, file, data, callback) => {
    // file open fot update
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            // convert dat to string
            const stringData = JSON.stringify(data);

            // turncate the file
            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    // write data to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            // close the file
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callback(false);
                                } else {
                                    callback('Error occured to close file!');
                                }
                            });
                        } else {
                            callback('Error writing file!');
                        }
                    });
                } else {
                    callback('Error occurd in truncatin file');
                }
            });
        } else {
            callback('Error Updatin. File may not exest');
        }
    });
};
module.exports = lib;

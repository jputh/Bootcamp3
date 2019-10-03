//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://newUser1:directoryaccess@cluster0-rjr2n.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: 'https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=6a1d1e57d4ba4cc9a6309d8277f0ed46'
  },
  port: 8080
};
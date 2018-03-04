var faker = require('faker');
var baseRoute = '/api/v1/';
var blogMoudlePrefix = baseRoute+'blog/';

function generateCustomers () {
    var customers = []
  
    for (var id = 0; id < 50; id++) {
      var firstName = faker.name.firstName()
      var lastName = faker.name.firstName()
      var phoneNumber = faker.phone.phoneNumberFormat()
  
      customers.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "phone": phoneNumber
      })
    }
  
    return { "customers": customers }
  }

function generateApp(){
    
}
  

  module.exports = generateApp

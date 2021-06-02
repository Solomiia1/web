var User=require('./user');
var user=new User('Denus','Ivanov');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();

var User = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var user = new User('Joe', 'Bloggs');
var xhr = new XMLHttpRequest();

xhr.open('POST', 'http://localhost:5000/user/');
xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
};

var json = JSON.stringify(user);

xhr.send(json);
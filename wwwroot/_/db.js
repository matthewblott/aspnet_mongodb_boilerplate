var db;

// Create database
(function() {
  'user strict';

  var dbname = 'store';
  var version = 1;
  var request = window.indexedDB.open(dbname, version);

  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };
   
  request.onsuccess = function(event) {
    db = request.result;
  };
  
  request.onupgradeneeded = function(event) {

    db = event.target.result;

    var users = db.createObjectStore('users', { keyPath:  'id', autoIncrement: true });

  };

})();

// Open database
(function() {
  'user strict';

  var dbname = 'store';
  var version = 1;
  var request = window.indexedDB.open(dbname, version);

  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };
   
  request.onsuccess = function(event) {
    db = request.result;
  };

})();

// Delete db
(function() {
  'user strict';

  var dbname = 'store';
  var request = window.indexedDB.open(dbname, version);

  window.indexedDB.deleteDatabase(dbname);

})();

// Create
(function() {
  'use strict';

  var storename = 'users';
  var user = { firstName: 'first name', lastName: 'last name' };
  var request = db.transaction([storename], 'readwrite').objectStore(storename).add(user);

  request.onsuccess = function(event) {
    console.log('create successful');

  };

})();

(function() {
  'use strict';

  var storename = 'users';
  
  var list = [
    { firstName: 'John', lastName: 'Wayne' },
    { firstName: 'Elvis', lastName: 'Presley' },
    { firstName: 'Dolly', lastName: 'Parton' }
  ];

  list.forEach(function(item) {
  
    db.transaction([storename], 'readwrite').objectStore(storename).add(item).onsuccess = function(event) { 
      console.log('create successful'); };

  });

})();

// Read
(function() {
  'use strict';

  var storename = 'users';
  var id = 1;

  db.transaction([storename]).objectStore(storename).get(id).onsuccess = function(e) {
      var item = e.srcElement.result; // check this isn't target instead.
      console.log(item.firstName + ' ' + item.lastName);
    };

})();

(function() {
  'use strict';

  var storename = 'users';

  db.transaction([storename]).objectStore(storename).openCursor(IDBKeyRange.lowerBound(0)).onsuccess = function(e) {
    var result = e.target.result;

    if(!!result === false){
      return;
    }

    var item = e.srcElement.result.value;

    console.log(item.firstName + ' ' + item.lastName);
    result.continue();
  };

})();

// Update
(function() {
  'use strict'

  var storename = 'users';
  var id = 1;
  var user = { id: id, firstName: 'Cary', lastName: 'Grant' };
  var request = db.transaction([storename], 'readwrite').objectStore(storename).put(user);

  request.onsuccess = function(event) {
    console.log('update successful');

  };

})();

// Delete
(function() {
  'use strict';

  var storename = 'users';
  var id = 1;
  var request = db.transaction([storename], 'readwrite').objectStore(storename).delete(id);

  request.onsuccess = function(e) {
    console.log('delete successful');

  };

})();

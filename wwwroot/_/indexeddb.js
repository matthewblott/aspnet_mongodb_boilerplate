var db;
var dbname = 'store';
var version = 1;

var request = window.indexedDB.open(dbname, version);
var store;

// Create db (verison optional - needed for schema changes)
// window.indexedDB.open('store', version);

// Delete db
// window.indexedDB.deleteDatabase('store');

request.onerror = function(event) {
  console.log(event.target.errorCode);
};
 
request.onsuccess = function(event) {
  db = request.result;
};

// indexedDB.webkitGetDatabaseNames()

// Create document store
request.onupgradeneeded = function(event) {

  db = event.target.result;

  store = db.createObjectStore(dbname, { keyPath:  'id', autoIncrement: true });

};

var note = { title: 'Test Note', body: 'Hello World!', date: '01/04/2013' };

var transaction = db.transaction([dbname], 'readwrite');

var objectStore = transaction.objectStore(dbname);

var request = objectStore.put(note);

var request = db.transaction([dbname], 'readwrite') .objectStore(dbname).delete(20);

request.onsuccess = function(event) {

  // handle success

};

// Loop records
var store = db.transaction('notes').objectStore('notes');

store.openCursor().onsuccess = function(event) {

  var cursor = event.target.result;

  if (cursor) {

    var msg = 'Note id: ' + cursor.key + ', Title: ' + cursor.value.title;

    console.log(msg);

    cursor.continue();

  }

};

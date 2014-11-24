var xhr = new XMLHttpRequest();

xhr.open('GET', document.URL + 'data/customers.json', true);

xhr.onreadystatechange = function () {

// complete
if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }

};

xhr.send();


// User
// id, customerId, emailAddress, password, firstName, lastName

// Customer

// Group
// id, name

// UserGroup
// id, userId, groupId

// Product
// id, name, description

// ProductGroup
// id, groupId, productId

// Price
// id, productId, quantity, amount

// Order
// id, userId

// Item
// id, orderId, priceId
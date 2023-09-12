window.customerName = 'bob';

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'something else';
}

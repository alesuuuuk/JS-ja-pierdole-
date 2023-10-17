// interface AllProducts{
// }
var Constants;
(function (Constants) {
    Constants["baseURL"] = "https://fakestoreapi.com";
})(Constants || (Constants = {}));
;
var getAllProducts = function (endpoint) {
    return fetch("".concat(Constants.baseURL, "/").concat(endpoint))
        .then(function (res) { return res.json(); })
        .then(function (json) { json; });
};
var displayProducts = function (data) {
    console.log(data);
};
// start point
document.addEventListener("DOMContentLoaded", function () {
    var PRODUCTS = getAllProducts('products').then(function (data) { (displayProducts(data)); });
    console.log(PRODUCTS);
});

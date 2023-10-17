interface Products {
    id: number,
    category: string
}

enum Constants {
    baseURL = 'https://fakestoreapi.com'
};
const getAllProducts = (endpoint: string) => {
    return fetch(`${Constants.baseURL}/${endpoint}`)
        .then(res => res.json())
        .then((json) => { json })
}

const displayProducts = (data: Products[]): void => {
    console.log(data[0])
}

// start point
document.addEventListener("DOMContentLoaded", () => {
    getAllProducts('products').then((data) => { (displayProducts(data)) })

});


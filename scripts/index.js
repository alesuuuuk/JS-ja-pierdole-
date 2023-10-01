const getAllProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const getAllCategories = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const showProductsOnDOM = (products, selector) => {
    const AREA = document.querySelector(selector);
    if (products.length > 0) {
        const html = products.map((product) => `
            <div data-category="${product.category}" data-id="${product.id}" class="products__area_item">
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <h4>${product.price} $</h4>
                <p>${product.description}</p>
            </div>
        `).join('');
        AREA.innerHTML = html;
    } else {
        AREA.innerHTML = '<h1>Products not found</h1>';
    }
}

const sortProducts = (products, type, selector_area) => {
    let sortedProducts;
    if (type === 'ASC') {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (type === 'DESC') {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    showProductsOnDOM(sortedProducts, selector_area);
}

const filterBySearchQuery = (products, query, selector_area) => {
    const filteredProductsWithSearch = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    showProductsOnDOM(filteredProductsWithSearch, selector_area);
}

const filterProducts = (products, categories, selector_area, selector) => {
    const FILTER_AREA = document.querySelector(selector);
    const uniqueCategories = ['All', ...new Set(categories)]; // Add 'All' option
    const html_filter = uniqueCategories.map((category) => `
        <option value="${category}">${category}</option>
    `).join('');
    FILTER_AREA.innerHTML = html_filter;

    FILTER_AREA.addEventListener('change', () => {
        const selectedCategory = FILTER_AREA.value;
        if (selectedCategory === 'All') { // Handle 'All' option
            showProductsOnDOM(products, selector_area);
        } else {
            const filteredProducts = products.filter(product => product.category === selectedCategory);
            showProductsOnDOM(filteredProducts, selector_area);
        }
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    const INPUT_SELECT = document.querySelector('#products__sort');
    const INPUT_SEARCH = document.querySelector('#filter_search');
    const PRODUCTS_ITEMS=  document.querySelector(".products__area_item")
    console.log(PRODUCTS_ITEMS)

    const PRODUCTS = await getAllProducts();
    const CATEGORIES = await getAllCategories();

    showProductsOnDOM(PRODUCTS, '.products__area');
    filterProducts(PRODUCTS, CATEGORIES, '.products__area', '#products__filter');

    INPUT_SELECT.addEventListener('change', (e) => {
        sortProducts(PRODUCTS, e.target.value, '.products__area');
    });

    INPUT_SEARCH.addEventListener('input', (e) => {
        filterBySearchQuery(PRODUCTS, e.target.value, '.products__area');
    });
    // PRODUCTS_ITEMS.addEventListener('click', ()=>{
    //     alert("work")
    // })
});

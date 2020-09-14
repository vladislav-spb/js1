const products = [
    {id: 1, title: 'Notebook', price: 20000, images: 'https://webshop.asus.com/de/media/image/89/98/28/1687-90NB0NW1-M00530_2kbMqYtE2EGAQu_200x200.png'},
    {id: 2, title: 'Mouse', price: 1500, images: 'http://pics.redblue.de/artikelid/TR/1130522/CHECK'},
    {id: 3, title: 'Keyboard', price: 5000, images: 'https://www.freepngimg.com/thumb/keyboard/37379-2-keyboard-transparent-image-thumb.png'},
    {id: 4, title: 'Gamepad', price: 4500, images: 'http://cdn.shopify.com/s/files/1/0277/3113/2555/collections/df86aec894828bdc7117abc37d187712_1200x1200.png?v=1586398240'},
];

const renderProduct = (images, title, price) => {
    return `<div class="product-item">
                <img class="product-img" src="${images}" alt="${title}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(product => renderProduct(product.images,product.title, product.price));
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);

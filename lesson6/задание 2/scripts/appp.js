'use strict';

let basketBut = document.querySelectorAll('button');

basketBut.forEach(function(but){
    but.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name,})
    })
});

let basket = {
    products: {},

    /**
     * метод добавляем продукты в корзину.
     * @param {string} product 
     */
    addProduct(product) {
        this.addProductToObject(product);
        this.appearanceProductInBasket(product);
        this.totalSumProduct();
        this.removeBut();
    },

    /**
     * метод добавляет продукты в объект с продуктами.
     * @param {string} product 
     */
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    /**
     * метод создает продукт в корзинеБ если он там присутствует то просто 
     * увеличивает его на 1.
     * @param {string} product 
     */
    appearanceProductInBasket(product) {
        let productHave = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productHave) {
            productHave.textContent++;
            return;
        }
        let ProductCol = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    totalSumProduct() {
        document.querySelector('.total').textContent = this.getTotalSun();
    },

    /**
     * метод считает стоимость все товаров в корзине.
     */
    getTotalSun() {
        let sum = 0;
        for(let i in this.product ) {
            sum += this.product[i].price * this.product[i].count;
        }  
        return sum;      
    }
    
}
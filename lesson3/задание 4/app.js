'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsPresentPhotos = products.filter(production => "photos" in production && production.photos.length > 0);
console.log(productsPresentPhotos);

const sortProducts = products.sort((production1, production2)=> production1.price - production2.price);
console.log(sortProducts);
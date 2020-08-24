'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        handClick(event);
    });
});

function handClick(clickedBut){
    const cardNode = clickedBut.target.parentNode;

    const card = {
        head: cardNode,
        img: cardNode.querySelector('img'),
        productHeader: cardNode.querySelector('.productHeader'),
        button: cardNode.querySelector('button'),
    };

    const textBut = card.button.innerText;
    if (textBut === 'Подробнее'){
        getShowText(card);
    } else if (textBut === 'Отмена'){
        getHideText(card);
    }
}

function getShowText(card){
    card.img.style.display = 'none';
    const text = 'Сейшельские острова – это оно из престижных направлений пляжного туризма, место, которое по достоинству оценят не только любители позагорать на солнышке, но и поклонники активного отдыха. Уникальная красота сейшельских курортов привлекает туристов со всего мира и путешественников из России, которые с удовольствием проводят долгожданный отпуск на Сейшелах.Вот и я поделюсь всем, что знаю об этих несравненных островах: о том, что это за государство такое Сейшелы, где оно находится, нужна ли виза для визита, на каком языке там говорят, какие в ходу деньги, сколько туда лететь и какие цены';
    card.productHeader.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function getHideText(card){
    card.img.style.display = 'block';
    card.head.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}
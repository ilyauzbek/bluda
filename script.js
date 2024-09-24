const cardss = [
    {
        img: 'https://cs10.pikabu.ru/post_img/big/2019/05/17/1/1558051186195676503.jpg',
        name: 'Simplest Salad recipe ever ',
        text: 'Lorem ipsun is simply dummy text of the pritting and typesetting industry',
        time: '6 mins ago',
        comments: '39 comm',
       

    },
    {
        img: 'https://rud.ua/uploads/recipe/61de9eae524e9.jpg',
        name: 'Simplest Salad recipe ever ',
        text: 'Lorem ipsun is simply dummy text of the pritting and typesetting industry',
        time: '6 mins ago',
        comments: '39 comm',
       

    },
    {
        img: 'https://www.chefmarket.ru/blog/wp-content/uploads/2019/09/shakshuka-1-e1567927294523.jpg',
        name: 'Simplest Salad recipe ever ',
        text: 'Lorem ipsun is simply dummy text of the pritting and typesetting industry',
        time: '6 mins ago',
        comments: '39 comm'
       

    },
]


const cards = document.querySelector('.cards')

cardss.forEach(card => {
    cards.innerHTML += ` 
 <div class="card">
 <img src=${card.img} alt="" />
 <h3>${card.name}</h3>
 <p>${card.text}</p>
<div class="info">
    <h5>⌚${card.time}</h5>
    <h5>💬${card.comments}</h5>
</div>
 </div>`
})
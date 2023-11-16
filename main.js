let body = document.querySelector("body");
let buttons = document.querySelectorAll("button");
let wrapper = document.querySelector(".wrapper-img");
let image = document.querySelector("img")
letimages = [
    "https://www.topgear.com/sites/default/files/images/news-article/carousel/2016/05/68cb5ed866546aabc2202f832e8e2bfd/p90219733_highres.jpg",
    "https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/23-05/8.jpg",
    "https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/all-news/2016/23-05/7.jpg"
];
let number = 0;

function showImage() {
    image.src = images[number];
}
buttons[1].addEventListener("click", function () {
    if (number < 2) {
    number = number + 1;
    showImage();  
    }else {
        number = 0 
        showImage()
    }

    console.log(number)
})
buttons[0].addEventListener('click', function() {

})

showImage();
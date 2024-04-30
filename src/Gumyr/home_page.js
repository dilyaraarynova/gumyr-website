var images = new Array();
images[0] = [
  "https://cdn.glitch.global/173971d0-d9db-4314-97d5-02dab6be6bff/news1.jpeg?v=1651566368322",
];
images[1] = [
  "https://cdn.glitch.global/173971d0-d9db-4314-97d5-02dab6be6bff/news2.png?v=1651566374720",
];
images[2] = [
  "https://cdn.glitch.global/173971d0-d9db-4314-97d5-02dab6be6bff/news3.webp?v=1651566379599",
];

var news_links = [
  "https://bluescreen.kz/ies-primiet-iedinyi-standart-zariadnykh-ustroistv/",
  "https://bluescreen.kz/blokirovki-intiernieta-kazakhstan-popal-v-mirovoi-rieitingh/",
  "https://egov.kz/cms/ru/news/social_benefits#:~:text=%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-,%D0%9D%D0%B0%20eGov.kz%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D1%87%D0%B5%D1%82%D0%B0,%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B9%20%D0%B8%20%D0%B2%D1%8B%D0%BF%D0%BB%D0%B0%D1%82&text=%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%B5%D0%BC%D0%B8%20%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B2%D1%8B%D0%BF%D0%BB%D0%B0%D1%82%20%D0%BD%D0%B0,%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D1%87%D0%B5%D1%82%20%D0%B2%20%D1%82%D1%80%D0%B5%D1%85%20%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0%D1%85.",
];

var news_names = new Array();
news_names[0] = ["ЕС примет единый стандарт зарядных устройств"];
news_names[1] = ["Блокировки интернета: Казахстан попал в мировой рейтинг"];
news_names[2] = [
  "На eGov.kz доступно автоматическое получение счета для оформления соцпособий",
];

var news_source = new Array();
news_source[0] = ["source: BlueScreen.kz"];
news_source[1] = ["source: BlueScreen.kz"];
news_source[2] = ["source: BlueScreen.kz"];

var index = -1;

function nextNews() {
  if (index < images.length - 1) {
    index = index + 1;
  }

  var img = document.getElementById("image");
  img.src = images[index];

  var name = document.getElementById("name");
  name.title = news_names[index];

  var text = document.getElementById("name");
  text.name = news_source[index];

  var link = document.getElementById("name");
  link.href = news_links[index];
}

function previousNews() {
  if (index > 0) {
    index = index - 1;
  }

  var img = document.getElementById("image");
  img.src = images[index];

  var name = document.getElementById("name");
  name.title = news_names[index];

  var text = document.getElementById("name");
  text.name = news_source[index];
}
window.onload = function () {
  nextNews();
};

function fixIframe() {
  var iframe = document.querySelector(".buymecoffee_link-iframe");
  iframe.scrollTo(0, 100); // Установить позицию прокрутки на 100 пикселей от начала страницы
}

window.addEventListener("load", fixIframe); // Вызвать функцию при загрузке страницы
return;

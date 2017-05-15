(function () {

  var buttons = document.querySelector('#list');

  buttons.onclick = function (e) {
    var target = e.target;
    if (target.tagName != 'BUTTON') return;
    var product = target.closest('li').querySelector('.product-item__title').textContent;
    alert(' You have bought a ' + product);
    var count = target.closest('li').querySelector('.product-item__counter');
    count.innerText = parseInt(count.innerText) + 1;
  };

  var container = document.querySelector(".products-list");
  getProduct();

  function renderProduct(item) {
    item.forEach(function (product) {
      var element = getElementFromTemplate(product);
      container.appendChild(element);
    });
  }

  function getProduct() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/product.json');
    xhr.onload = function (evt) {
      var rawData = evt.target.response;
      var loadedProduct = JSON.parse(rawData);

      renderProduct(loadedProduct);
    };

    xhr.send();
  }

  function getElementFromTemplate(data) {
    var template = document.querySelector('#template');
    if ('content' in template) {
      var element = template.content.children[0].cloneNode(true);
    } else {
      var element = template.children[0].cloneNode(true);
    }

    element.querySelector('.product-item__title').textContent = data.name;
    element.querySelector('.content').textContent = data.description;
    element.querySelector('.product-item__counter').textContent = data.value;

    return element;
  }
})();

// create-item-inner qismi create item top qismi bosilganida togler bo`lishi kerak.
let modifiers = {
  elItemOpen: 'create-item-top--open'
}


const elsCreateItemTop = document.querySelectorAll('.js-create-item-top');
const elsCreateItemTogler = document.querySelectorAll('.js-create-item-togler');

// console.log(elsCreateItemTop);
// console.log(elsCreateItemTogler);

elsCreateItemTogler.forEach(function (elCreateItemTogler) {
  elCreateItemTogler.addEventListener('click', function () {
    elsCreateItemTop.forEach(function (elCreateItemTop) {
      elCreateItemTop.classList.toggle(modifiers.elItemOpen);
    })
  });
});

//create-item-inner qismining ichidagi boxlar bosilganda active holatga, qayta bosilganida
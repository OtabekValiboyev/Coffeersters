let modifiers = {
  elItemOpen: "create-item-top--open",
  elCreateLinkActive: "crate-link-active",
};

const elsCreateItemTop = document.querySelectorAll(".js-create-item-top");
elsCreateItemTop.forEach(function (item) {
  item.addEventListener("click", () => {
    item.classList.toggle(modifiers.elItemOpen);
  });
});

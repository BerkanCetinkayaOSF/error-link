document.addEventListener("dblclick", function namedFunction(){
    throw new Error('Error')
});

var xbuttons = document.querySelectorAll("[data-bag]");

for (var button of xbuttons) {
    button.addEventListener('click',  function throwError() {
        undeclaredVariable.something = 'something'
    })
}
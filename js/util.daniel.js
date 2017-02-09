//Garante que a função CTRL + V funcione
document.addEventListener("paste", function (e) {
    console.log(e.target.id);
    var pastedText = undefined;
    if (window.clipboardData && window.clipboardData.getData) { // IE
        pastedText = window.clipboardData.getData('Text');
    } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
    }
    e.preventDefault();
    e.target.value = pastedText;
    return false;
});

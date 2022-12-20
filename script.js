const run = (cardNumber) => {
    let x = window.matchMedia("(max-width: 1230px)");
    if (x.matches) {
        return
    }
    else {
        var css = `#card${cardNumber}:hover{ width:210px; transition : 0.2s ease-in-out;}`;
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

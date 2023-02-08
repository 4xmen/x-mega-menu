let xMegaMenu = (seletor, options = {}) => {

    let xMenu = document.querySelector(seletor);
    // add x mega menu class
    xMenu.classList.add('x-mega-menu');

    // add x-border to parent
    let subMenu = document.createElement("div");
    subMenu.classList.add('x-sub-menu');


    xMenu.parentNode.appendChild(subMenu);

    // x mega menu child event
    document.querySelectorAll(seletor + ' > li').forEach(function (li) {

        if (li.querySelectorAll('ul').length > 0){
            li.classList.add('x-has-sub-menu');
        }
        if (li.querySelectorAll(':scope > img').length > 0){
            li.classList.add('x-has-image');
        }
        li.addEventListener('mouseenter', function () {
            if (this.querySelectorAll('ul').length != 0) {
                subMenu.innerHTML = this.querySelector('ul').outerHTML;
                subMenu.classList.add('x-active');
            } else {
                subMenu.innerHTML = '';
                subMenu.classList.remove('x-active');
            }
        });
    });

    xMenu.parentNode.addEventListener('mouseleave', function () {
        subMenu.innerHTML = '';
        subMenu.classList.remove('x-active');
    });

}
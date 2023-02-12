let xMegaMenu = (seletor, options =
    {
        responseWidth: '',
        barsIcon: '',
        mainTitle: '',
        isRtl: '',
        blurEffect: '',
        resetMenu: '',
        disableLinks: '',
    }) => {

    // default options
    let xOptions = {
        responseWidth: 1024,
        mainTitle: 'Navbar menu',
        isRtl: false,
        blurEffect: false,
        resetMenu: true,
        disableLinks: true,
        barsIcon: "<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB3aWR0aD0iNjU3cHQiIGhlaWdodD0iNjU3cHQiIHZpZXdCb3g9IjAgMCA2NTcgNjU3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBpZD0iI2ZmZmZmZmZmIj4NCjwvZz4NCjxnIGlkPSIjMmYyZjJmZmYiPg0KPHBhdGggZmlsbD0iIzJmMmYyZiIgb3BhY2l0eT0iMS4wMCIgZD0iIE0gMTkzLjM1IDE1Ny41MSBDIDMzNi4yNyAxNTcuMzAgNDc5LjE4IDE1Ny4zMCA2MjIuMTAgMTU3Ljk2IEMgNjI2LjEzIDE1Ny42OCA2MjguNjcgMTYxLjYyIDYyOS44NyAxNjQuOTYgQyA2MzIuODEgMTczLjY2IDYzMi44MSAxODMuMzUgNjI5Ljg3IDE5Mi4wNiBDIDYyOC42NiAxOTUuNDAgNjI2LjEzIDE5OS4zNyA2MjIuMDcgMTk5LjA1IEMgNDk5LjM4IDE5OS43MCAzNzYuNjkgMTk5LjY1IDI1NC4wMCAxOTkuNjQgQyAxODEuOTYgMTk5LjQyIDEwOS45MiAxOTkuNjAgMzcuODggMTk5LjAwIEMgMzMuMzkgMTk4LjIzIDMxLjU2IDE5My4yNCAzMC40MyAxODkuMzggQyAyOC40NCAxODEuMTYgMjguNTIgMTcyLjMyIDMxLjU0IDE2NC4zNiBDIDMyLjc0IDE2MS4yOCAzNS4xOSAxNTcuNzUgMzguOTAgMTU3Ljk3IEMgOTAuMzggMTU3LjY1IDE0MS44NyAxNTcuNTUgMTkzLjM1IDE1Ny41MSBaIiAvPg0KPHBhdGggZmlsbD0iIzJmMmYyZiIgb3BhY2l0eT0iMS4wMCIgZD0iIE0gNTEuMjkgMzA0LjQxIEMgODYuNTUgMzAzLjc3IDEyMS44MSAzMDQuMDYgMTU3LjA2IDMwMy45OCBDIDI5Ny4wMyAzMDMuOTAgNDM3LjAwIDMwMy45NSA1NzYuOTcgMzA0LjAwIEMgNTkyLjMwIDMwNC4xNyA2MDcuNjQgMzA0LjI5IDYyMi45NyAzMDQuNjMgQyA2MjYuOTkgMzA0LjczIDYyOC45MiAzMDguOTEgNjMwLjExIDMxMi4xNyBDIDYzMi43OSAzMjAuNzIgNjMyLjc3IDMzMC4xOCA2MjkuODIgMzM4LjY3IEMgNjI4LjY1IDM0Mi4wMyA2MjYuMTQgMzQ1LjgyIDYyMi4xMCAzNDUuNTIgQyA1NzQuMDcgMzQ2LjQ1IDUyNi4wMiAzNDUuODMgNDc3Ljk4IDM0Ni4wNyBDIDM2OC4zMCAzNDYuMTIgMjU4LjYyIDM0Ni4xMyAxNDguOTMgMzQ2LjA0IEMgMTEyLjAwIDM0NS44OCA3NS4wNCAzNDYuNDAgMzguMTIgMzQ1LjQ2IEMgMzQuMTYgMzQ1LjI2IDMyLjI4IDM0MS4yMiAzMS4wOCAzMzguMDEgQyAyOC4zNSAzMjkuMzcgMjguMzUgMzE5LjgzIDMxLjM4IDMxMS4yNyBDIDMyLjU1IDMwOC4zNCAzNC40NSAzMDQuNzkgMzguMDQgMzA0LjY0IEMgNDIuNDUgMzA0LjQzIDQ2Ljg4IDMwNC41MyA1MS4yOSAzMDQuNDEgWiIgLz4NCjxwYXRoIGZpbGw9IiMyZjJmMmYiIG9wYWNpdHk9IjEuMDAiIGQ9IiBNIDM3LjE1IDQ0OC4yNSBDIDU4LjAzIDQ0Ny42MSA3OS4wMiA0NDguMDIgOTkuOTUgNDQ3Ljc5IEMgMjczLjYyIDQ0Ny40NiA0NDcuMjkgNDQ3LjQ0IDYyMC45NiA0NDcuOTggQyA2MjQuNzggNDQ3LjQwIDYyNy45NyA0NTAuMzUgNjI5LjI5IDQ1My42OSBDIDYzMi44NyA0NjIuNTcgNjMyLjkxIDQ3Mi43NyA2MjkuOTkgNDgxLjg1IEMgNjI4Ljc5IDQ4NS4yOCA2MjYuMjggNDg5LjU0IDYyMi4wNSA0ODkuMTEgQyA1MjEuMzYgNDg5Ljg2IDQyMC42NiA0ODkuNzIgMzE5Ljk3IDQ4OS44NyBDIDI1Ni42NCA0ODkuODQgMTkzLjMxIDQ4OS42MyAxMjkuOTkgNDg5LjY0IEMgOTguOTQgNDg5LjMyIDY3Ljg4IDQ4OS41OSAzNi44NSA0ODguOTUgQyAzMi4wMyA0ODYuNjggMzAuNTcgNDgwLjg3IDI5Ljc3IDQ3Ni4wNiBDIDI4LjQzIDQ2OS40MyAyOS4wNCA0NjIuNTIgMzAuOTUgNDU2LjA2IEMgMzIuMDMgNDUyLjg5IDMzLjcxIDQ0OS4zNSAzNy4xNSA0NDguMjUgWiIgLz4NCjwvZz4NCjwvc3ZnPg0K'  alt='menu bars toggle' />",
    };


    for (const index in options) {
        if (options[index] !== '') {
            xOptions[index] = options[index];
        }
    }


    // handle functions and functions
    let handleResize = () => {
        // windows width
        let ww = window.innerWidth;
        if (ww < xOptions.responseWidth) {
            xMenu.classList.add('x-responsive');
        } else {
            xMenu.classList.remove('x-responsive');
            hideSideMenu();
        }
    }

    let showSideMenu = () => {
        sideMenu.classList.add('x-active');
        if (xOptions.blurEffect) {
            document.querySelectorAll('body > *').forEach(function (el) {
                if (el.querySelectorAll('.x-mega-menu').length === 0) {
                    el.classList.add('x-blur');
                }
            });
            document.querySelector('.x-mega-menu').classList.add('x-blur');
        }
    };

    let hideSideMenu = () => {
        sideMenu.classList.remove('x-active');
        if (xOptions.blurEffect) {
            document.querySelectorAll('.x-blur').forEach(function (el) {
                el.classList.remove('x-blur');
            });
            // reset submenus
            if (xOptions.resetMenu) {
                document.querySelectorAll('.x-multi-level-menu').forEach(function (lvlMenu) {
                    lvlMenu.remove();
                });
            }
        }
    };

    let liveListener = (eventType, elementQuerySelector, cb) => {
        document.addEventListener(eventType, function (event) {
            let qs = document.querySelectorAll(elementQuerySelector);

            if (qs) {
                let el = event.target, index = -1;
                while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                    // console.log(el,el.parentElement);
                    el = el.parentElement;
                }
                if (index > -1) {
                    cb.call(el, event);
                }
            }
        });
    };

    let findElementMainText = (el, def = '') => {
        let txt = def;
        if (el.childNodes[0].nodeValue.trim().length > 0) {
            txt = el.childNodes[0].nodeValue.trim();
        } else if (el.querySelectorAll(':scope > a,:scope > span').length > 0) {
            txt = el.querySelector(':scope > a,:scope > span').innerText.trim();
        }
        return txt;
    }

    let remActiveClassMenu = () =>{
        xMenu.querySelectorAll('li.x-active').forEach(function (li) {
            li.classList.remove('x-active');
        });
    }


    let xMenu = document.querySelector(seletor);
    // add x mega menu class
    xMenu.classList.add('x-mega-menu');

    xMenu.innerHTML = `<li id="x-toggle">
            ${xOptions.barsIcon}
        </li>`
        + xMenu.innerHTML;

    // add x-border to parent
    let subMenu = document.createElement("div");
    subMenu.classList.add('x-sub-menu');
    xMenu.parentNode.appendChild(subMenu);


    // x mega menu child event
    xMenu.querySelectorAll(':scope > li').forEach(function (li) {

        if (li.querySelectorAll('ul').length > 0) {
            li.classList.add('x-has-sub-menu');
        }
        if (li.querySelectorAll(':scope > img, :scope > a > img').length > 0) {
            li.classList.add('x-has-image');
        }
        li.addEventListener('mouseenter', function () {
            if (this.querySelectorAll('ul').length !== 0) {
                subMenu.innerHTML = this.querySelector('ul').outerHTML;
                remActiveClassMenu();
                this.classList.add('x-active');
                subMenu.querySelectorAll(':scope > ul > li').forEach(function (mainLi) {
                    mainLi.classList.add('x-main-sub-menu');
                });

                subMenu.querySelectorAll('li li').forEach(function (li2) {
                    if (li2.querySelectorAll('ul').length > 0) {
                        li2.classList.add('x-has-sub-menu');
                        li2.classList.add('x-desktop');
                        if (xOptions.isRtl) {
                            li2.classList.add('x-right');
                        }
                    }
                });
                subMenu.classList.add('x-active');
                if (xOptions.blurEffect) {
                    document.querySelectorAll('body > *').forEach(function (el) {
                        if (el.querySelectorAll('.x-mega-menu').length === 0) {
                            el.classList.add('x-blur');
                        }
                    });
                }
            } else {
                subMenu.innerHTML = '';
                remActiveClassMenu();
                if (xOptions.blurEffect) {
                    document.querySelectorAll('.x-blur').forEach(function (el) {
                        el.classList.remove('x-blur');
                    });
                }
            }
        });
    });

    // fix not links
    xMenu.querySelectorAll('li').forEach(function (li) {
        try {
            let txt = li.childNodes[0].nodeValue.trim();
            if (txt.length > 0){
                li.innerHTML = li.innerHTML.split(txt).join(`<span>${txt}</span>`);
            }
        } catch {
        }

    });
    xMenu.parentNode.addEventListener('mouseleave', function () {
        subMenu.innerHTML = '';
        remActiveClassMenu();
        if (xOptions.blurEffect && window.innerWidth > xOptions.responseWidth) {
            document.querySelectorAll('.x-blur').forEach(function (el) {
                el.classList.remove('x-blur');
            });
        }
    });


    // side menu
    let sideMenu = document.createElement("div");
    sideMenu.setAttribute('id', 'x-side-menu');
    xMenu.parentNode.appendChild(sideMenu);

    sideMenu.innerHTML = `<ul class="x-side-menu">
    <div class="x-close">
        &times;
    </div>
    <h3>
        ${xOptions.mainTitle}
    </h3>
    ${xMenu.innerHTML} 
</ul>`;

    // add next level sub menu
    sideMenu.querySelectorAll('.x-has-sub-menu').forEach(function (li) {
        if (xOptions.isRtl) {
            li.classList.add('x-right');
        }
        li.innerHTML += `
        <div class="x-next"> 
            〉
        </div>
        `;
    });

    // remove not need elements
    sideMenu.querySelectorAll('.x-always-show,.x-has-image').forEach(function (li) {
        li.remove();
    });


    document.querySelector('#x-toggle').addEventListener('click', function () {
        showSideMenu();
    });
    document.querySelector('.x-close').addEventListener('click', function () {
        hideSideMenu();
    });


    // generate next level
    liveListener('click', '.x-next', function (e) {

        // create multi level div
        let multiLevelMenu = document.createElement("div");
        multiLevelMenu.classList.add('x-multi-level-menu');
        // find content and add
        multiLevelMenu.innerHTML = e.target.parentNode.querySelector('ul').outerHTML;
        // append created menu to main
        this.parentNode.closest('.x-side-menu').append(multiLevelMenu);
        // fnd back text
        let txt = findElementMainText(this.parentNode);
        // add back button
        let back = document.createElement('div');
        back.classList.add('x-back');
        back.innerHTML = `${txt} <div class="x-back-btn"> 〈 </div>`;
        multiLevelMenu.prepend(back);

        // each sub items to optimize
        multiLevelMenu.querySelectorAll('li').forEach(function (li) {
            if (li.querySelectorAll('ul').length > 0) {
                li.classList.add('x-has-sub-menu');
            }
            if (li.querySelectorAll(':scope h3').length === 0) {
                li.classList.add('x-list');
            }

            // remove not wanted element
            if (li.classList.contains('x-highlight') || li.querySelectorAll(':scope > img').length > 0) {
                li.remove();
            }

        });
        // add next level items
        multiLevelMenu.querySelectorAll('.x-list').forEach(function (li2) {
            if (li2.querySelectorAll('ul').length > 0) {
                if (xOptions.isRtl) {
                    li2.classList.add('x-right');
                }
                li2.innerHTML += `
        <div class="x-next"> 
            〉
        </div>
        `;
            }
        });
    });


    liveListener('click', '.x-back', function (e) {
        this.parentNode.closest('.x-multi-level-menu').remove();
    });

    liveListener('mouseleave', '.x-mega-menu > li.x-active', function (e) {
        remActiveClassMenu();
    });

    liveListener('click', '.x-back-btn.x-desktop', function (e) {
        this.parentNode.closest('.x-multi-level-menu-desktop').remove();
    });

    liveListener('click','.x-has-sub-menu.x-desktop',function (e) {
        if (xOptions.disableLinks){
            e.preventDefault();
        }
        let parent = this.parentNode.closest('.x-main-sub-menu');
        let newUl = document.createElement('ul');
        newUl.innerHTML = '<li class="x-back-btn x-desktop"><span>〈 &nbsp; &nbsp; '+findElementMainText(this)+'</span></li>';
        newUl.innerHTML += this.querySelector('ul').innerHTML;
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('x-multi-level-menu-desktop');
        mainDiv.append(newUl);
        parent.append(mainDiv);
    });

    sideMenu.addEventListener('click', function (e) {
        if (e.target.getAttribute('id') === 'x-side-menu') {
            hideSideMenu();
        }
    });

    window.addEventListener('resize', handleResize, true);
    handleResize();

}
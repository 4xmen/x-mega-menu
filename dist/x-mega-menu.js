/**
 * x mega menu - repsonsive mega menu
 *
 * Copyright (C) 2017 4xmen team <a1gard@4xmen.ir>
 *
 * LICENSE: This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option) any
 * later version.  This program is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.  You should have received a copy of the GNU
 * General Public License along with this program.
 * If not, see <http://opensource.org/licenses/gpl-license.php>.
 *
 * @package    x-mega-menu
 * @author     4xmen team  <www.4xmen.ir>
 * @author     A1Gard <a1gard@4xmen.ir>
 * @link       https://github.com/4xmen/x-mega-menu
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.xMegaMenu = factory());
})(this, (function () {
    'use strict';

    let xMegaMenu = window.xMegaMenu = (seletor, options =
        {
            responseWidth: '',
            barsIcon: '',
            mainTitle: '',
            isRtl: '',
            blurEffect: '',
            resetMenu: '',
            disableLinks: '',
            onCloseSideMenu: '',
            onOpenSideMenu: '',
            fixedTop: '',
        }) => {

        // default options
        let xOptions = {
            responseWidth: 1024,
            mainTitle: 'Navbar menu',
            isRtl: false,
            blurEffect: false,
            resetMenu: true,
            disableLinks: true,
            onCloseSideMenu: () => {

            },
            onOpenSideMenu: () => {

            },
            fixedTop: false,
            barsIcon: "<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB3aWR0aD0iNjU3cHQiIGhlaWdodD0iNjU3cHQiIHZpZXdCb3g9IjAgMCA2NTcgNjU3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBpZD0iI2ZmZmZmZmZmIj4NCjwvZz4NCjxnIGlkPSIjMmYyZjJmZmYiPg0KPHBhdGggZmlsbD0iIzJmMmYyZiIgb3BhY2l0eT0iMS4wMCIgZD0iIE0gMTkzLjM1IDE1Ny41MSBDIDMzNi4yNyAxNTcuMzAgNDc5LjE4IDE1Ny4zMCA2MjIuMTAgMTU3Ljk2IEMgNjI2LjEzIDE1Ny42OCA2MjguNjcgMTYxLjYyIDYyOS44NyAxNjQuOTYgQyA2MzIuODEgMTczLjY2IDYzMi44MSAxODMuMzUgNjI5Ljg3IDE5Mi4wNiBDIDYyOC42NiAxOTUuNDAgNjI2LjEzIDE5OS4zNyA2MjIuMDcgMTk5LjA1IEMgNDk5LjM4IDE5OS43MCAzNzYuNjkgMTk5LjY1IDI1NC4wMCAxOTkuNjQgQyAxODEuOTYgMTk5LjQyIDEwOS45MiAxOTkuNjAgMzcuODggMTk5LjAwIEMgMzMuMzkgMTk4LjIzIDMxLjU2IDE5My4yNCAzMC40MyAxODkuMzggQyAyOC40NCAxODEuMTYgMjguNTIgMTcyLjMyIDMxLjU0IDE2NC4zNiBDIDMyLjc0IDE2MS4yOCAzNS4xOSAxNTcuNzUgMzguOTAgMTU3Ljk3IEMgOTAuMzggMTU3LjY1IDE0MS44NyAxNTcuNTUgMTkzLjM1IDE1Ny41MSBaIiAvPg0KPHBhdGggZmlsbD0iIzJmMmYyZiIgb3BhY2l0eT0iMS4wMCIgZD0iIE0gNTEuMjkgMzA0LjQxIEMgODYuNTUgMzAzLjc3IDEyMS44MSAzMDQuMDYgMTU3LjA2IDMwMy45OCBDIDI5Ny4wMyAzMDMuOTAgNDM3LjAwIDMwMy45NSA1NzYuOTcgMzA0LjAwIEMgNTkyLjMwIDMwNC4xNyA2MDcuNjQgMzA0LjI5IDYyMi45NyAzMDQuNjMgQyA2MjYuOTkgMzA0LjczIDYyOC45MiAzMDguOTEgNjMwLjExIDMxMi4xNyBDIDYzMi43OSAzMjAuNzIgNjMyLjc3IDMzMC4xOCA2MjkuODIgMzM4LjY3IEMgNjI4LjY1IDM0Mi4wMyA2MjYuMTQgMzQ1LjgyIDYyMi4xMCAzNDUuNTIgQyA1NzQuMDcgMzQ2LjQ1IDUyNi4wMiAzNDUuODMgNDc3Ljk4IDM0Ni4wNyBDIDM2OC4zMCAzNDYuMTIgMjU4LjYyIDM0Ni4xMyAxNDguOTMgMzQ2LjA0IEMgMTEyLjAwIDM0NS44OCA3NS4wNCAzNDYuNDAgMzguMTIgMzQ1LjQ2IEMgMzQuMTYgMzQ1LjI2IDMyLjI4IDM0MS4yMiAzMS4wOCAzMzguMDEgQyAyOC4zNSAzMjkuMzcgMjguMzUgMzE5LjgzIDMxLjM4IDMxMS4yNyBDIDMyLjU1IDMwOC4zNCAzNC40NSAzMDQuNzkgMzguMDQgMzA0LjY0IEMgNDIuNDUgMzA0LjQzIDQ2Ljg4IDMwNC41MyA1MS4yOSAzMDQuNDEgWiIgLz4NCjxwYXRoIGZpbGw9IiMyZjJmMmYiIG9wYWNpdHk9IjEuMDAiIGQ9IiBNIDM3LjE1IDQ0OC4yNSBDIDU4LjAzIDQ0Ny42MSA3OS4wMiA0NDguMDIgOTkuOTUgNDQ3Ljc5IEMgMjczLjYyIDQ0Ny40NiA0NDcuMjkgNDQ3LjQ0IDYyMC45NiA0NDcuOTggQyA2MjQuNzggNDQ3LjQwIDYyNy45NyA0NTAuMzUgNjI5LjI5IDQ1My42OSBDIDYzMi44NyA0NjIuNTcgNjMyLjkxIDQ3Mi43NyA2MjkuOTkgNDgxLjg1IEMgNjI4Ljc5IDQ4NS4yOCA2MjYuMjggNDg5LjU0IDYyMi4wNSA0ODkuMTEgQyA1MjEuMzYgNDg5Ljg2IDQyMC42NiA0ODkuNzIgMzE5Ljk3IDQ4OS44NyBDIDI1Ni42NCA0ODkuODQgMTkzLjMxIDQ4OS42MyAxMjkuOTkgNDg5LjY0IEMgOTguOTQgNDg5LjMyIDY3Ljg4IDQ4OS41OSAzNi44NSA0ODguOTUgQyAzMi4wMyA0ODYuNjggMzAuNTcgNDgwLjg3IDI5Ljc3IDQ3Ni4wNiBDIDI4LjQzIDQ2OS40MyAyOS4wNCA0NjIuNTIgMzAuOTUgNDU2LjA2IEMgMzIuMDMgNDUyLjg5IDMzLjcxIDQ0OS4zNSAzNy4xNSA0NDguMjUgWiIgLz4NCjwvZz4NCjwvc3ZnPg0K'  alt='menu bars toggle' />",
        };


        // default global variable
        let timeoutShowSubMenu = null;
        let isDebug = false;

        // apply options
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
            if(xOptions.fixedTop){
                subMenu.style.top = xMenu.offsetHeight + 'px';
                subMenu.parentElement.style.height =  xMenu.offsetHeight + 'px';
            }
        }

        // show side menu for responsive (mobile) mode
        let showSideMenu = () => {
            sideMenu.classList.add('x-active');
            // add blur effect if active
            if (xOptions.blurEffect) {
                document.querySelectorAll('body > *').forEach((el) => {
                    if (el.querySelectorAll('.x-mega-menu').length === 0) {
                        el.classList.add('x-blur');
                    }
                });
                document.querySelector('.x-mega-menu').classList.add('x-blur');
            }
            xOptions.onOpenSideMenu();
        };

        // hide side menu for responsive (mobile) mode
        let hideSideMenu = () => {
            sideMenu.classList.remove('x-active');
            // remove blur effect if active
            if (xOptions.blurEffect) {
                document.querySelectorAll('.x-blur').forEach((el) => {
                    el.classList.remove('x-blur');
                });
                // reset submenus
                if (xOptions.resetMenu) {
                    document.querySelectorAll('.x-multi-level-menu').forEach((lvlMenu) => {
                        lvlMenu.remove();
                    });
                }
            }
            xOptions.onCloseSideMenu();
        };

        // show multi level menu just for desktop mode
        let showMultiLevelMenu = (el) => {
            // find sub menu section parent
            let parent = el.parentNode.closest('.x-main-section-menu');
            // create new ul
            let newUl = document.createElement('ul');
            // add back button with last level text
            newUl.innerHTML = '<li class="x-back-btn x-desktop"><span>〈 &nbsp; &nbsp; ' + findElementMainText(el) + '</span></li>';
            // append sub menu content
            newUl.innerHTML += el.querySelector('ul').innerHTML;
            // create div parent and append to main section
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('x-multi-level-menu-desktop');
            mainDiv.append(newUl);
            parent.append(mainDiv);
            // update event
            setTimeout(() => {
                updateEventForMultiLevel();
            }, 500);
        };

        // update event for multi menu
        // cuz mouseenter and mouseleave don't work on document live
        let updateEventForMultiLevel = () => {
            if (!xOptions.disableLinks) {
                document.querySelectorAll('.x-has-sub-menu.x-desktop').forEach((li) => {
                    // show menu
                    function showMenu() {
                        // reset timeout
                        clearTimeout(timeoutShowSubMenu);
                        // create delay for show sub menu
                        timeoutShowSubMenu = setTimeout(() => {
                            showMultiLevelMenu(li);
                        }, 1000);
                    }

                    function dontShowMenu() {
                        // cancel show submenu when
                        clearTimeout(timeoutShowSubMenu);
                    }

                    // reset and set events
                    li.removeEventListener('mouseenter', showMenu);
                    li.removeEventListener('mouseenter', dontShowMenu);
                    li.addEventListener('mouseenter', showMenu);
                    li.addEventListener('mouseleave', dontShowMenu);
                });
            }
        };

        // live event listener
        let liveListener = (eventType, elementQuerySelector, cb) => {
            document.addEventListener(eventType, (event) => {
                let qs = document.querySelectorAll(elementQuerySelector);

                if (qs) {
                    let el = event.target, index = -1;
                    while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                        el = el.parentElement;
                    }
                    if (index > -1) {
                        cb.call(el, event);
                    }
                }
            });
        };

        // find text content with default value
        let findElementMainText = (el, def = '') => {
            let txt = def;
            if (el.childNodes[0].nodeValue.trim().length > 0) {
                txt = el.childNodes[0].nodeValue.trim();
            } else if (el.querySelectorAll(':scope > a,:scope > span').length > 0) {
                txt = el.querySelector(':scope > a,:scope > span').innerText.trim();
            }
            return txt;
        }

        // remove last active class for main menu li
        let remActiveClassMenu = () => {
            xMenu.querySelectorAll('li.x-active').forEach((li) => {
                li.classList.remove('x-active');
            });
        }


        let xMenu = document.querySelector(seletor);
        // add x mega menu class
        xMenu.classList.add('x-mega-menu');

        // inject toggle button
        xMenu.innerHTML = `<li id="x-toggle">
            ${xOptions.barsIcon}
        </li>`
            + xMenu.innerHTML;

        // inject sub menu for show mega menu by content
        let subMenu = document.createElement("div");
        subMenu.classList.add('x-sub-menu');
        xMenu.parentNode.appendChild(subMenu);

        if (xOptions.fixedTop){
            xMenu.classList.add('x-fixed-top');
            subMenu.style.position = 'fixed';
            subMenu.style.left = '0';
            subMenu.style.right = '0';
            subMenu.style.zIndex = '99';

        }


        // x mega menu child event
        xMenu.querySelectorAll(':scope > li').forEach((li) => {

            // find has submenu and add class
            if (li.querySelectorAll('ul').length > 0) {
                li.classList.add('x-has-sub-menu');
            }
            // ignore padding for logo and images in menu to show bigger image in menu
            if (li.querySelectorAll(':scope > img, :scope > a > img').length > 0) {
                li.classList.add('x-has-image');
            }

            li.addEventListener('mouseenter', (e) => {
                // check has mega menu to show
                if (e.target.querySelectorAll('ul').length !== 0) {
                    // find mega menu content
                    subMenu.innerHTML = e.target.querySelector('ul').outerHTML;
                    // reset active class
                    remActiveClassMenu();
                    e.target.classList.add('x-active');
                    // mark main sections
                    subMenu.querySelectorAll(':scope > ul > li').forEach((mainLi) => {
                        mainLi.classList.add('x-main-section-menu');
                    });

                    // mark has sub menus li
                    subMenu.querySelectorAll('li li').forEach((li2) => {
                        if (li2.querySelectorAll('ul').length > 0) {
                            li2.classList.add('x-has-sub-menu');
                            li2.classList.add('x-desktop');
                            if (xOptions.isRtl) {
                                li2.classList.add('x-right');
                            }
                        }
                    });
                    updateEventForMultiLevel();
                    subMenu.classList.add('x-active');
                    // check blur effect to active
                    if (xOptions.blurEffect) {
                        document.querySelectorAll('body > *').forEach((el) => {
                            if (el.querySelectorAll('.x-mega-menu').length === 0) {
                                el.classList.add('x-blur');
                            }
                        });
                    }
                } else {
                    // hide sub menu
                    if (!isDebug) {
                        subMenu.innerHTML = '';
                        subMenu.classList.remove('x-active');
                        remActiveClassMenu();
                        if (xOptions.blurEffect) {
                            document.querySelectorAll('.x-blur').forEach((el) => {
                                el.classList.remove('x-blur');
                            });
                        }
                    }
                }
            });
        });

        // fix not links for padding that full block a
        xMenu.querySelectorAll('li').forEach((li) => {
            try {
                let txt = li.childNodes[0].nodeValue.trim();
                if (txt.length > 0) {
                    li.innerHTML = li.innerHTML.split(txt).join(`<span>${txt}</span>`);
                }
            } catch {
            }
        });
        // hide menu when mouse leave menu
        xMenu.parentNode.addEventListener('mouseleave', () => {
            if (!isDebug) {
                subMenu.innerHTML = '';
                subMenu.classList.remove('x-active');
                remActiveClassMenu();
                if (xOptions.blurEffect && window.innerWidth > xOptions.responseWidth) {
                    document.querySelectorAll('.x-blur').forEach((el) => {
                        el.classList.remove('x-blur');
                    });
                }
            }
        });


        // inject side menu
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
        sideMenu.querySelectorAll('.x-has-sub-menu').forEach((li) => {
            // fix rtl
            if (xOptions.isRtl) {
                li.classList.add('x-right');
            }
            // add next button
            li.innerHTML += `
        <div class="x-next">
            〉
        </div>
        `;
        });

        // remove not need elements
        sideMenu.querySelectorAll('.x-always-show,.x-has-image').forEach((li) => {
            li.remove();
        });


        document.querySelector('#x-toggle').addEventListener('click', () => {
            showSideMenu();
        });
        document.querySelector('.x-close').addEventListener('click', () => {
            hideSideMenu();
        });


        // generate next level
        liveListener('click', '.x-next', (e) => {

            // create multi level div
            let multiLevelMenu = document.createElement("div");
            multiLevelMenu.classList.add('x-multi-level-menu');
            // find content and add
            multiLevelMenu.innerHTML = e.target.parentNode.querySelector('ul').outerHTML;
            // append created menu to main
            e.target.parentNode.closest('.x-side-menu').append(multiLevelMenu);
            // fnd back text
            let txt = findElementMainText(e.target.parentNode);
            // add back button
            let back = document.createElement('div');
            back.classList.add('x-back');
            back.innerHTML = `${txt} <div class="x-back-btn"> 〈 </div>`;
            multiLevelMenu.prepend(back);

            // each sub items to optimize
            multiLevelMenu.querySelectorAll('li').forEach((li) => {
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
            multiLevelMenu.querySelectorAll('.x-list').forEach((li2) => {
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


        liveListener('click', '.x-back', (e) => {
            e.target.parentNode.closest('.x-multi-level-menu').remove();
        });


        liveListener('click', '.x-back-btn.x-desktop', (e) => {
            e.target.parentNode.closest('.x-multi-level-menu-desktop').remove();
        });

        liveListener('click', '.x-has-sub-menu.x-desktop', (e) => {
            if (xOptions.disableLinks) {
                e.preventDefault();
            }
            if (e.target.tagName === 'li') {
                showMultiLevelMenu(e.target);
            } else {
                showMultiLevelMenu(e.target.parentNode.closest('li.x-has-sub-menu'));
            }
        });


        sideMenu.addEventListener('click', (e) => {
            if (e.target.getAttribute('id') === 'x-side-menu') {
                hideSideMenu();
            }
        });


        window.addEventListener('resize', handleResize, true);
        handleResize();

    }
    const index_umd = xMegaMenu;

    return index_umd;

}));

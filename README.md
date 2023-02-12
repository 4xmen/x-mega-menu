# x-mege-menu
x mega menu is easy usable multi level responsive with vanillaJS (ltr and rtl support)

## How use it?
With package manager:
````
npm i x-mega-menu
````
or
````
x-mega-menu
````
or use dist file of repo.

add assets:
```html
   <link rel="stylesheet" href="../dist/x-mega-menu.css">
   <script src="../dist/x-mega-menu.js"></script>
```

HTML:
```html
<nav>
    <ul id="mega-menu">
        <li>
            <a href="#">
                <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt="">
            </a>
        </li>
        <li>
            <a href="#">
                menu item 1
            </a>
            <ul>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 2
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li>
                            <a href="#">sub sub item 03 has</a>
                            <ul>
                                <li><a href="#">sub sub sub item 001</a></li>
                                <li><a href="#">sub sub sub item 002</a></li>
                                <li><a href="#">sub sub sub item 003</a></li>
                                <li>
                                    <a href="#">
                                        sub sub sub item 004 has sub
                                    </a>
                                    <ul>
                                        <li><a href="#">sub sub sub item 001</a></li>
                                        <li><a href="#">sub sub sub item 002</a></li>
                                        <li><a href="#">sub sub sub item 003</a></li>
                                        <li><a href="#">sub sub sub item 004</a></li>
                                        <li><a href="#">sub sub sub item 005</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">sub sub sub item 005 has too</a>
                                    <ul>
                                        <li><a href="#">sub sub sub item 001</a></li>
                                        <li><a href="#">sub sub sub item 002</a></li>
                                        <li><a href="#">sub sub sub item 003</a></li>
                                        <li><a href="#">sub sub sub item 004</a></li>
                                        <li><a href="#">sub sub sub item 005</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 3
                    </h3>
                    <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt="">
                </li>
                <li class="x-highlight">
                    <h3>
                        This highlight section
                    </h3>
                    <br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem doloremque ducimus enim
                        est et facilis iusto laboriosam magni molestiae molestias nesciunt obcaecati optio possimus
                        quam, quidem quos repudiandae sunt.
                    </p>
                </li>
            </ul>
        </li>
        <li>

            menu item 2

            <ul>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>
                <li>
                    <h3>
                        sub item 3
                    </h3>
                    <img src="https://assets.ubuntu.com/v1/ff6a9a38-ubuntu-logo-2022.svg" alt="">
                </li>
                <li>
                    <h3>
                        sub item 1
                    </h3>
                    <ul>
                        <li><a href="#">sub sub item 01</a></li>
                        <li><a href="#">sub sub item 02</a></li>
                        <li><a href="#">sub sub item 03</a></li>
                        <li><a href="#">sub sub item 04</a></li>
                        <li><a href="#">sub sub item 05</a></li>
                    </ul>
                </li>

                <li class="x-highlight">
                    <h3>
                        This highlight section
                    </h3>
                    <br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem doloremque ducimus enim
                        est et facilis iusto laboriosam magni molestiae molestias nesciunt obcaecati optio possimus
                        quam, quidem quos repudiandae sunt.
                    </p>
                </li>

            </ul>
        </li>
        <li>
            <a href="#">
                menu item 3
            </a>
        </li>
        <li>
            <a href="#">
                menu item 4
            </a>
        </li>
        <li>
            <a href="#">
                menu item 3
            </a>
        </li>
        <li>
            menu item 4
        </li>
        <li class="x-always-show x-small">
            🔍
        </li>
    </ul>
</nav>
```
javascript use:
```javascript
xMegaMenu('#mega-menu', {
    responseWidth: 1000,
    isRtl: true,
    mainTitle: '🖤 xStack menu 🖤',
    blurEffect: true,
    disableLinks: false,
});
```
## DEMO (example)

You can watch /example of project.

## option and events

### options

| name  | default  |  action  |
| ------------ | ------------ | ------------ |
| responseWidth  |  `1024`  |  active mobile mode (side menu)  |
| barsIcon |  -  |  any html element use for toggle bar   |
| mainTitle  | `Navbar menu`  | change main menu title   |
| isRtl  |  `false` |  change direction to rtl |
|  blurEffect | `false`  |  blur effect when menu active |
|  resetMenu | `true`  | reset side menu when close  |
|  disableLinks | `true`  | disable links when has sub menu click event otherwise on mouse enter show sub level   |


### theme
- default (red)
- blue
- gray
- dark

# screenshots

![A Screenshot ]( ./screenshot-desktop.png?raw=true "Screen shot")
![A Screenshot ]( ./screen-sidemenu-red.png?raw=true "Screen shot")
![A Screenshot ]( ./screen-sidemenu-blue.png?raw=true "Screen shot")
![A Screenshot ]( ./screen-sidemenu-dark.png?raw=true "Screen shot")



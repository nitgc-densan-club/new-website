fetch("https://nitgc-densan-club.github.io/new-website/components/nav-menu/nav-menu.html")
    .then((stream) => stream.text())
    .then((text) => define_NavMenu(text));

function define_NavMenu(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class NavMenu extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
    }

    customElements.define("nav-menu",NavMenu);
}
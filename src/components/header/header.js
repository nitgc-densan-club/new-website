fetch("/src/components/header/header.html")
    .then((stream) => stream.text())
    .then((text) => define(text));

function define(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class TopHeader extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){
            const shadow = this.shadowRoot;
            const tocButton = shadow.getElementById("tocButton");
            tocButton?.addEventListener("click",()=>{
                tocButton.classList.toggle("active");
                document.body.classList.toggle("toc-active");
            });
            //console.log(tocButton);

            const menuButton = shadow.getElementById("menuButton");
            menuButton?.addEventListener("click",()=>{
                menuButton.classList.toggle("active");
                document.body.classList.toggle("menu-active");
            });
            //console.log(menuButton);
        }
    }

    customElements.define("top-header",TopHeader);
}
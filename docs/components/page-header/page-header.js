fetch("http://127.0.0.1:5500/docs/components/page-header/page-header.html")
    .then((stream) => stream.text())
    .then((text) => define_PageHeader(text));

function define_PageHeader(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class PageHeader extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){
           
        }
    }

    customElements.define("page-header",PageHeader);
}
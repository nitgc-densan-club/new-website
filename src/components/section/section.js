fetch("/src/components/section/section.html")
    .then((stream) => stream.text())
    .then((text) => define(text));

function define(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class Section extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
    }

    customElements.define("p-section",Section);
}
fetch("/src/components/card/card.html")
    .then((stream) => stream.text())
    .then((text) => define(text));

function define(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class Card extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
    }

    customElements.define("digest-card",Card);
}
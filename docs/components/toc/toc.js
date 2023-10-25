fetch("https://nitgc-densan-club.github.io/new-website/components/toc/toc.html")
    .then((stream) => stream.text())
    .then((text) => define_Toc(text));

function define_Toc(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class Toc extends HTMLElement {
        static observedAttributes = ["class"];
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
        attributeChangedCallback(name, oldValue, newValue) {
            if(newValue === "active"){
                this.shadowRoot.querySelector("#toc > .acd-content").classList.add("active");
            }else{
                this.shadowRoot.querySelector("#toc > .acd-content").classList.remove("active");
            }
        }
    }

    customElements.define("toc-element",Toc);
}
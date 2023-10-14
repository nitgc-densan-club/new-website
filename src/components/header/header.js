const headerScript = () => {
    const tocButton = document.getElementById("tocButton");
    tocButton?.addEventListener("click",()=>{
        tocButton.classList.toggle("active");
        document.body.classList.toggle("toc-active");
    });
    //console.log(tocButton);

    const menuButton = document.getElementById("menuButton");
    menuButton?.addEventListener("click",()=>{
        menuButton.classList.toggle("active");
        document.body.classList.toggle("menu-active");
    });
    //console.log(menuButton);
}

headerScript();

export { headerScript };
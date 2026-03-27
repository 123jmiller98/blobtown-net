
// Const pages. Update pages here

import Index from "../index.js";

//TODO: UPDATE WITH CURRENT ICONS
export const PAGES = Object.freeze({
    HOME:       { id: "home", label: "Home", icon: "todo-add", url: "./Pages/Home.js" },
    MAP:        { id: "map", label: "Map", icon: "todo-add", url: "./Pages/Map.js" }
});


export default class Navigation
{

    constructor(currentPage)
    {
        this.title = currentPage;
        this.currentPage = currentPage;
       //this.menuOpen = false;

        this.renderSideBar();
    }

    renderSideBar(menuOpen = false)
    {

        // Gets navBar
        const navBar = document.getElementById("navBar");

        // clear the navbar
        navBar.innerHTML = "";

        // create new element
        let nav = document.createElement("nav");
        nav.className = "sidebar";

        // Load each page
        Object.values(PAGES).forEach(page => {
            const button = document.createElement("button");

        // button.textContent = page.label;
            button.className = "nav-button";
            
            const label = document.createElement("span");
            label.textContent = page.label;
            button.appendChild(label);

            // Loads new page
            button.addEventListener("click", ()=> {
                const index = new Index();
                index.navigatePages(page);
            });

            nav.appendChild(button);

        });

        navBar.appendChild(nav);

    }

}

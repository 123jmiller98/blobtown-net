
// Const pages. Update pages here

import Index from "../index.js";

//TODO: UPDATE WITH CURRENT ICONS
export const PAGES = Object.freeze({
    HOME:       { id: "home", label: "Home", icon: "./Resources/java-icon.png", url: "./Pages/Home.js" },
    MAP:        { id: "map", label: "Map", icon: "./Resources/java-icon.png", url: "./Pages/Map.js" }
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

        //let menuOpen = false;

        // Add Hamburger icon
        const hamburger = document.createElement("button");
        hamburger.className = "nav-button";
        const hamburgerIcon = document.createElement("img");
        hamburgerIcon.src = "./Resources/hamburger-icon.png";
        hamburgerIcon.alt = "Menu";
        hamburger.appendChild(hamburgerIcon);

        // When the hamburger is clicked toggle navbar
        hamburger.addEventListener("click", ()=> {
            this.renderSideBar(!menuOpen);
        });
       
        nav.appendChild(hamburger);


        // Load each page
        Object.values(PAGES).forEach(page => {
            const button = document.createElement("button");

        // button.textContent = page.label;
            button.className = "nav-button";
            
            if (menuOpen)
                {
                    const label = document.createElement("span");
                    label.textContent = page.label;
                    button.appendChild(label);

                }
            

            const buttonIcon = document.createElement("img");
            buttonIcon.src = page.icon;
            buttonIcon.alt = page.title;
            button.appendChild(buttonIcon)

            button.addEventListener("click", ()=> {
                const index = new Index();
                index.navigatePages(page);
            });

            nav.appendChild(button);

        });

        navBar.appendChild(nav);

    }

}

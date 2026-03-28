
import Index from "../index.js";

// Const pages. Update pages here
//TODO: UPDATE WITH CURRENT ICONS
export const PAGES = Object.freeze({
    HOME:       { id: "home", label: "Home", icon: "todo-add", url: "./Pages/Home.js" },
    MAP:        { id: "map", label: "Map", icon: "todo-add", url: "./Pages/Map.js", mapUrl: "https://x9f2k8j3l0q7w1y.blobtown.net/" }
});


export default class Navigation
{

    constructor(currentPage)
    {
        // Set title
        document.title = currentPage.label;

        // Set path
        // TODO: THIS BREAKS THE RELOAD BUTTON
        // FIX THIS
        const blobTownPath = `/${currentPage.id}`;
        if (window.location.pathname !== blobTownPath)
        {
            history.pushState({}, currentPage.label, blobTownPath);
        }

        
        this.currentPage = currentPage;

        this.renderNavBar();
    }

    renderNavBar(menuOpen = false)
    {

        // Gets navBar
        const navBar = document.getElementById("navBar");

        // clear the navbar
        navBar.innerHTML = "";

        // create new element
        let nav = document.createElement("nav");
        nav.className = "navbar";

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

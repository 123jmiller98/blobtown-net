
   
import { PAGES } from './Pages/Navigation.js';

// Event listener to Call render navigation on page load or reload
window.addEventListener("DOMContentLoaded", () => {
    
    // Determines the correct page to load
    const currentPage = determineCurrentPage();
    
    // loads page
    const index = new Index();
    index.navigatePages(currentPage);
    
});

// Event Listener for page navigation arrows
window.addEventListener("popstate", () => {
    
    // Determines the correct page to load
    const currentPage = determineCurrentPage();
    
    // loads page
    const index = new Index();
    index.navigatePages(currentPage);
});


function determineCurrentPage()
    {
        // Determines the /path || Defaults to home if invalid
        const path = window.location.pathname;
        const currentPage = Object.values(PAGES).find(p => `/${p.id}`=== path) || PAGES.HOME;

        // Returns current page
        return currentPage;
    }


export default class Index
{

    // Navigation controller function
    async navigatePages(currentPage)
    {
        const content = document.getElementById('content');
        content.innerHTML = "";

        try {
            const module = await import(currentPage.url);
            new module.default(currentPage);

        } catch(ex)
        {
            console.error("Failed to load module:", ex);
            window.alert(ex);
        }

    }   
}
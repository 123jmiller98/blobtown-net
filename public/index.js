
   
import { PAGES } from './Pages/Navigation.js';

// Call render navigation on page load
window.addEventListener("DOMContentLoaded", () => {
   const index = new Index();
    index.navigatePages(PAGES.HOME);
});




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
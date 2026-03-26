
   
// Call render navigation on page load
window.addEventListener("DOMContentLoaded", () => {
    navigatePages(PAGES.HOME);
});

import { PAGES } from './Pages/Navigation.js';


// Navigation controller function
export async function navigatePages(currentPage)
{
    const content = document.getElementById('content');
    content.innerHTML = "";

    try {
        const module = await import(currentPage.url);

        new module.default(currentPage);

    } catch(ex)
    {
        window.alert(ex);
    }


}
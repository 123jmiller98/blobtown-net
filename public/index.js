
   
// Call render navigation on page load
window.addEventListener("DOMContentLoaded", () => {
    navigatePages(PAGES.HOME);
});

import { PAGES } from '/Pages/Navigation.js';


// Navigation controller function
export async function navigatePages(currentPage)
{
    const content = document.getElementById('content');
    content.innerHTML = "";

    try {
        const moduleURL = new URL(currentPage.url, window.location.origin).toString();
        const module = await import(moduleURL);

        new module.default(currentPage);

    } catch(ex)
    {
        console.error("Failed to load module:", ex);
        window.alert(ex);
    }


}
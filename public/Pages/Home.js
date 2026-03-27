
import Navigation from './Navigation.js';

export default class Home extends Navigation
{
    constructor(currentPage)
    {
        super(currentPage)
         this.render();
    }

    // Placeholder
    render() {
        
        const content = document.getElementById('content');
        content.innerHTML = '<h1>Welcome to BlobTown</h1>';
    
    }

}
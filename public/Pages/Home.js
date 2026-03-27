
import Navigation from './Navigation.js';

export default class Home extends Navigation
{
    constructor(currentPage)
    {
        super(currentPage)
         this.render();
    }

    render() {
        
        const content = document.getElementById('content');
        content.innerHTML = '<h1>Hi! Home loaded dynamically.</h1>';
    
    }

}
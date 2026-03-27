import Navigation from './Navigation.js';

export default class Map extends Navigation
{
    constructor(currentPage)
    {
        super(currentPage)
         this.render();
    }

    render() {
        
        const content = document.getElementById('content');
       // content.innerHTML = ''; // clear old content
        content.innerHTML = '<h1>WOW! Map loaded dynamically.</h1>';

        // Test comment
    
    }

}
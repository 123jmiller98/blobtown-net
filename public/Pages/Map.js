import Navigation, { PAGES } from "./Navigation.js";

export default class Map extends Navigation {
  constructor(currentPage) {
    super(currentPage);
    this.renderMap();
  }

  // Renders Map on page in a frame
  renderMap()
    {
        const container = document.getElementById("content");
        
        // Dynamically name class for css file
        container.className = "map";
        const iframe = document.createElement("iframe");

        // Embed map in frame
        iframe.src = PAGES.MAP.mapUrl;
        

        container.appendChild(iframe);

    }
}

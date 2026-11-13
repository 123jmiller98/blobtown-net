import Navigation, { PAGES } from "./Navigation.js";

export default class Map extends Navigation {
  constructor(currentPage) {
    super(currentPage);
    this.renderMap();
  }

  // Renders Map on page in a frame
  renderMap()
    {   
        // Dynamically name class for css file
        const iframe = document.createElement("iframe");
        iframe.className = "map";

        // Embed map in frame
        iframe.src = PAGES.MAP.mapUrl;
        this.content.appendChild(iframe);

    }
}

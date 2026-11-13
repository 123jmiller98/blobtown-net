import Navigation, { PAGES } from "./Navigation.js";

export default class Tour extends Navigation {
  constructor(currentPage, tourIndex = 0) {
    super(currentPage);

    this.renderHeader();
    this.renderLatestTourVideo();
    this.renderSideBar();

    // wilbungalo
    
  }



  // Renders Map on page in a frame
  renderHeader()
    {
        let header = document.createElement("h1");
        header.innerText = "BlobTown World Tour";
        this.content.appendChild(header);

    }

    renderLatestTourVideo()
    {
     
        // Displays latest video of world tour pulled from db
        let iframe = document.createElement("iframe");
        iframe.src = this.returnLatestWorldTourVideoUrl();
        iframe.allow = "autoplay; fullscreen";
        this.content.appendChild(iframe);
        
    }
     

    renderSideBar()
    {
        let sidebar = document.createElement("aside");
        let ul = document.createElement("ul");

        let listOfUrls = this.returnListOfOldTourVideoUrls()

        listOfUrls.forEach(url => {
            
            let button = document.createElement("button");
            button.textContent = url.date;
            button.onclick = () => {
                const Tour = new Tour;
                Tour(url.url);
            };

            ul.appendChild(button);

        });
        
        
        sidebar.appendChild(ul);
        this.content.appendChild(sidebar);



    }


    // Helper function to return latest video
    returnLatestWorldTourVideoUrl()
    {

        // TODO: REPLACE THIS WITH ACTUAL CALL TO DB
        let videoUrl = "https://youtu.be/uPcptI8zBrE";
        
        return this.cleanseYouTubeUrlEmbed(videoUrl);

    }

    // Helper function to make URL usable
    cleanseYouTubeUrlEmbed(videoUrl)
    {
        // Extract the YouTube video ID reliably
        const regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&]+)/;
        const match = videoUrl.match(regExp);
        const videoId = match ? match[1] : null;

        if (!videoId) {
            console.error("Invalid YouTube URL:", videoUrl);
            return ""; // return empty string if invalid
        }

        // Return the full embed URL
        return `https://www.youtube.com/embed/${videoId}`;

    }

    // Helper function to return old tour videos
    returnListOfOldTourVideoUrls()
    {
        // TODO REPLACE WITH ACTUAL CALL TO DB
        const listOfUrls = [];

        for (let i = 1; i <= 10; i++) {
        listOfUrls.push({
            index: i,
            url: "https://youtu.be/uPcptI8zBrE",
            date: "0"+ i + "/27/1998"
        });
        }

        return listOfUrls;

    }


}

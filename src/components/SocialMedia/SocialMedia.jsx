import React from "react";
import images from "../../constants/image";
import './SocialMedia.css'


function SocialMedia(){
    return(
        <div>
            <div id="socialMediaLogoAndText">
                <h2 id="socailMediaTxt">Social Media</h2>
                <img src={images.logoSm} alt="logoSm" id="logoSm" />
            </div>
            <p id="socailMediaAbout">
            In this space, I'm excited to share a glimpse into my world, 
            offering summaries of both my entertainment endeavors and academic
             pursuits. Join me on this journey where I blend passion with knowledge!
            </p>

            
        </div>
    );
}

export default SocialMedia;
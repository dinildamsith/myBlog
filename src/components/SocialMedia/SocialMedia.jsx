import React from "react";
import images from "../../constants/image";
import './SocialMedia.css'





function SocialMedia(){
    return(
        <div>

            <p id="socailMediaAbout">
            Some of the most beautiful and dangerous places I 
            have mentioned above. Go on a vacation and look at the 
            beauty. Leave only footprints. Enjoy life.
            </p>
            <div id="socialMediaLogoAndText">
                <h2 id="socailMediaTxt">Contact</h2>
                <img src={images.logoSm} alt="logoSm" id="logoSm" />
            </div>
    
            <div id="contactUs">
    <a href="https://wa.me/714430305"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp"/></a>
    <a href="https://www.facebook.com/dinil.damsith.391?mibextid=ZbWKwL"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook"/></a>
    <a href="mailto:dinildamsith52@gmail.com?subject=Your%20Subject%20Here"><img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="Gmail"/></a>
</div>

    
           
           


        </div>
    );
}

export default SocialMedia;
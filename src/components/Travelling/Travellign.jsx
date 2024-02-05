import React from "react";
import image from "../../constants/image";
import './travellign.css'
import './slideshow.css'
import Map from "../map/map";

function Travelling(){
    return(
        <div>
            <div id="travelImageAndTxt">
            <h2 id="travlignTxt">Travelling</h2>
            <img src= {image.travel} id="travelImage" alt="travlImage"/>
            </div>
 

            <div>
               
               <h2 id="kumariellaName">Kumari Ella</h2>
      
                  
                  <ul class="slideshow">

                      <li><span className="slide" style={{ backgroundImage: 'url("https://www.360view.lk/wp-content/uploads/2020/04/Kumari_Ella_Photos_By_360viewlk-1-of-5-1-scaled.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/dinil2005/img/main/WhatsApp%20Image%202023-05-30%20at%205.20.08%20PM.jpeg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://www.360view.lk/wp-content/uploads/2020/04/Kumari_Ella_Photos_By_360viewlk-5-of-5-1-1536x1024.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/dinil2005/img/main/kk2.png")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/dinil2005/img/main/kk4.png")' }}></span></li>

                  </ul>
                


                <p id="kumari_ella_desc">Kumari Ella Falls is a 4m (13 ft) waterfall located in Puwakpitiya, Avissawella, 
                    about an hour and a half from Colombo. At the bottom of this small cascade is a deep 
                    plunge pool that is extremely dangerous to swim in. Kumari Ella is named after Kumari, 
                    the daughter of King Rajasinghe I of Sitawaka (who reigned from the mid to late 1500s) 
                    who drowned there.Despite its low height, Kumari Ella Falls is extremely powerful. This is 
                    because the waterfall is formed by four different streams merging near this point and eventually 
                    joining the major river Kelani.To get to the waterfall, travel about 2 kilometres along 
                    Thummodara-Puwakpitiya Road until you reach Hewahinna Road. Turn left onto this road, which runs alongside 
                    a small shop, and continue for another half kilometre until you reach a large rocky mound. The waterfall 
                    trail is just 50m on the left after this. After a short but steep descent into a small canyon, you will arrive 
                    at the Kumari Ella falls.The waterfall is quite beautiful and photographs well. There are safe rock pools at
                     the crest of the falls to bathe or swim in; however, do not endanger your life in the base pool. 
                     Take precautions because the area contains several small but highly poisonous snakes, and avoid walking 
                     around barefoot. Also, please do not litter and help to keep our environment clean and healthy for future generations.
                </p>
               <div>
                <Map/>
               </div>
            </div>
        </div>
    );
}

export default Travelling;
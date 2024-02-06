import React from "react";
import image from "../../constants/image";
import './travellign.css'
import './slideshow.css'
import Map from "../map/map";

function Travelling(){
    return(
        <div >
            <div id="travelImageAndTxt">
            <h2 id="travlignTxt">Places</h2>
            <img src= {image.travel} id="travelImage" alt="travlImage"/>
            </div>
 
            <p id="travlignAbout">
            During my travels, I will share information about the tourist 
            spots I visited and the areas where they are located. I have 
            organized this section to give a clear overview. This section 
            is dedicated to travel enthusiasts.
            </p>

            <div>
               
               <h2 id="kumariellaName">&#127754;Kumari Ella</h2>
      
                  
                  <ul class="kumariElla">

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
               <div id="kuamriAllMap">
                <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7930080563057!2d80.1045661!3d6.9116981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3abfdf24bb4f1%3A0xd244814799827974!2sW56P%2BMQP%2C%20Digana!5e0!3m2!1sen!2slk!4v1624327450682!5m2!1sen!2slk"/>
               </div>

               <h2 id="barandiKovilaName">&#128509;Barandi Kovila of Seethawaka Kingdom – බැරැන්ඩි කෝවිල</h2>

                <ul class="barandKovila">

                      <li><span className="slide" style={{ backgroundImage: 'url("https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/barandi-kovil-00-900_orig.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/dinil2005/img/main/WhatsApp%20Image%202023-04-02%20at%203.33.55%20PM.jpeg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/10/image0436.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/10/image0440.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/10/image0423.jpg")' }}></span></li>

                </ul>

                <p id="barndiKoviladESC">
                The ruins of the Barandi Kovil in a suburb of Seethawaka (formerly known as Avissawella) are 
                rarely visited by foreigners, though many travel along the close-by main road from Kitulgala 
                to the coast. To be honest, what can be seen of the former state temple of the 16th century is 
                not quite imposing. However, the Barandi Kovil archaeological site is worth a short break, as the
                 location is quite charming and the temple is of some historical significance, as it was the main 
                 building of the former Seethawaka kingdom, which was the most important principality of the island
                  in the second half of the 16th century. Furthermore, this is the only major state temple of a Sri
                   Lankan monarchy that was dedicated to Shiva and thereby Hindu instead of Buddhist. Actually,
                    Hinduism seems to have replaced Buddhism as the Sinhalese state religion in the Seethwaka period.
                     This is the reason why the Seethawaka kingdom, though the major proponent of Sinhalese independence 
                     against Portuguese overlordship, has not a good reputation in Buddhist historiography.
                </p>

                <div id="barandiKovilaMapp">
                <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.457696448114!2d80.2242242!3d6.9552124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a9aee7138b27%3A0x4f3dc7ebe60df528!2sBarandi%20Kovila!5e0!3m2!1sen!2slk!4v1707141865088!5m2!1sen!2slk"/>
                </div>



                <h2 id="kahavitaName">&#127754;Kahanawita Falls - කහනවිට ඇල්ල​</h2>

                <ul class="kahnavita">

                      <li><span className="slide" style={{ backgroundImage: 'url("https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2014/05/74481063.jpg?ssl=1")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/dinil2005/img/main/photo_6168116149011723125_y.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://dayouting.lk/img_uploads/tourist-places/4714441677517602.jpg")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/325895419_1256297808288222_6166553942448157035_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFoToxrGxNQRoOZ93Ah2vz2jajpyhMj9L-NqOnKEyP0v6LS9xmgL72kvG7EZ_q86ul_uNnSlTHDalSPGHWIVWn0&_nc_ohc=K5X1CSuEdNsAX8R7a5q&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfBPCAzDTola-ypAEPkGcSTntemwAs7q1meJFyhImIUqkg&oe=65C59DD7")' }}></span></li>
                     <li><span className="slide" style={{ backgroundImage: 'url("https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/238783518_821324925252830_8552159627414047081_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFveL-J0mt-pIAHhmnBL8TYIEsH8u3Cz8ogSwfy7cLPyjCjvHbg5TlY8cn5rrKtNjFPzh6fxz02E-zf950iFiU0&_nc_ohc=fad25_LhkRgAX_Jdk2q&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfBjXdB2gH8jZ9sODsiNDuNNMuxqFCRetBKapNpgnMedPQ&oe=65C70B5B")' }}></span></li>

                </ul>

                <p id="kahanvitaEllDesc">
                  Kahanawita Ella also called as Ballamula Ella 
                  is a very famous waterfall in Kegalle district.
                  Daraniyagala area in Kegalle district is blessed
                  with so many waterfalls and Kahanawita Ella is very 
                  popular one among them. This waterfall is situated before 
                  Daraniyagala and just after Dehiowita. If you come from Colombo 
                  side you need to come to Awissawella, then to Dhiowita and turn 
                  to Daraniyagala side from there.
                </p>
                <div id="kahnavitaEllMap">
                    
                    <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63366.84008343807!2d80.24667665298695!3d6.958791868562495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a7d7df053c23%3A0xd7bfccdd2f51c755!2sKahanawita%20Ela!5e0!3m2!1sen!2slk!4v1707161622193!5m2!1sen!2slk"/>
                    
                </div>



                
            </div>
        </div>
    );
}

export default Travelling;
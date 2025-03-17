import React from "react";
import { Outlet} from "react-router-dom";
import banner from "./home.jpg";
import "./Layout.css";
export default function LayoutPath(){

    return(
    
        <>
    <marquee>
        Dear Customers - Our offers / promotions and customer care contact details are published on our websites 
        <a href="https://www.dmartindia.com" target="_blank">(www.dmartindia.com</a> and 
        <a href="https://www.dmartindia.in" target="_blank">www.dmart.in)</a>,
        DMart Ready App, and at our Stores. Please do not call any unknown numbers or click on any unknown links 
        or similar-looking links. Please check the website name carefully. These could be potential phishing websites.
    </marquee>
    <img src={banner} alt="Home page photo" width={1255} height={430}/>
    <p className="Quick">QUICK LINKS</p>
    <div className="New-Suppliers">
        <img src="https://www.dmartindia.com/static/media/photo-1514792368985-f80e9d482a02.c96767e9.jpg" alt="New Suppliers Photo" width={350} height={158}/>
        <div className="New-Suppliers-1">
        <p className="new">New Suppliers</p>
        <p className="new-1">Would you like to showcase your products to us?</p>
        <button className="new-2">ONLINE APOINTMENT</button>
        <button className="new-2">VENDOR REGISTRATION</button>
        </div>
        </div>
        <div className="Register-landlord">
        <p className="land">Land lords</p>
        <p className="land-1">Do you have a property to rent / sell?</p>
        <button className="land-2">REGISTER AS LANDLORD</button>
        <div className="Register-landlords">
        <img src="https://www.dmartindia.com/static/media/photo-1534723452862-4c874018d66d.4328707c.jpg" alt="D-mart picture"width={350} height={158}/>
        </div>
        </div>
        <div className="New-Suppliers">
        <img src="https://www.dmartindia.com/static/media/photo-1586281380349-632531db7ed4.d0c6ae2b.jpg" alt="Job Photo" width={350} height={158} />
        <div className="New-Suppliers-1">
        <p className="new">Job Aspirant</p>
        <p className="new-1">Interested in joining us?</p>
        <button className="new-2">APPLY NOW</button>
        </div>
        </div>
        <div className="Register-landlord">
        <p className="land">Better Schools, Brighter Futures!</p>
        <p className="land-1">Better Schools, Brighter Future!</p>
        <button className="land-2">READ MORE</button>
        <div className="Register-landlords">
        <img src="https://www.dmartindia.com/static/media/photo-1531206715517-5c0ba140b2b8.69577f04.jpg" alt="D-mart picture"width={350} height={158}/>
        </div>
        </div>
        <p className="Quick">NEW STORES</p>
        <div className="Stories">
            <div className="Stories-1">
            <p className="P-1">Sagar</p>
            <p className="P-2">Sagar, Madhya Pradesh</p>.
            <img src="https://api.dmartindia.com/corporate/content/file/v1/257/Kswp5U4ucT1spnnhlBPUcwKW1729582418/DMart%20-%20Sagar" alt="Sagar"width={380} height={258} />
            </div>
            <div className="Stories-1">
            <p className="P-1">Narasaraopet</p>
            <p className="P-2">Narasaraopet, Andhra Pradesh</p>.
            <img src="https://api.dmartindia.com/corporate/content/file/v1/258/DOKHrdYCUziilgBIpyHYrPB01729582858/Narasaraopet" alt="Sagar"width={380} height={258} />
            </div>
            <div className="Stories-1">
            <p className="P-1">Bagalkot</p>
            <p className="P-2">Belagavi, Karnataka</p>.
            <img src="https://api.dmartindia.com/corporate/content/file/v1/259/sXT6L4wTOi0CTjT9eFR6P1ri1729583247/DMart%20-%C2%A0Bagalkot" alt="Sagar"width={380} height={258} />
            </div>
            <div className="Stories-1">
            <p className="P-1">Vatva</p>
            <p className="P-2">Ahmedabad, Gujarat</p>.
            <img src="https://api.dmartindia.com/corporate/content/file/v1/260/ayEaFkWK9R6b8HJ9tfyTFw8c1729583445/Vatva" alt="Sagar"width={380} height={258} />
            </div>
            <div className="Stories-1">
            <p className="P-1">Thergaon 2, Wakad Pune</p>
            <p className="P-2">Pune, Maharashtra</p>.
            <img src="https://api.dmartindia.com/corporate/content/file/v1/261/OyNAzkUkksv7TtcaLPr84XM51729583794/Thergaon%202,%20Wakad%20Pune" alt="Sagar"width={380} height={258} />
            </div>
            <div className="Stories-1">
            <p className="P-1">Nawanshahr</p>
            <p className="P-2">Nawanshahr, Punjab</p>.
            <img src="http://api.dmartindia.com/corporate/content/file/v1/262/1B12Lgj7a8uiXWotb7FMIUBa1729584001/Nawanshahr" alt="Sagar"width={380} height={258} />
            </div>
        </div>
        <p className="Quick">STORE CATEGORIES</p>
        <div className="Store">
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/GROCERY%20&%20STAPLES.88be12a7.jpg" alt="Grocery"width={250} height={250} />
                <p className="Store-Names">GROCERY & STAPLES</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/DAILY%20ESSENTIALS.e203cb84.jpg" alt="Biscuit"width={250} height={250} />
                <p className="Store-Names">DAILY ESSENTIALS</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/DAIRY%20&%20FROZEN.41fe6246.jpg" alt="Chocolate"width={250} height={250} />
                <p className="Store-Names">DAIRY & FROZEN</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/DMART%20BRANDS.d0b4c9ca.jpg" alt="Milk"width={250} height={250} />
                <p className="Store-Names">DMART BRANDS</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/CROCKERY.df85981a.jpg" alt="Crocery"width={250} height={250} />
                <p className="Store-Names">CROCKERY</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/footwear.c6c8abf9.jpg" alt="footwear" width={250} height={250}/>
                <p className="Store-Names">FOOTWEAR</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/luggage.4918bf6c.jpg" alt="Luggage"width={250} height={250} />
                <p className="Store-Names">LUGGAGE</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/toys.9758d08b.jpeg" alt="toys" width={250} height={250}/>
                <p className="Store-Names">TOYS</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/plastics.d88cb67f.jpeg" alt="plastic"width={250} height={250} />
                <p className="Store-Names">PLASTICS</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/kids-clothing.2a98cc19.jpg" alt="clothes"width={250} height={250} />
                <p className="Store-Names">KIDS APPAREL</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/LADIES%20GARMENTS.8db50d48.jpg" alt="ladies"width={250} height={250} />
                <p className="Store-Names">WOMEN'S APPAREL</p>
            </div>
            <div className="Store-1">
                <img src="https://www.dmartindia.com/static/media/apparel-men.309fe2a5.jpg" alt="men"width={250} height={250} />
                <p className="Store-Names">MEN'S APPAREL</p>
                </div>
        </div>
        <div className="Map-container">
        <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=velacherry%20dmart+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">cat gps tracker</a></iframe>
        </div>
        <div className="Footer">
            <p className="Footer-content">Sitemap</p>
            <p className="Footer-content">Privacy policy</p>
            <p className="Footer-content">Terms of Use</p>
            <p className="Footer-content">Investor Relations</p>
        </div>

            <Outlet/>
        </>
    )
    
}
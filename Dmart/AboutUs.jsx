import React from "react";
import { Outlet } from "react-router-dom";

export default function AboutUs(){

    return(
        <>
        <div className="Sentence">
        <p className="Quick">OVERVIEW</p>
        <p className="About-Sentence">DMart is a one-stop supermarket chain that aims to offer customers a wide range of basic home and personal products under one roof. Each DMart store stocks home utility products - including food, toiletries, beauty products, garments, kitchenware, bed and bath linen, home appliances and more - available at competitive prices that our customers appreciate. Our core objective is to offer customers good products at great value.</p>
        <p className="About-Sentence">
        DMart was started by Mr. Radhakishan Damani and his family to address the growing needs of the Indian family. From the launch of its first store in Powai in 2002, DMart today has a well-established presence in 381 locations across Maharashtra, Gujarat, Andhra Pradesh, Madhya Pradesh, Karnataka, Telangana, Chhattisgarh, NCR, Tamil Nadu, Punjab and Rajasthan. With our mission to be the lowest priced retailer in the regions we operate, our business continues to grow with new locations planned in more cities.
        </p>
        <p className="About-Sentence">The supermarket chain of DMart stores is owned and operated by Avenue Supermarts Ltd. (ASL). The company has its headquarters in Mumbai.</p>
        <p className="About-Sentence">* The brands D Mart, D Mart Minimax, D Mart Premia, D Homes, Dutch Harbour, etc are brands owned by ASL.</p>
        </div>
        <div className="Founders">
            <p className="Quick">FOUNDERS</p>
            <p className="About-Founders">
            DMart is owned and operated by Avenue Supermarts Ltd. (ASL) – a company founded by Mr. Radhakishan Damani. Mr. Radhakishan Damani is respected in the business world as an astute investor in the Indian equity market, he has built a company that constantly strives towards developing a deep understanding of customer needs and satisfying them with the right products. A firm believer in core business fundamentals and strong ethical values, Mr. Damani has built DMart into an efficient, large and profitable retail chain that is highly respected by customers, partners and employees alike.
            </p>
        </div>
        <div className="Sentence">
            <p className="Quick">MISSION</p>
            <p className="About-Sentence">At DMart, we research, identify and make available new products and categories that suit the everyday needs of the Indian family. Our mission is to provide the best value possible for our customers, so that every rupee they spend on shopping with us gives them more value for money than they would get anywhere else.</p>
        </div>
        <div className="New-Service">
            <p className="Quick">OUR CUSTOMER SERVICE PLEDGE</p>
            <p  className="About-Founders">
            At DMart, we place strong emphasis on excellence in customer service. Our employees believe in the values of Action, Care and Truth (ACT) to get the job done, with Dedication and Determination.
            </p>
            <div className="Service">
            <div className="Action">
                <p className="h-1">Action</p>
                <h6>Focus :</h6> <p className="Action-words">To be focused about what I do.</p>
                <h6>Motivated :</h6> <p className="Action-words">To be clear of achieving my goal.</p>
                <h6>Enthusiastic: </h6> <p className="Action-words">To love what I do.</p>
            </div>
            <div className="Action">
                <p className="h-1">Care</p>
                <h6>Respect :</h6> <p className="Action-words">To respect every individual in the organisation and provide her/him with the dignity and attention to make her/him believe that she/he makes a difference to the organisation.</p>
               <br /> <h6>Listen :</h6> <p className="Action-words">To listen and resolve any employee / customer grievance quickly and fairly.</p> 
            </div>
            <div className="Action">
                <p className="h-1">Truth</p>
                <h6>Integrity :</h6> <p className="Action-words">By being open, honest and fair in all our relationships and being respectful and trustful to others.</p>
            </div>
            </div>
            <p  className="About-Founders">
            We strongly believe that honesty and sincerity are critical in achieving complete customer satisfaction. We welcome individuals who share our values and believe in leading by action.
            </p>
            </div>
            <div>
                <p className="Quick">OUR REACH</p>
                <div>
                    <p className="Reach">We are present in India across 10 States, 1 Union Territory and NCR</p>
                </div>
                <div className="Our-reach">
                   <table border={1}>
                   <tr>
                    <th>Maharashtra</th>
                    <td>Amravati, Aurangabad, Dhule, Ichalkaranji, Jaisingpur, Jalgaon, Jalna, Karad, Kolhapur, Latur, Miraj, Mumbai (MMR), Nagpur, Nanded, Nandurbar, Nashik, Osmanabad, Pune, Ratnagiri, Sangli, Satara, Solapur, Wardha, Yavatmal</td>
                   </tr>
        <tr>
        <th>Gujarat</th>
        <td>Ahmedabad, Anand, Ankleshwar, Bharuch, Bhuj, Bilimora, Gandhidham, Gandhinagar, Godhra, Himatnagar, Kalol, Mahesana, Nadiad, Navsari, Palanpur, Rajkot, Surat, Surendranagar, Vadodara, Valsad, Vapi</td>
    </tr>
    <tr>
        <th>Daman</th>
        <td>Daman</td>
    </tr>
    <tr>
        <th>Telangana</th>
        <td>Hyderabad, Karimnagar, Khammam, Mancherial, Warangal</td>
    </tr>
    <tr>
        <th>Andhra Pradesh</th>
        <td>Anantapur, Bhimavaram, Eluru, Gudivada, Guntur, Kakinada, Kurnool, Machilipatnam, Nellore, Ongole, Rajahmundry, Suryapet, Tanuku, Tirupati, Tuni, Vijayawada, Visakhapatnam</td>
    </tr>
    <tr>
        <th>Karnataka</th>
        <td>Bengaluru, Belgaum, Gulbarga, Mangaluru, Tumakuru, Udupi</td>
    </tr>
    <tr>
        <th>Madhya Pradesh</th>
        <td>Bhopal, Dewas, Indore, Jabalpur, Mandsaur, Dr. Ambedkar Nagar (Mhow), Neemuch, Pithampur, Ratlam, Ujjain</td>
    </tr>
    <tr>
        <th>Chhattisgarh</th>
        <td>Bhilai, Durg, Raipur, Rajnandgaon</td>
    </tr>
    <tr>
        <th>NCR</th>
        <td>Delhi, Faridabad, Ghaziabad, Gurugram, Noida</td>
    </tr>
    <tr>
        <th>Tamil Nadu</th>
        <td>Chennai, Coimbatore, Dindigul, Erode, Hosur, Madurai, Salem, Shoolagiri, Sulur, Tiruchirappalli, Tiruppur</td>
    </tr>
    <tr>
        <th>Punjab</th>
        <td>Amritsar, Barnala, Chandigarh, Jalandhar, Ludhiana, Mandi Gobindgarh, Patiala</td>
    </tr>
    <tr>
        <th>Rajasthan</th>
        <td>Ajmer, Alwar, Bhilwara, Jaipur, Kishangarh, Kota</td>
    </tr>
                   </table>
                </div>
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
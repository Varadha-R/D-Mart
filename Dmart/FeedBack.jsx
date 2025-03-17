import React from "react";
export default function FeedBack(){

    return(
        <>
        <div>
        <p className="Quick">Feedback</p>
        </div>
        <div className="Social">
            <p className="Partner">"True perfection is a constant work-in-progress…"</p>
            <p className="Reach">We encourage all our valued customers to share their experience or concern with us.</p>
            <p className="Reach">Please fill in your feedback below and we will be in touch with you. You have the option of not identifying yourself in which case this will be processed as anonymous feedback.</p>
        </div>
        <div>
            <h4>To share your feedback, Choose who you are?</h4>
        </div>
        <div className="Feedback">
            <div className="Feedback-1">
                <img src="https://www.dmartindia.com/static/media/customer.6e22cf93.jpg" alt="Customer" width={150} height={150} />
                <p className="Feedback-nam">CUSTOMERS</p>
            </div>
            <div className="Feedback-1">
                <img src="https://www.dmartindia.com/static/media/employee.9c5140d9.jpg" alt="Employee" width={150} height={150} />
                <p className="Feedback-names">EMPLOYEES</p>
            </div>
            <div className="Feedback-1">
                <img src="https://www.dmartindia.com/static/media/management.0a0a428e.jpg" alt="Management" width={150} height={150} />
                <p className="Feedback-manage">MANAGEMENT</p>
            </div>
            <div className="Feedback-1">
                <img src="https://www.dmartindia.com/static/media/others.14fff99e.jpg" alt="Others" width={150} height={150} />
                <p className="Feedback-name">OTHERS</p>
            </div>
        </div>
        <div className="container">
        <form>
            <div className="form-group">
                <label>State</label>
                <input type="text" placeholder="Enter State"/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter Email"/>
            </div>

            <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter City"/>
            </div>
            <div className="form-group">
                <label>Address 1</label>
                <input type="text" placeholder="Enter your Address"/>
            </div>

            <div className="form-group">
                <label>Store</label>
                <select>
                    <option>Enter Store</option>
                </select>
            </div>
            <div className="form-group">
                <label>Address 2</label>
                <input type="text" placeholder="Enter your Area"/>
            </div>

            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter Name"/>
            </div>
            <div className="form-group">
                <label>Pincode</label>
                <input type="text" placeholder="Enter Pincode"/>
            </div>

            <div className="form-group">
                <label>Mobile No</label>
                <input type="tel" placeholder="Enter Mobile No"/>
            </div>
            <div className="form-group">
                <label>Comments *</label>
                <textarea placeholder="Comments"></textarea>
            </div>

            <div className="form-submit">
                <button type="submit" className="Back-btn">SUBMIT</button>
            </div>
        </form>
    </div>
    <div className="Footer">
            <p className="Footer-content">Sitemap</p>
            <p className="Footer-content">Privacy policy</p>
            <p className="Footer-content">Terms of Use</p>
            <p className="Footer-content">Investor Relations</p>
        </div>
                   
        </>
    )
}
import React from "react";

export default function PartnerUs(){

    return(
        <>
        <div>
            <p className="Quick">Partner With Us</p>
        </div>
        <div className="Social">
            <p className="Reach">Do you have a quality product that needs an audience? We at DMart believe in joining hands with the right partners in order to provide high-quality yet affordable products to our customers. We invite suppliers to join us in our endeavour to offer the best to our customers. Be a part of our esteemed list of suppliers - with whom we have successful long-term partnerships - for a commercially satisfying and profitable relationship.</p>
        <p className="Partner">We have resumed our "Tuesday Walk-ins" for all Vendors.</p>
        <p className="Reach">You may continue to fill in the below form along with your product details. Our team will get in touch with you based on requirements.</p>
       <p className="Reach"> Fields marked with * are mandatory.</p>
        </div>
        <div className="Partner-Input">
        <div class="container form-container">
    <h3>Contact Details</h3>
    <div class="row">
        <div class="col-md-6 form-group">
            <label>Name of Organisation / Company *</label>
            <input type="text" class="form-control" placeholder="Enter Name of Organisation / Company"/>
        </div>
        <div class="col-md-6 form-group">
            <label>Category *</label>
            <input type="text" class="form-control" placeholder="Enter Category"/>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-6 form-group">
            <label>Website *</label>
            <input type="url" class="form-control" placeholder="Enter Website"/>
        </div>
        <div class="col-md-6 form-group">
            <label>Goods/Services Being Offered *</label>
            <input type="text" class="form-control" placeholder="Goods/Services Being Offered"/>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 form-group">
            <label>First Name *</label>
            <input type="text" class="form-control" placeholder="Enter First Name"/>
        </div>
        <div class="col-md-6 form-group">
            <label>Pan Card *</label>
            <input type="text" class="form-control" placeholder="Pan Card"/>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 form-group">
            <label>Last Name *</label>
            <input type="text" class="form-control" placeholder="Enter Last Name"/>
        </div>
        <div class="col-md-6 form-group">
            <label>GST No. *</label>
            <input type="text" class="form-control" placeholder="Enter GST No."/>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 form-group">
            <label>Email Id *</label>
            <input type="email" class="form-control" placeholder="Enter Email Id"/>
        </div>
        <div class="col-md-6 form-group">
            <label>GST Registration Type *</label>
            <select class="form-select">
                <option>Regular</option>
                <option>Composition</option>
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 form-group">
            <label>Mobile No *</label>
            <input type="text" class="form-control" placeholder="Enter Mobile No"/>
        </div>
        <div class="col-md-6 form-group">
            <label>Period in Distributorship / Manufacturing / Import *</label>
            <input type="text" class="form-control" placeholder="Period in Distributorship / Manufacturing / Import"/>
        </div>
    </div>

    <button class="btn btn-success mt-3">Submit</button>
</div>
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
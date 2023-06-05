import React from 'react'

function Footer() {
  return (
      <>
       <div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />  
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />  
  <style dangerouslySetInnerHTML={{__html: "  \nh2 {  \npadding: 25px 0;  \ntext-align: center;  \ncolor: #fff;  \nbackground: #7c8490;  \n}  \nfooter {  \n background: rgb(9, 95, 234);  \n  color: white;  \n  margin-top:100px;  \n}  \nfooter a {  \n  color: #fff;  \n  font-size: 14px;  \n  transition-duration: 0.2s;  \n}  \nfooter a:hover {  \n  color: #FA944B;  \n  text-decoration: none;  \n}  \n.copy {  \n  font-size: 12px;  \n  padding: 10px;  \n  border-top: 1px solid #FFFFFF;  \n}  \n.footer-middle {  \n  padding-top: 2em;  \n  color: white;  \n}  \nul.social-network {  \n  list-style: none;  \n  display: inline;  \n  margin-left: 0 !important;  \n  padding: 0;  \n}  \nul.social-network li {  \n  display: inline;  \n  margin: 0 5px;  \n}  \n  \n.social-network a.icoFacebook:hover {  \n  background-color: #3B5998;  \n}  \n.social-network a.icoLinkedin:hover {  \n  background-color: #007bb7;  \n}  \n.social-network a.icoFacebook:hover i  \n{  \n  color: #fff;  \n}  \n.social-network a.icoLinkedin:hover i {  \n  color: #fff;  \n}  \n.social-network a.socialIcon:hover {  \n  color: #44BCDD;  \n}  \n.socialHoverClass {  \n  color: #44BCDD;  \n}  \n.social-circle li a {  \n  display: inline-block;  \n  position: relative;  \n  margin: 0 auto 0 auto;  \n  -moz-border-radius: 50%;  \n  -webkit-border-radius: 50%;  \n  border-radius: 50%;  \n  text-align: center;  \n  width: 30px;  \n  height: 30px;  \n  font-size: 15px;  \n}  \n.social-circle li i {  \n  margin: 0;  \n  line-height: 30px;  \n  text-align: center;  \n}  \n.social-circle li a:hover i  \n{  \n  -moz-transform: rotate(360deg);  \n  -webkit-transform: rotate(360deg);  \n  -ms--transform: rotate(360deg);  \n  transform: rotate(360deg);  \n  -webkit-transition: all 0.2s;  \n  -moz-transition: all 0.2s;  \n  -o-transition: all 0.2s;  \n  -ms-transition: all 0.2s;  \n  transition: all 0.2s;  \n}  \n.triggeredHover {  \n  -moz-transform: rotate(360deg);  \n  -webkit-transform: rotate(360deg);  \n  -ms--transform: rotate(360deg);  \n  transform: rotate(360deg);  \n  -webkit-transition: all 0.2s;  \n  -moz-transition: all 0.2s;  \n  -o-transition: all 0.2s;  \n  -ms-transition: all 0.2s;  \n  transition: all 0.2s;  \n}  \n.social-circle i {  \n  color: #595959;  \n  -webkit-transition: all 0.8s;  \n  -moz-transition: all 0.8s;  \n  -o-transition: all 0.8s;  \n  -ms-transition: all 0.8s;  \n  transition: all 0.8s;  \n}  \n.social-network a {  \n  background-color: #F9F9F9;  \n}  \n..social-network a:hover {  \nbackground: #ff304d;  \n}  \n" }} />  
  
  <footer className="mainfooter" role="contentinfo">  
    <div className="footer-middle">  
      <div className="container">  
        <div className="row">  
          <div className="col-md-3 col-sm-6">  
            <div className="footer-pad">  
              <h4> Footer Heading 1</h4>  
              <ul className="list-unstyled">  
                <li> <a href="#"> </a> </li>  
                <li> <a href="#">Payment Center</a></li>  
                <li> <a href="#"> Contact Directory </a></li>  
                <li> <a href="#">Forms</a></li>  
                <li> <a href="#">News and Updates</a></li>  
                <li> <a href="#">FAQs</a></li>  
              </ul>  
            </div>  
          </div>  
          <div className="col-md-3 col-sm-6">  
            <div className="footer-pad">  
              <h4> Footer Heading 2</h4>  
              <ul className="list-unstyled">  
                <li><a href="#"> Blog </a> </li>  
                <li><a href="#">Accessibility</a> </li>  
                <li><a href="#">Disclaimer</a></li>  
                <li><a href="#">Privacy Policy</a></li>  
                <li><a href="#">FAQs</a></li>  
                <li><a href="#">Webmaster</a></li>  
              </ul>  
            </div>  
          </div>  
          <div className="col-md-3 col-sm-6">  
            <div className="footer-pad">  
              <h4> Footer Heading 3 </h4>  
              <ul className="list-unstyled">  
                <li> <a href="#"> Parks and Recreation </a> </li>  
                <li> <a href="#"> Public Works </a> </li>  
                <li> <a href="#">Police Department</a> </li>  
                <li> <a href="#"> Fire </a> </li>  
                <li> <a href="#"> Mayor and City Council </a> </li>  
              </ul>  
            </div>  
          </div>  
          <div className="col-md-3">  
            <h4> Follow Us </h4>  
            <ul className="social-network social-circle">  
              <li> <a href="#" className="icoFacebook" title="Facebook"> <i className="fa fa-facebook"> </i> </a> </li>  
              <li> <a href="#" className="icoLinkedin" title="Linkedin"> <i className="fa fa-linkedin"> </i> </a> </li>  
              <li> <a href="#"> <i className="fa fa-youtube" aria-hidden="true"> </i> </a> </li>  
            </ul>               
          </div>  
        </div>  
        <div className="row">  
          <div className="col-md-12 copy">  
            <p className="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>  
          </div>  
        </div>  
      </div>  
    </div>
  </footer></div>
 
      </>
  )
}

export default Footer
import { useEffect } from "react";
import $ from 'jquery'
function Header() {

    useEffect(() => {
           // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

     // offcanvas script from Bootstrap + added element to close menu on click in small viewport
     $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

      }, [])

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
            
            <a className="logo-text page-scroll" href="/">MINT</a> 

            {/* <a className="navbar-brand logo-image" href="/">
                <img src="images/logo.svg" alt="alternative"/>
                </a>  */}

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                   
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#intro">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#mint-form">Mint</a>
                  </li>
                  
                  <li className="nav-item">
                      <a className="nav-link page-scroll" href="#show-case">Show Case</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#whyshouldbuy">Why Should I Buy?</a>
                </li>
                
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#roadmap">Roadmap</a>
                  </li>
                    
                 
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#meet-team">Meet the Team</a>
                  </li>
                    
                    
                </ul>
                <span className="nav-item opensea-holder">
                    <a className="btn-solid-sm page-scroll" href="sign-up.html">Buy on Opensea</a>
                </span>
            </div> 
        </div> 
    </nav> 
  );
}

export default Header;

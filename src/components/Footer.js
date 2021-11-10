
function Footer() {
  return (
      <>
    <div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-col first">
                    <h6>About MINT</h6>
                    <p className="p-small">MINT is a SaaS app website Bootstrap HTML template packed with features like logo slider, details lightbox, testimonial slider dropdown</p>
                </div> 
                <div className="footer-col second">
                    <h6>Links</h6>
                    <ul className="list-unstyled li-space-lg p-small">
                        <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                        <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
                        <li>Menu: <a className="page-scroll" href="#header">Home</a>, <a className="page-scroll" href="#intro">Intro</a>, <a className="page-scroll" href="#features">Features</a>, <a className="page-scroll" href="#details">Details</a></li>
                    </ul>
                </div> 
                <div className="footer-col third">
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-pinterest-p fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <p className="p-small">We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
                </div>
            </div>
        </div> 
    </div> 
</div> 
<div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © <a href="#your-link">Your name</a></p>
                </div>
            </div> 
        </div> 
    </div>
    </>
  );
}

export default Footer;

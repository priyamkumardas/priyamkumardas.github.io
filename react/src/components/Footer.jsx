const Footer = () => (
  <footer className="footer bg-dark text-white text-center py-4 mt-5">
    <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Kolkata
                            <br />
                            West Bengal, India
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/priyamkumardas" target="_blank"><i class="fab fa-fw fa-github"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/priyam-kumar-das/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    
                </div>
            </div>
    <div className="container">
      <small>&copy; {new Date().getFullYear()} Priyam Kumar Das. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;

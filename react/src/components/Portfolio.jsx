import mypaisa from '../assets/img/portfolio/mypaisa.jpg';
import lazot from '../assets/img/portfolio/lazot.jpg';
import cityryder from '../assets/img/portfolio/cityryder.jpg';
import evesaturn from '../assets/img/portfolio/evesaturn.jpg';
import ITD from '../assets/img/portfolio/ITD.jpg';
import poggy from '../assets/img/portfolio/poggy.jpg';
import machineSense from '../assets/img/portfolio/machine_sense.jpg';
import sambad from '../assets/img/portfolio/sambad.jpg';
import slosh from '../assets/img/portfolio/slosh.jpg';

const Portfolio = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      {/* Portfolio Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>
      {/* Portfolio Grid Items */}
      <div className="row justify-content-center">
        {/* Portfolio Item 1 */}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={mypaisa} alt="..." />
          </div>
          <div className="text-center">Investment App <span className="badge bg-primary rounded-pill">React Native</span> <span className="badge bg-primary rounded-pill">Java</span> <span className="badge bg-primary rounded-pill">Angular</span> <span className="badge bg-primary rounded-pill">Spring boot</span> <span className="badge bg-primary rounded-pill">Mysql</span></div>
          <div className="text-center">
            {/* <a  href="https://play.google.com/store/search?q=mypaisaa&c=apps&hl=en-IN" target="_blank">Play Store</a>
            <a  href="https://apps.apple.com/in/app/mypaisaa/id1538162542" target="_blank">App Store</a> */}
          </div>
        </div>
        {/* Portfolio Item 2 */}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={lazot} alt="..." />
          </div>
          <div className="text-center">Iot App <span className="badge bg-primary rounded-pill">React native</span> <span className="badge bg-primary rounded-pill">MQTT</span> <span className="badge bg-primary rounded-pill">Websocket</span></div>
          <div className="text-center">
            {/* <a  href="https://play.google.com/store/apps/details?id=com.smarthome.lazot&hl=en-IN" target="_blank">Play Store</a> */}
          </div>
        </div>
        {/* Portfolio Item 3 */}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={cityryder} alt="..." />
          </div>
          <div className="text-center">Shuttle Booking App <span className="badge bg-primary rounded-pill">React Native</span> <span className="badge bg-primary rounded-pill">Firebase</span> <span className="badge bg-primary rounded-pill">Google map APis</span> <span className="badge bg-primary rounded-pill">Codeigniter (php)</span> <span className="badge bg-primary rounded-pill">Mysql</span></div>
          {/* <div className="text-center">
            <a  href="https://play.google.com/store/apps/details?id=com.citiryder.customerapp&hl=en-IN" target="_blank">Play Store</a>
          </div> */}
        </div>
        {/* Portfolio Item 4 */}
        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={evesaturn} alt="..." />
          </div>
          <div className="text-center">Project Mangement App <span className="badge bg-primary rounded-pill">React native</span></div>
          <div className="text-center">
            {/* <a  href="https://play.google.com/store/apps/details?id=com.eve.saturn&hl=en-IN" target="_blank">Play Store</a> */}
          </div>
        </div>
        {/* Portfolio Item 5 */}
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={ITD} alt="..." />
          </div>
          <div className="text-center">Income Tax Department <span className="badge bg-primary rounded-pill">Angular</span></div>
        </div>
        {/* Portfolio Item 6 */}
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={poggy} alt="..." />
            <div className="text-center">Learning app for children <span className="badge bg-primary rounded-pill">Ionic - Angular</span></div>
          </div>
        </div>
        {/* Portfolio Item 7 */}
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={machineSense} alt="..." />
          </div>
          <div className="text-center">Iot web app <span className="badge bg-primary rounded-pill">React</span> <span className="badge bg-primary rounded-pill">Websocket</span></div>
        </div>
        {/* Portfolio Item 8 */}
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={sambad} alt="..." />
          </div>
          <div className="text-center">News web app <span className="badge bg-primary rounded-pill">PHP</span> <span className="badge bg-primary rounded-pill">Mysql</span></div>
        </div>
        {/* Portfolio Item 9 */}
        <div className="col-md-6 col-lg-4">
          <div className="portfolio-item mx-auto" >
            <img className="img-fluid" src={slosh} alt="..." />
          </div>
          <div className="text-center">Ecommerce App <span className="badge bg-primary rounded-pill">React Native</span> <span className="badge bg-primary rounded-pill">Node.js</span> <span className="badge bg-primary rounded-pill">MongoDb</span></div>
        </div>
      </div>
    </div>

  </section>
);

export default Portfolio;

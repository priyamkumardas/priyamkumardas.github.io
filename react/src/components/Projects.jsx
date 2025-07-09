import clickCode from '../assets/images/click-code.png';
import straydopt from '../assets/images/straydopt.png';
import doodleish from '../assets/images/doodleish.png';

const Projects = () => (
  <section className="page-section bg-light portfolio" id="projects">
    <div className="container">
      {/* Portfolio Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Personal Projects</h2>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>
      {/* Portfolio Grid Items */}
      <div className="row justify-content-center">
        {/* Portfolio Item 1 */}
        <div className="col-md-6 col-lg-4 mb-5" >
          <div className="portfolio-item mx-auto">
            <img className="img-fluid" src={clickCode} alt="..." />
          </div>
          <div className="text-center">
            <a href="https://marketplace.visualstudio.com/items?itemName=Priyam.click-code&ssr=false#overview" target="_blank">Market Place</a>
            {/* <a  href="https://apps.apple.com/in/app/mypaisaa/id1538162542" target="_blank">App Store</a> */}
          </div>
          <div className="text-center">
            VS Code Extension
             {/* by OpenAI and Node.js , enabling developers to receive AI-assisted code suggestions and logic explanations. Users connect via personal OpenAI API tokens; currently in early-stage development with core functionality in place */}
            <span className="badge bg-primary rounded-pill">Node js</span>
            <span className="badge bg-success rounded-pill">Live</span>
            <span className="badge bg-success rounded-pill">Build Success</span>
            <span className="badge bg-success rounded-pill">Open AI</span>
          </div>
          <div className="text-center"></div>
        </div>
        {/* Portfolio Item 2 */}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto">
            <img className="img-fluid" src={straydopt} alt="..." />
          </div>
          <div className="text-center">StrayDopt <span className="badge bg-primary rounded-pill">Angular</span> 
            <span className="badge bg-primary rounded-pill">Ionic</span> 
            <span className="badge bg-primary rounded-pill">Firebase</span>
            <span className="badge bg-warning rounded-pill">Migrating to Serveless</span>
            <span className="badge bg-primary rounded-pill">Php</span>
            <span className="badge bg-primary rounded-pill">MySQL</span>
            <span className="badge bg-danger rounded-pill">Server Down</span>
          </div>
          <div className="text-center">
            {/* <a  href="https://play.google.com/store/apps/details?id=com.smarthome.lazot&hl=en-IN" target="_blank">Play Store</a> */}
          </div>
        </div>
        {/* Portfolio Item 3 */}
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto">
            <img className="img-fluid" src={doodleish} alt="..." />
          </div>
          <div className="text-center">Blogging Website 
            <span className="badge bg-primary rounded-pill">Spring Boot</span>
            <span className="badge bg-primary rounded-pill">SQL</span>
            <span className="badge bg-danger rounded-pill">Server Down</span>
          </div>
          {/* <div className="text-center">
            <a  href="https://play.google.com/store/apps/details?id=com.citiryder.customerapp&hl=en-IN" target="_blank">Play Store</a>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

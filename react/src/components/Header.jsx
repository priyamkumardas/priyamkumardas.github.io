
import avatar from '../assets/images/image1.jpg';

const Header = () => (
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      {/* Masthead Avatar Image */}
      <img className="masthead-avatar mb-5 rounded-circle" src={avatar} alt="..." />
      {/* Masthead Heading */}
      <h1 className="masthead-heading text-uppercase mb-0">Priyam Kumar Das</h1>
      {/* Icon Divider */}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>
      {/* Masthead Subheading */}
      <p className="masthead-subheading font-weight-light mb-0">FullStack Developer - Mobile Developer</p>
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a className="btn btn-outline-light btn-social mx-1" href="PriyamKumarDas.pdf" target="_blank"><i className="fa fa-fw fa-file"></i></a>
        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/priyamkumardas" target="_blank"><i className="fab fa-fw fa-github"></i></a>
        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/priyam-kumar-das/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
      </div>
    </div>
  </header>
);

export default Header;

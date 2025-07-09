import about1 from '../assets/img/about/1.jpg';
import about2 from '../assets/img/about/2.jpg';
import about3 from '../assets/img/about/3.jpg';
import about4 from '../assets/img/about/4.jpg';

const Timeline = () => (
  <section className="page-section" id="timeline">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">TimeLine</h2>
        <h3 className="section-subheading text-muted"></h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about1} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2019-2020</h4>
              <h4 className="subheading">Sketch Web Solution</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Worked as Fulltack Developer with Codeignitor and SSR.</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about2} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2020 (StrayDopt) </h4>
              <h4 className="subheading">Founding Engineer</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Worked on StrayDopt and other multiple projects as a Freelancer.</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about3} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Aug 2021 - Jan 2021</h4>
              <h4 className="subheading">Zreyas Technology</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Worked on an IOT project till Nov 2021 and then the offere was extended as a subcontractor till Jan 2021</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about4} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Feb 2022- Sept 2023</h4>
              <h4 className="subheading">Sarvm.ai</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Led the app Development of 3 apps having more than 1000 Daily users, worked on different modules to optimise them.</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about3} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Sept 2023 - Apr 2024</h4>
              <h4 className="subheading">Freelancing</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Led frontend refactoring as a contract developer with Infosys,on the Income Tax Department Project</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={about4} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>May 2022- Present</h4>
              <h4 className="subheading">Simplify3x</h4>
            </div>
            <div className="timeline-body"><p className="text-muted"> Working as SSE with AI and Textract. Using llama3 llm and textract (OCR) for pre proccesing meta datas. </p></div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Timeline;

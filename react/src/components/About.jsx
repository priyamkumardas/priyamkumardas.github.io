const About = () => (
  <section class="page-section  text-secondary mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary">About</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-12 ms-auto"><p class="lead">I am a software engineer with 6+ years of experience in the tech industry. I am passionate about building high-quality, user-friendly software applications. I am a Problem solver. I have a strong understanding of the full software development lifecycle ( SDLC ), from requirements gathering and design to development, testing, and deployment.</p></div>
                    <div class="col-lg-12 me-auto">
                        <h5 class=" text-center text-uppercase text-secondary">Skills</h5>
                        {/* <!-- <p class="lead">Skills</br> --> */}
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Programming Languages:
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group ">
                                                <li class="list-group-item list-group-item-secondary">JavaScript</li>
                                                <li class="list-group-item list-group-item-secondary">TypeScript</li>
                                                <li class="list-group-item list-group-item-secondary">Java</li>
                                            
                                            </ul>
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Frontend
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-secondary">Angular</li>
                                                <li class="list-group-item list-group-item-secondary">React</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Backend
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-secondary">(Express)Node.js</li>
                                                <li class="list-group-item list-group-item-secondary">Spring Boot</li>
                                                <li class="list-group-item list-group-item-secondary">Codeigniter (PHP)</li>
                                                <li class="list-group-item list-group-item-secondary">Lamda</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Database
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-secondary">MySQL</li>
                                                <li class="list-group-item list-group-item-secondary">PostgreSQL</li>
                                                <li class="list-group-item list-group-item-secondary">MongoDB</li>
                                                <li class="list-group-item list-group-item-secondary">Firestore</li>
                                                <li class="list-group-item list-group-item-secondary">Redis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Mobile Application
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-secondary">Ionic (Capacitor/Cordova)</li>
                                                <li class="list-group-item list-group-item-secondary">React Native</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-secondary bg-transparent mb-3">
                                        <div class="card-header">
                                            Others
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-secondary">Kafka</li>
                                                <li class="list-group-item list-group-item-secondary">AWS</li>
                                                <li class="list-group-item list-group-item-secondary">Docker</li>
                                                <li class="list-group-item list-group-item-secondary">Unit Testing</li>
                                                <li class="list-group-item list-group-item-secondary">AWS ECS, AWS ECR</li>
                                                <li class="list-group-item list-group-item-secondary">AWS Textract (OCR)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                    </div>
                </div>
                {/* <!-- About Section Button--> */}
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-secondary" target="_blank" href="PriyamKumarDas.pdf">
                        <i class="fas fa-download me-2"></i>
                        Resume
                    </a>
                </div>
            </div>
        </section>
);

export default About;

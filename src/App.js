import { Header } from './components';
import './App.css'

function App() {
  return (
    <article class="cv-container">
      <section class="cv-container-left">
        {/* <section class="cv-title">
          <div class="cv-title-img">
            <img src="images/cv-picture.jpg" alt="face" />
          </div>
          <div class="cv-title-name">
            <h2 class="prifile-name">Krasen Dimitrov</h2>
          </div>
        </section> */}
        <Header />

        <section class="cv-profile">
          <h3 class="main-titles">Profile</h3>
          <p>
            Motivated and analytical technical professional with a bachelor's
            degree in power supply and electrical equipment in industry.
            Possesses excellent computer skills and enjoys working
            collaboratively to solve complex problems. Has experience working
            with customers and pays attention to detail.
          </p>
        </section>


        <section class="cv-education">
          <h3 class="main-titles">Education</h3>
          <article class="cv-eployment-details">
            <h4 class="secondary-titles">Bachelor's degree, Power supply and electrical equipment in industry,
              Technical University of Varna, Varna</h4>
            <div class="cv-eployment-period">
              <span>SEPTEMBER 2009 - JUNE 2013</span>
            </div>
          </article>
        </section>


        <section class="cv-eployment-history">
          <h3 class="main-titles">Eployment History</h3>

          <article class="cv-eployment-details">
            <h4 class="secondary-titles">Computer systems technician, in Tempus2000, Varna

            </h4>
            <div class="cv-eployment-period">
              <span>may - 2023</span>
            </div>
            <p>
              Full printer maintenance, including software installation, part replacement, and
              sourcing necessary components.
              Diagnosing and resolving technical issues to optimize printer functionality and customer
              satisfaction.
            </p>
          </article>

          <article class="cv-eployment-details">
            <h4 class="secondary-titles">Technical contractor - Construction and maintenance of Internet and TV
              network, Top Net, Varna</h4>
            <div class="cv-eployment-period">
              <span>october - 2021 - april 2023</span>
            </div>
            <p>
              Installed internet and networking equipment in clients' homes and
              businesses. Performed full maintenance of the physical part of the
              network.Troubleshot and resolved connectivity issues, ensuring that
              customers received optimal service.
            </p>
          </article>

          <article class="cv-eployment-details">
            <h4 class="secondary-titles">Office Administrator, Econt, Varna</h4>
            <div class="cv-eployment-period">
              <span>JANUARY 2019 - OCTOBER 2021</span>
            </div>
            <p>
              Responsibility related to the correct execution in the transportation of shipments, as well as
              the receipt and delivery of money transfers. Work mainly with customers. Material and financial
              responsibility.
            </p>
          </article>

          <article class="cv-eployment-details">
            <h4 class="secondary-titles">Technical contractor - Construction and maintenance of Internet and TV
              network, Telecomunication Company Varna, Varna</h4>
            <div class="cv-eployment-period">
              <span>NOVEMBER 2015 - DECEMBER 2018</span>
            </div>
            <p>
              Construction and maintenance of an Internet and TV transmission of a network.
            </p>
          </article>
        </section>


      </section>
      <section class="cv-container-right">

        <section class="cv-details">
          <h3 class="main-titles">Details</h3>
          <div class="cv-details-paragraphs">
            <p>
              Varna
            </p>
          </div>
          <div class="cv-details-paragraphs">
            <p>
              Bulgaria
            </p>
          </div>
          <div class="cv-details-paragraphs">
            <p>
              0897 865 012
            </p>
          </div>
          <div class="cv-details-paragraphs">
            <p>
              krasen.dimitrov.vn@gmail.com
            </p>
          </div>
        </section>

        <section class="cv-details skills">
          <h3 class="main-titles">Driver license</h3>
          <div class="cv-details-paragraphs">
            <p>B</p>
          </div>
        </section>

        <section class="cv-details skills">
          <h3 class="main-titles">Languages</h3>
          <div class="cv-details-paragraphs">
            <p>Bulgarian</p>
          </div>
          <div class="cv-details-bars">
            <div class="progress-bar" style={{"width": "100%"}}></div>
          </div>
          <div class="cv-details-paragraphs">
            <p>English</p>
          </div>
          <div class="cv-details-bars">
            <div class="progress-bar" style={{"width": "50%"}}></div>
          </div>
        </section>

        <section class="cv-details skills">
          <h3 class="main-titles">Hobbies</h3>
          <div class="cv-details-paragraphs">
            <p>Mountain climbing</p>
          </div>
          <div class="cv-details-paragraphs">
            <p>Music</p>
          </div>
          <div class="cv-details-paragraphs">
            <p>Puzzle games</p>
          </div>
        </section>


      </section>
    </article>
  );
}

export default App;
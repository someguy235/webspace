const Contact = () => {
  return (
    <div id="cv-header-section">
      <div className="cv-banner">
        <div className="cv-name">Ethan Shepherd</div>
        <div className="cv-tagline">Full Stack Java/JavaScript Developer</div>
      </div>
      <div className="cv-contact-info">
        <div className="cv-phone">(828) 242 0036</div>
        <div className="cv-email">ethan.m.shepherd@gmail.com</div>
        <div className="cv-website">ethanshepherd.com</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="cv-skills-section">
      <div className="cv-section-header">SKILLS</div>
      <div className="cv-skills-content">
        <div className="cv-skills-title">Languages</div>
        <div className="cv-skills-list">
          <span className="cv-skills-tier">Primary</span>: Java, JavaScript{" "}
          <span className="cv-skills-tier">Secondary</span>: Groovy, Python, C
        </div>
        <div className="cv-skills-title">Frameworks/Libraries</div>
        <div className="cv-skills-list">
          Spring/Boot, React, AngularJS, D3JS, jQuery, Selenium
        </div>
        <div className="cv-skills-title">Other</div>
        <div className="cv-skills-list">
          Oracle, MongoDB, MySQL, Git/SVN, Linux
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="cv-exp-section">
      <div className="cv-section-header">EXPERIENCE</div>
      <div className="cv-exp-position">
        <div className="cv-exp-header">
          <div className="cv-exp-employer">
            National Centers for Environmental Information
          </div>
          <div className="cv-exp-dates">June 2012 - Present</div>
          <div className="cv-exp-title">
            Web/Applications Engineer - Station Metadata/Paleoclimatology Teams
          </div>
          <div className="cv-exp-location">Asheville, NC</div>
        </div>
        <div className="cv-exp-summary">
          Design and create Java/JavaScript web applications, REST web services,
          visualizations, and Groovy server- side applications to ingest and
          access ground station and paleoclimatology metadata.
        </div>
        <ul className="cv-exp-highlights">
          <li>
            <span className="cv-exp-highlight-title">
              <a
                href="https://www.ncei.noaa.gov/access/paleo-search/"
                target="_blank"
                rel="noreferrer"
              >
                Paleo DIVER
              </a>{" "}
              [Java, Spring, iBatis, AngularJS, D3JS, ArcGIS API]
            </span>
            : Paleoclimatology data search, access, and download via web UI or
            RESTful API.
          </li>
          <li>
            <span className="cv-exp-highlight-title">
              <a
                href="https://www.ncei.noaa.gov/access/homr/"
                target="_blank"
                rel="noreferrer"
              >
                HOMR
              </a>{" "}
              [Java, Spring, iBatis, jQuery, D3JS]
            </span>
            : Access ground station history data via dynamic web UI or RESTful
            API.
          </li>
          <li>
            <span className="cv-exp-highlight-title">
              Metadata Ingest [Groovy]
            </span>
            : Modular and configurable ETL system to retrieve and integrate
            station history data from a variety of sources.
          </li>
          <li>
            <span className="cv-exp-highlight-title">
              <a
                href="https://www.ncei.noaa.gov/access/us-climate-normals/"
                target="_blank"
                rel="noreferrer"
              >
                Normals
              </a>{" "}
              and{" "}
              <a
                href="https://www.ncei.noaa.gov/access/climateatlas/"
                target="_blank"
                rel="noreferrer"
              >
                Climate Atlas
              </a>{" "}
              [React, jQuery]
            </span>
            : Visualization and access tools.
          </li>
        </ul>
      </div>

      <div className="cv-exp-position">
        <div className="cv-exp-header">
          <div className="cv-exp-employer">National Climatic Data Center</div>
          <div className="cv-exp-dates">November 2009 - June 2012</div>
          <div className="cv-exp-title">
            Scientific Programmer - Remote Sensing Division
          </div>
          <div className="cv-exp-location">Asheville, NC</div>
        </div>
        <div className="cv-exp-summary">
          C and Fortran scientific data application maintenance, and transition
          to operations. Java/Spring web application maintenance and
          development.
        </div>
        <ul className="cv-exp-highlights">
          <li>
            <span className="cv-exp-highlight-title">
              NOAA Climate Data Records [C, Fortran]
            </span>
            : Refactored scientific data applications from research to
            operations. Required coding for portability and ease of use,
            standardizing output, and creating documentation.
          </li>
        </ul>
      </div>

      <div className="cv-exp-position">
        <div className="cv-exp-header">
          <div className="cv-exp-employer">National Climatic Data Center</div>
          <div className="cv-exp-dates">February 2008 - November 2009</div>
          <div className="cv-exp-title">
            Web Applications Developer - Climate Model Access Team
          </div>
          <div className="cv-exp-location">Asheville, NC</div>
        </div>
        <div className="cv-exp-summary">
          Web application development and maintenance using JSP, Java Servlets,
          Perl/CGI, and PHP. Installation and maintenance of various specialized
          data access servers and applications in RHEL 5.
        </div>
        <ul className="cv-exp-highlights">
          <li>
            <span className="cv-exp-highlight-title">
              BitTorrent [Linux, Python]
            </span>
            : Initiated the use of BitTorrent at NCDC. Proposal to management,
            software evaluation, performance testing, and writing operational
            scripts. Presented results at the 2009 American Geophysical Union
            annual meeting.
          </li>
        </ul>
      </div>

      <div className="cv-exp-position">
        <div className="cv-exp-header">
          <div className="cv-exp-employer">Personal Projects</div>
          <div className="cv-exp-dates">
            <a
              href="http://github.com/someguy235/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <ul className="cv-exp-highlights">
          <li>
            <span className="cv-exp-highlight-title">
              [Groovy/Grails, Java, JavaScript (React, jQuery, AngularJS, D3JS,
              NodeJS), Python, Android, Mongodb]
            </span>
            : Various web and Android hobby projects. Set list matcher, habit
            tracker, eclipse traffic viz, etc.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div id="cv-edu-section">
      <div className="cv-section-header">EDUCATION</div>
      <div className="cv-edu-entry">
        <div className="cv-edu-institution">
          Georgia Institute of Technology
        </div>
        <div className="cv-edu-dates">2014-2016</div>
        <div className="cv-edu-degree">
          M.S. in Computer Science (spec: Computing Systems)
        </div>
      </div>
      <div className="cv-edu-entry">
        <div className="cv-edu-institution">
          University of North Carolina, Asheville
        </div>
        <div className="cv-edu-dates">2005-2007</div>
        <div className="cv-edu-degree">B.S. in Computer Science</div>
      </div>
    </div>
  );
};

const Pubs = () => {
  return (
    <section id="cv-pubs-section">
      <div className="cv-section-header">PUBLICATIONS</div>
      <ul>
        <li>
          Morrill, C., Thrasher, B., Lockshin, S. N., Gille, E. P., McNeill, S.,
          Shepherd, E., et al. (2021). The paleoenvironmental standard terms
          (PaST) thesaurus: Standardizing heterogeneous variables in
          paleoscience.{" "}
          <span className="journal">Paleoceanography and Paleoclimatology</span>
          , 36, e2020PA004193.{" "}
          <a
            href="https://doi.org/10.1029/2020PA004193"
            target="_blank"
            rel="noreferrer"
          >
            https://doi.org/10.1029/2020PA004193
          </a>
        </li>
        <li>
          Bilotta, R., Bell, J. E., Shepherd, E., & Arguez, A. (2015).
          Calculation and Evaluation of an Air-Freezing Index for the 1981–2010
          Climate Normals Period in the Coterminous United States,{" "}
          <span className="journal">
            Journal of Applied Meteorology and Climatology
          </span>
          , 54(1), 69-76.{" "}
          <a
            href="https://doi.org/10.1175/jamc-d-14-0119.1"
            target="_blank"
            rel="noreferrer"
          >
            https://doi.org/10.1175/jamc-d-14-0119.1
          </a>
        </li>
        <li>
          Shepherd, E. (2009, Dec). Using BitTorrent for Large Scale Data
          Distribution. Paper presented at the 2009 meeting of the American
          Geophysical Union, San Francisco.
        </li>
      </ul>
    </section>
  );
};
const CV = () => {
  return (
    <div id="cv-section">
      <Contact />
      <Skills />
      <Experience />
      <Education />
      <Pubs />
    </div>
  );
};
export default CV;

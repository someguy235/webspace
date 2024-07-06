import github_logo from "../img/logos/github.png";
import linkedin_logo from "../img/logos/linkedin.png";
import stack_logo from "../img/logos/stackoverflow.png";
import profile from "../img/profile-3.jpg";

type AboutProps = {
  mode: string;
};
const About = ({ mode }: AboutProps) => {
  return (
    <section id="about-section">
      <img
        id="self-portrait"
        src={profile}
        title="Holmstead Ranch"
        alt="self portrait"
      />
      <p>
        Hi, I&apos;m Ethan Shepherd, a full-stack Java/JavaScript developer
        building web and science data applications in fabulous Las Vegas, NV.
        I&apos;ve worked on everything from satellite data products using C and
        Fortran, to Spring MVC apps on Oracle, to SPAs with Node, Mongo,
        Angular, and React.
      </p>
      <p>
        I&apos;m currently focussed on making scientific data accessible and
        usable through powerful, intuitive user interfaces, visualizations, and
        APIs. In pursuit of this, I&apos;ve been involved with each of the major
        data sources of climate research: first helping modernize climate model
        distribution with tools like BitTorrent, then working to operationalize
        authoritative remote sensing-based Climate Data Records, building ingest
        and access tools for <span className="italic">in situ</span> sensor
        networks, and finally building web applications and processing tools for
        paleoclimatological data.
      </p>
      <p>
        When I&apos;m not coding for fun or profit, you can catch me running in
        the early morning to beat the Nevada heat, or hiking around the desert
        Southwest.
      </p>
      <div id="about-contact-container">
        <div id="about-contact">
          <a href="mailto:ethan.m.shepherd@gmail.com">
            ethan.m.shepherd@gmail.com
          </a>
        </div>
      </div>
      <div id="about-badges-container">
        <div id="about-badges">
          <a
            href="https://github.com/someguy235"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github_logo}
              alt="github logo"
              width="48px"
              height="62px"
            />
          </a>
          {/* <a
            href="http://stackoverflow.com/users/90276/ethan-shepherd"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={stack_logo}
              alt="stack overflow logo"
              width="48px"
              height="62px"
            />
          </a> */}
          <a
            href="http://www.linkedin.com/pub/ethan-shepherd/13/629/135"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin_logo}
              alt="linkedin logo"
              width="48px"
              height="62px"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

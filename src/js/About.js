import github_logo from "../img/logos/github.png";
import linkedin_logo from "../img/logos/linkedin.png";
import stack_logo from "../img/logos/stackoverflow.png";
import profile from "../img/profile-2.jpg";

const About = () => {
  return (
    <section id="about-section">
      <img
        id="self-portrait"
        src={profile}
        title="Holmstead Ranch"
        alt="self portrait"
      />
      <p>
        Hi, I&apos;m Ethan Shepherd, a developer building web and science data
        applications in Las Vegas, NV. I&apos;ve worked on everything from
        satellite data products using C and Fortran, to Spring MVC apps on
        Oracle, to SPAs with Node, Angular, and React. This page is a collection
        of some of the things I&apos;ve built, either for my job or to learn
        something new.
      </p>
      <p>
        Full stack Java/JavaScript web developer, working primarily in Spring
        and React. Focused on making scientific data accessible and usable
        through powerful, intuitive user interfaces, visualizations, and APIs.
        In pursuit of this, I&apos;ve been involved with each of the major data
        sources of climate research: first helping modernize climate model
        distribution with tools like BitTorrent, then working to operationalize
        authoritative satellite-based Climate Data Records, and finally building
        web applications and data tools for in situ and paleoclimatological
        data.
      </p>
      <div id="about-contact-container">
        <div id="about-contact">
          {/* <a href="Shepherd - Resume.pdf">CV</a> */}
          <a href="mailto:ethan.m.shepherd@gmail.com">
            ethan.m.shepherd@gmail.com
          </a>
        </div>
      </div>
      <div id="about-badges-container">
        <div id="about-badges">
          <a href="https://github.com/someguy235">
            <img src={github_logo} alt="github logo" />
          </a>
          <a href="http://stackoverflow.com/users/90276/ethan-shepherd">
            <img src={stack_logo} alt="stack overflow logo" />
          </a>
          <a href="http://www.linkedin.com/pub/ethan-shepherd/13/629/135">
            <img src={linkedin_logo} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

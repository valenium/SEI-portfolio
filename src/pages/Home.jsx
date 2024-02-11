import "./Home.css";
import Pill from "../components/Pill";
import Scroller from "../components/Scroller";
import Icon from "../components/Icons";

function Home(props) {
  const roles = [
    "Software Development",
    "Product Management",
    "Project Management",
    "CyberSecurity",
    "Operations",
  ];

  return (
    <section>
      <div className="home-page pt-8">
        <div className="col-span-2">
          <h1 className="text-pink-200 font-bebas text-9xl text-center">
            Valerie Lim
          </h1>
          <h2 className="text-white text-4xl text-center font-bebas">
            Full Stack Engineer & Product Manager
          </h2>
        </div>

        <div>
          <img src="/src/assets/me.png" alt="Animated photo of Valerie" />
        </div>

        <div className="flex justify-center flex-col pr-10">
          <Scroller texts={roles} />
        </div>
      </div>

      <div className="skills-flex mb-16">
        <section className="box skills">
          <div className="stack">
            <div className="skill-header">
              <Icon
                icon="code"
                color="var(--accent-regular)"
                size="2.5rem"
                gradient
              />
              <h2 className="font-oxygen font-semibold">Languages</h2>
            </div>

            <div className="icons">
              <span>
                <Icon
                  icon="python"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
              <span>
                <Icon
                  icon="js"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
              <span>
                <Icon
                  icon="html"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
              <span>
                <Icon
                  icon="css"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
              <span>
                <Icon
                  icon="sql"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
              <span>
                <Icon
                  icon="json"
                  color="var(--accent-regular)"
                  size="8rem"
                  gradient
                />
              </span>
            </div>
          </div>
          </section>

          <section className="box skills">
            <div className="stack">
              <div className="skill-header">
                <Icon
                  icon="layout"
                  color="var(--accent-regular)"
                  size="2.5rem"
                  gradient
                />
                <h2 className="font-oxygen font-semibold">Frameworks</h2>
              </div>
              <div className="icons">
                <span>
                  <Icon
                    icon="react"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="express"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="django"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="jquery"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="vue"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="bootstrap"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="tailwind"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
              </div>
            </div>
          </section>

          <section className="box skills">
            <div className="stack">
              <div className="skill-header">
                <Icon
                  icon="strategy"
                  color="var(--accent-regular)"
                  size="2.5rem"
                  gradient
                />
                <h2 className="font-oxygen font-semibold">CRM and Agile</h2>
              </div>
              <div className="icons">
                <span>
                  <Icon
                    icon="jira"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="confluence"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="gsuite"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
              </div>
            </div>
          </section>

          <section className="box skills">
            <div className="stack">
              <div className="skill-header">
                <Icon
                  icon="data"
                  color="var(--accent-regular)"
                  size="2.5rem"
                  gradient
                />
                <h2 className="font-oxygen font-semibold">Databases</h2>
              </div>

              <div className="icons">
                <span>
                  <Icon
                    icon="postgresql"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
                <span>
                  <Icon
                    icon="mongo"
                    color="var(--accent-regular)"
                    size="8rem"
                    gradient
                  />
                </span>
              </div>
            </div>
          </section>

          </div>
    </section>
  );
}

export default Home;

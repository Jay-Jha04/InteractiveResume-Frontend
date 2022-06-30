import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { HOMEPAGEHEADING } from "../../../resources/homePage";
import { getSkills } from "../../../services/skill";
import ExperiencesSection from "./helpers/experiencesSection";
import SkillsSection from "./helpers/skillsSection";

const Home = () => {
  const [profile] = useOutletContext();
  const [skills, setSkills] = useState({});
  const [experiences, setExperiences] = useState([]);
  const { about_yourself } = profile;

  useEffect(() => {
    async function fetchData() {
      const res = await getSkills();
      const { experiences } = profile;
      setExperiences(experiences);
      setSkills(res);
    }
    fetchData();
  }, []);

  return (
    <>
      {Object.keys(skills).length > 0 && experiences.length > 0 && (
        <>
          <div className="card card-body bg-primary text-white py-5">
            <h2>{HOMEPAGEHEADING}</h2>
            <p className="lead">{about_yourself}</p>
          </div>
          <ExperiencesSection experiences={experiences} />

          <SkillsSection skills={skills} />
        </>
      )}
    </>
  );
};

export default Home;

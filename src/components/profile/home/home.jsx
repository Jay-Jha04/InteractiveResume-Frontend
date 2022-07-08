import { useOutletContext } from "react-router-dom";
import { HOMEPAGEHEADING } from "../../../resources/homePage";
import ExperiencesSection from "./helpers/experiencesSection";
import SkillsSection from "./helpers/skillsSection";

const Home = () => {
  const [profile] = useOutletContext();
  const { experiences, skills, about_yourself } = profile;

  return (
    <>
      <div className="card card-body bg-primary text-white py-5">
        <h2>{HOMEPAGEHEADING}</h2>
        <p className="lead">{about_yourself}</p>
      </div>
      {experiences.length > 0 && (
        <ExperiencesSection experiences={experiences} />
      )}
      {skills.length > 0 && <SkillsSection skills={skills} />}
    </>
  );
};

export default Home;

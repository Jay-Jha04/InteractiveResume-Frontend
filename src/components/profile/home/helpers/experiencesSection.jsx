import { useState } from "react";
import { useEffect } from "react";
import {
  COMPANY_DESCRIPTIONS,
  COMPANYDURATION,
  STARTDATE_TO_ENDDATE,
  EXPERIENCES,
} from "../../../../resources/homePage";

const ExperiencesSection = ({ experiences }) => {
  const [initialExperience, setInitialExperience] = useState({});

  useEffect(() => {
    setInitialExperience(experiences[0]);
  }, []);

  const handleClick = (e, experienceId) => {
    e.preventDefault();
    const exp = experiences.filter(
      (experience) => experience._id === experienceId
    );
    setInitialExperience(exp[0]);
  };

  const getExperienceButtonClasses = (experienceId) => {
    const isActive = initialExperience._id === experienceId;
    const classes = "list-group-item list-group-item-action";
    return isActive ? classes + " active" : classes;
  };

  return (
    <>
      {Object.keys(initialExperience).length > 0 && (
        <section id="experiences-section" className="card card-body py-3">
          <h3>{EXPERIENCES}</h3>
          <hr />
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {experiences.map(({ _id, company, profile_headline }) => (
                  <button
                    key={_id}
                    id={_id}
                    className={getExperienceButtonClasses(_id)}
                    onClick={(e) => handleClick(e, _id)}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{company.name}</h5>
                      <small>{COMPANYDURATION(company)}</small>
                    </div>
                    <p className="mb-1">{profile_headline}</p>
                    <small>{STARTDATE_TO_ENDDATE(company)}</small>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-7">
              {COMPANY_DESCRIPTIONS(initialExperience)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ExperiencesSection;

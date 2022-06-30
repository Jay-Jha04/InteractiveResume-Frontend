import {
  displayCompanyDuration,
  displayCompanyTimePeriod,
} from "../../resources/homePage";

const RenderButton = ({
  experience,
  onExperienceButtonClick,
  initialExperience,
}) => {
  const { _id, company, profile_headline } = experience;

  const getExperienceButtonClasses = (experienceId) => {
    const isActive = initialExperience._id === experienceId;
    const classes = "list-group-item list-group-item-action";
    return isActive ? classes + " active" : classes;
  };

  return;
  // <button
  //   id={_id}
  //   className={getExperienceButtonClasses(_id)}
  //   onClick={(e)=>onExperienceButtonClick(e, _id)}
  // >
  //   <div className="d-flex w-100 justify-content-between">
  //     <h5 className="mb-1">{company.name}</h5>
  //     <small>{displayCompanyDuration(company)}</small>
  //   </div>
  //   <p className="mb-1">{profile_headline}</p>
  //   <small>{displayCompanyTimePeriod(company)}</small>
  // </button>
};

export default RenderButton;

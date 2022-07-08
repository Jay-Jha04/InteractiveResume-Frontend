import calcDiffInYearsMonths from "../utills/calcDiffInYearsMonths";
import captilizeString from "../utills/captilizeString";

export const HOMEPAGEHEADING = "Welcome To My Page";
export const EXPERIENCES = "Experiences";
export const EXPERIENCE = "Experience";
export const YEARS = "years";
export const MYSKILLS = "My Skills";
export const SKILLSSECTIONDESCRIPTION = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Delectus ea excepturi officia quisquam atque eos.`;

export const COMPANY_DESCRIPTIONS = (initialExperience) => {
  return `I am working ${initialExperience.employement_type}
    ${initialExperience.title} in ${initialExperience.company.name} from
      ${initialExperience.company.start_date} ${initialExperience.description}`;
};

export const STARTDATE_TO_ENDDATE = ({ start_date, end_date }) => {
  return `${start_date} - ${captilizeString(end_date)}`;
};

export const COMPANYDURATION = ({ start_date, end_date }) => {
  start_date = new Date(start_date);
  end_date = end_date === "present" ? new Date() : new Date(end_date);
  const { years, months } = calcDiffInYearsMonths(start_date, end_date);

  return `${years} years ${months} months`;
};

import calcDiffInYearsMonths from "../utills/calcDiffInYearsMonths";

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
      ${initialExperience.company.start_date}`;
};

export const STARTDATE_TO_ENDDATE = ({ start_date, end_date }) => {
  start_date = new Date(start_date);
  const start_month = start_date.toLocaleString("default", { month: "short" });
  const start_year = start_date.getFullYear();

  if (end_date === null) {
    return `${start_year} ${start_month} - Present`;
  }

  end_date = new Date(end_date);
  const end_month = end_date.toLocaleString("default", { month: "short" });
  const end_year = end_date.getFullYear();

  return `${start_year} ${start_month} - ${end_year} ${end_month}`;
};

export const COMPANYDURATION = ({ start_date, end_date }) => {
  start_date = new Date(start_date);
  end_date = end_date === null ? new Date() : new Date(end_date);
  const { years, months } = calcDiffInYearsMonths(start_date, end_date);

  return `${years} years ${months} months`;
};

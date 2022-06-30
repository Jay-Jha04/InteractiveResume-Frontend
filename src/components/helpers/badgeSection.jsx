import { EXPERIENCE, YEARS } from "../../resources/homePage";
import Badge from "../common/badge";

const BadgeSection = ({ experience }) => {
  const text = `${experience} ${YEARS} ${EXPERIENCE}`;

  return <Badge text={text} />;
};

export default BadgeSection;

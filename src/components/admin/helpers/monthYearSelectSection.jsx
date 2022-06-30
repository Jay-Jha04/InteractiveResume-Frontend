import { InfoCircleFilled } from "@ant-design/icons";
import Select from "../../common/select";

const MonthYearSelectSection = ({
  label,
  pointerEventAndOpacity,
  monthName,
  monthValue,
  yearName,
  error,
  yearValue,
  onChange,
}) => {
  const months = [
    { value: "Month" },
    { id: "Jan", value: "January" },
    { id: "Feb", value: "Febuary" },
    { id: "Mar", value: "March" },
    { id: "Apr", value: "April" },
    { id: "May", value: "May" },
    { id: "Jun", value: "June" },
    { id: "Jul", value: "July" },
    { id: "Aug", value: "August" },
    { id: "Sept", value: "September" },
    { id: "Oct", value: "October" },
    { id: "Nov", value: "November" },
    { id: "Dec", value: "December" },
  ];

  const startingYear = 1984;
  const currentYear = new Date().getFullYear();
  const years = [{ value: "Year" }];

  for (let i = 0; i <= currentYear - startingYear; i++) {
    const year = startingYear + i;
    years.push({ id: year, value: `${year}` });
  }

  return (
    <div className={`form-group mt-2 mb-3 ${pointerEventAndOpacity}`}>
      <label>{label}</label>
      <div className="row">
        <div className="col-sm-6">
          <Select
            options={months}
            name={monthName}
            value={monthValue}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-6">
          <Select
            options={years}
            name={yearName}
            value={yearValue}
            onChange={onChange}
          />
        </div>
      </div>
      {error && (
        <p className="text-danger mt-2">
          <InfoCircleFilled
            style={{
              fontSize: "1.3rem",
              marginRight: "0.3rem",
              verticalAlign: "middle",
            }}
          />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default MonthYearSelectSection;

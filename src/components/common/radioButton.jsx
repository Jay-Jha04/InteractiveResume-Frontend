import { InfoCircleFilled } from "@ant-design/icons";

const RadioButton = ({ options, vertical, error, ...rest }) => {
  const classes = vertical ? "form-check" : "form-check form-check-inline";

  return (
    <>
      {options.map((option) => (
        <div key={option.id} className={classes}>
          <input
            className="form-check-input"
            type="radio"
            id={option.id}
            value={option.value}
            {...rest}
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
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
    </>
  );
};

export default RadioButton;

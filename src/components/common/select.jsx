import { InfoCircleFilled } from "@ant-design/icons";

const Select = ({ options, error, ...rest }) => {
  return (
    <>
      <select className="form-select" {...rest}>
        {options.map((option) => {
          if (!option.id) {
            return (
              <option key={option.value} value="">
                {option.value}
              </option>
            );
          }
          return (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
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

export default Select;

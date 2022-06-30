import { InfoCircleFilled } from "@ant-design/icons";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...rest} className="form-control" />
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

export default Input;

import { InfoCircleFilled } from "@ant-design/icons";

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <div className="mt-2 mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        {...rest}
      ></textarea>
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

export default TextArea;

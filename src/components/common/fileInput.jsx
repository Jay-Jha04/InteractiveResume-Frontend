import { InfoCircleFilled } from "@ant-design/icons";

const FileInput = ({
  onClick,
  btnName,
  error,
  imageIds,
  color = "success",
  ...rest
}) => {
  return (
    <div className="form-group mt-2 mb-3">
      <div className="input-group">
        <input
          type="file"
          className="form-control"
          aria-label="Upload"
          multiple
          {...rest}
        />
        <button
          name={btnName}
          onClick={onClick}
          className={`btn btn-outline-${color}`}
          type="button"
        >
          Upload
        </button>
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
      {imageIds?.length > 0 && (
        <p className={`text-${color} mt-2`}>
          <InfoCircleFilled
            style={{
              fontSize: "1.3rem",
              marginRight: "0.3rem",
              verticalAlign: "middle",
            }}
          />
          <span>
            {`Successfully uploaded `}
            {imageIds.length > 1 ? `${imageIds.length} images` : "image"}
          </span>
        </p>
      )}
    </div>
  );
};

export default FileInput;

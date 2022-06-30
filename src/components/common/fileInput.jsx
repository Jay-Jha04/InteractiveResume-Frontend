import { InfoCircleFilled } from "@ant-design/icons";

const FileInput = ({ onChange, onClick, name, error, imageIds }) => {
  return (
    <div className="form-group mt-2 mb-3">
      <div className="input-group">
        <input
          type="file"
          name="images"
          onChange={onChange}
          className="form-control"
          aria-label="Upload"
          multiple
        />
        <button
          name={name}
          onClick={onClick}
          className="btn btn-outline-success "
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
      {imageIds.length > 0 && (
        <p className="text-success mt-2">
          <InfoCircleFilled
            style={{
              fontSize: "1.3rem",
              marginRight: "0.3rem",
              verticalAlign: "middle",
            }}
          />
          <span>
            Successfully uploaded{" "}
            {imageIds.length > 1
              ? `${imageIds.length} images`
              : `${imageIds.length} image`}
          </span>
        </p>
      )}
    </div>
  );
};

export default FileInput;

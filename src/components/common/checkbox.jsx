const Checkbox = ({ label, ...rest }) => {
  return (
    <div className="form-check mt-2 mb-3">
      <input className="form-check-input" type="checkbox" {...rest} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default Checkbox;

const Select = ({ options, ...rest }) => {
  return (
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
  );
};

export default Select;

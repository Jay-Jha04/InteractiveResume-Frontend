const Badge = ({ text, color = "primary", opacity = "100", float = "end" }) => {
  return (
    <span
      className={`badge bg-${color} bg-opacity-${opacity} float-${float} mb-1`}
    >
      {text}
    </span>
  );
};

export default Badge;

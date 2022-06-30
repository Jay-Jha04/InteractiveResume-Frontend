const ProgressBar = ({
  progressPercent,
  isShowProgressPercent,
  color,
  height,
}) => {
  return (
    <div className="progress" style={{ height }}>
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated bg-${color}`}
        role="progressbar"
        style={{ width: progressPercent }}
      >
        {isShowProgressPercent && progressPercent}
      </div>
    </div>
  );
};

export default ProgressBar;

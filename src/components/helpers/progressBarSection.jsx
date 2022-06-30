import ProgressBar from "../common/progressBar";

const ProgressBarSection = ({
  rate,
  isShowProgressPercent = true,
  color = "primary",
  height,
}) => {
  const progressPercent = `${rate * 10}%`;

  return (
    <ProgressBar
      progressPercent={progressPercent}
      isShowProgressPercent={isShowProgressPercent}
      color={color}
      height={height}
    />
  );
};

export default ProgressBarSection;

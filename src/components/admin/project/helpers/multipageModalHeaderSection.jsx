import ProgressBarSection from "../../../helpers/progressBarSection";

const MultipageModalHeaderSection = ({
  title,
  pages,
  page,
  rate,
  onClick,
  errors,
}) => {
  const progressBarBadgesLabels = (
    badgeStart,
    text,
    labelStart,
    labelMx,
    labelPx,
    label
  ) => {
    const bgColor = page >= text ? "success" : "white";
    return (
      <>
        <span
          className={`position-absolute top-50 start-${badgeStart} translate-middle badge pt-2 rounded-pill bg-${bgColor} text-dark border border-success`}
          style={{
            width: "2rem",
            height: "2rem",
            fontSize: "1rem",
          }}
        >
          {text}
        </span>
        <p
          className={`fs-6 position-absolute top-100 start-${labelStart} mx-${labelMx} px-${labelPx} translate-middle`}
          style={{
            width: "6rem",
            height: "2rem",
            marginTop: "2em",
          }}
        >
          {label}
        </p>
      </>
    );
  };

  return (
    <>
      <section>
        <div className="row m-3">
          <div className="col-6">
            <h5>{title}</h5>
            <p>{pages[page - 1].title}</p>
          </div>
          <div className="col-5 g-0">
            {Object.keys(errors).length > 0 && (
              <div className="toast fade show align-items-center">
                <div className="d-flex">
                  <div className="toast-body">
                    <>{Object.keys(errors).length} no. of errors occured!</>
                  </div>
                  <button
                    type="button"
                    className="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            )}
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn-close float-end"
              name="close"
              onClick={onClick}
            ></button>
          </div>
        </div>
        <div className="row g-0 mx-5 mb-5 position-relative">
          <ProgressBarSection
            rate={rate}
            isShowProgressPercent={false}
            height={"0.5rem"}
            color="success"
          />
          {progressBarBadgesLabels("0", 1, "0", "3", "0", pages[0].id)}
          {progressBarBadgesLabels("50", 2, "50", "4", "1", pages[1].id)}
          {progressBarBadgesLabels("100", 3, "100", "3", "0", pages[2].id)}
        </div>
      </section>
      <hr className="border border-1 border-success border-opacity-10 rounded-pill" />
    </>
  );
};

export default MultipageModalHeaderSection;

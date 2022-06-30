// import Modal from "../../common/modal";
// import { useState } from "react";

import RenderProgressBar from "../../helpers/progressBarSection";

const MultipageModal = ({ initialPageId, children }) => {
  const pages = [1, 2, 3];
  const ps = 12;
  // const [pageNo, setPageNo] = useState(1);
  // let isLastPage = false;
  // let buttonText = "Next";

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setPageNo((prevState) => prevState + 1);
  // };

  // if (pageNo === pages.length) {
  //   console.log("checking");
  //   isLastPage = true;
  //   buttonText = "Save";
  // }

  return (
    <>
      {/* {pages.length > 0 && (
        <Modal
          id={initialPageId}
          title="Add Project"
          buttonText={buttonText}
          isLastPage={isLastPage}
          onClick={(e) => handleClick(e)}
        >
          {pages[pageNo - 1]}
        </Modal>
      )} */}
      <div className="modal fade" id={initialPageId}>
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <section>
              <div className="row m-3">
                <div className="col-9">
                  <h5>Sample Modal</h5>
                  <p>This page is related to some work</p>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn-close float-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="row g-0 mx-5 mb-4 position-relative">
                <RenderProgressBar rate={7} isShowProgressPercent={false} />
                <span
                  className="position-absolute top-50 start-0 translate-middle badge pt-2 rounded-pill bg-white text-dark border border-success"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    fontSize: "1rem",
                  }}
                >
                  5
                </span>
                <p
                  className="fs-6 position-absolute top-100 start-0 mt-4 mx-3 translate-middle"
                  style={{
                    width: "6rem",
                    height: "2rem",
                  }}
                >
                  Information
                </p>
                {/* <div className="position-relative m-4">
                  <div className="progress" style={{ height: "3px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <button
                    type="button"
                    className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    3
                  </button>
                </div> */}
              </div>
            </section>
            <hr className="border border-1 border-success border-opacity-10 rounded-pill" />
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipageModal;

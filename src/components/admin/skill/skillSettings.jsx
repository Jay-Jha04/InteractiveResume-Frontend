import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ProjectOutlined, PlusOutlined } from "@ant-design/icons";
import Modal from "../../common/modal";
import AddSkillSection from "./addSkillSection";

const SkillSettings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="row mt-3">
        <div className="row">
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text fs-3">
                <PlusOutlined />
              </span>
              <button
                className="btn btn-success w-50"
                onClick={() => setShowModal(true)}
              >
                Add Skill
              </button>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="alert alert-success">
              <ProjectOutlined style={{ fontSize: "2em" }} /> Total number of
              skills
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Rate</th>
                  <th>Experience</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        unmountOnExit
        onEnter={() => (document.body.style.overflow = "hidden")}
        onExited={() => (document.body.style.overflow = "auto")}
      >
        <Modal onClick={() => setShowModal(false)} title="Adding Skill">
          <AddSkillSection />
        </Modal>
      </CSSTransition>
    </>
  );
};

export default SkillSettings;

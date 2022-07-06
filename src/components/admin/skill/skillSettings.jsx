import { useState, useEffect } from "react";
import { skillViewModel, validateProperty } from "../../../models/skill";
import { CSSTransition } from "react-transition-group";
import { ProjectOutlined, PlusOutlined } from "@ant-design/icons";
import Modal from "../../common/modal";
import AddSkillSection from "./addSkillSection";
import { validateSkill } from "../../../models/skill";
import { getSkills, postSkill } from "../../../services/skill";
import captilizeString from "../../../utills/captilizeString";

const SkillSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [payload, setPayload] = useState(skillViewModel);
  const [errors, setErrors] = useState({});
  const [skills, setSkills] = useState([]);
  const buttons = [
    { id: "close", text: "Close", color: "primary" },
    { id: "save", text: "Save", color: "primary" },
  ];

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    const { error } = validateProperty(name, value);

    if (error) {
      setErrors((prevState) => {
        return { ...prevState, [name]: error.details[0].message };
      });
    } else {
      errors[name] && delete errors[name];
    }

    return setPayload((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name } = e.target;

    switch (name) {
      case "close":
        setPayload(skillViewModel);
        setErrors({});
        return setShowModal(false);
      case "save":
        const { error } = validateSkill(payload);

        if (error) {
          const err = { ...errors };
          error.details.map((detail) => (err[detail.path[0]] = detail.message));
          return setErrors(err);
        }

        const res = await postSkill(payload);

        setPayload(skillViewModel);
        setErrors({});
        setSkills([...skills, res]);
        return setShowModal(false);

      default:
        return setShowModal(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getSkills();
      setSkills([...res]);
    }
    fetchData();
  }, []);

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
              skills is {skills.length}
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
              {skills.length > 0 && (
                <tbody>
                  {skills.map(
                    ({ _id, rate, experience, type, skill }, index) => (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{captilizeString(type)}</td>
                        <td>{captilizeString(skill)}</td>
                        <td>{rate}</td>
                        <td>{experience}</td>
                      </tr>
                    )
                  )}
                </tbody>
              )}
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
        <Modal
          onClick={(e) => handleClick(e)}
          title="Adding Skill"
          buttons={buttons}
        >
          <AddSkillSection
            payload={payload}
            errors={errors}
            onChange={(e) => handleChange(e)}
          />
        </Modal>
      </CSSTransition>
    </>
  );
};

export default SkillSettings;

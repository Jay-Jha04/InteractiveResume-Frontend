import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ProjectOutlined, PlusOutlined } from "@ant-design/icons";
import Modal from "../../common/modal";
import AddExperienceSection from "./helpers/addExperienceSection";
import {
  experienceViewModel,
  validateExperience,
  validateProperty,
} from "../../../models/experience";
import { getExperiences, postExperience } from "../../../services/experience";

const ExperienceSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [payload, setPayload] = useState(experienceViewModel);
  const [errors, setErrors] = useState({});

  const buttons = [
    { id: "close", text: "Close", color: "primary" },
    { id: "save", text: "Save", color: "primary" },
  ];

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value, checked } = e.target;

    const { error } = validateProperty(name, value);
    if (error) {
      setErrors((prevState) => {
        return { ...prevState, [name]: error.details[0].message };
      });
    } else {
      errors[name] && delete errors[name];
    }

    switch (name) {
      case "isCurrentlyWorking":
        return setPayload((prevState) => {
          return { ...prevState, [name]: checked };
        });

      default:
        return setPayload((prevState) => {
          return { ...prevState, [name]: value };
        });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name } = e.target;

    switch (name) {
      case "close":
        setErrors({});
        setPayload(experienceViewModel);
        return setShowModal(false);

      case "save":
        const { error } = validateExperience(payload);
        let err = { ...errors };

        if (error) {
          error.details.map((detail) => (err[detail.path[0]] = detail.message));
          return setErrors(err);
        }

        const res = await postExperience(payload);

        setExperiences((prevState) => {
          return [...prevState, res];
        });
        setErrors({});
        setPayload(experienceViewModel);
        return setShowModal(false);

      default:
        setErrors({});
        setPayload(experienceViewModel);
        return setShowModal(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getExperiences();
      setExperiences(res);
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
                className="btn btn-primary w-50"
                onClick={() => setShowModal(true)}
              >
                Add Experience
              </button>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="alert alert-primary">
              <ProjectOutlined style={{ fontSize: "2em" }} />
              {experiences.length > 1
                ? `Total ${experiences.length} organisations I explored`
                : `Total ${experiences.length} organisation I explored`}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Title</th>
                  <th>Job Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              {experiences.length > 0 && (
                <tbody>
                  {experiences.map(
                    (
                      { _id, company, profile_headline, employement_type },
                      index
                    ) => (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{company.name}</td>
                        <td>{profile_headline}</td>
                        <td>{employement_type}</td>
                        <td>{company.start_date}</td>
                        <td>{company.end_date}</td>
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
          title={"Adding Experience"}
          titleInformation={"Please provide the following information"}
          buttons={buttons}
        >
          <AddExperienceSection
            payload={payload}
            errors={errors}
            onChange={(e) => handleChange(e)}
          />
        </Modal>
      </CSSTransition>
    </>
  );
};

export default ExperienceSettings;

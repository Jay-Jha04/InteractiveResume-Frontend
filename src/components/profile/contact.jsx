import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  DESCRIPTION,
  GETINTOUCH,
  GITHUBPROFILENAME,
  GMAILADDRESS,
  HEADING,
  LINKEDPROFILENAME,
  PHONENUMBER,
} from "../../resources/contactPage";

const Contact = () => {
  return (
    <>
      <div className="card card-body bg-warning text-white py-5">
        <h2>{HEADING}</h2>
        <p className="lead">{DESCRIPTION}</p>
      </div>

      <div className="card card-body py-5">
        <h3>{GETINTOUCH}</h3>
        <div className="row mb-2">
          <div className="col-1">
            <span className="input-group-text bg-warning text-white fs-1 justify-content-center">
              <MailOutlined />
            </span>
          </div>
          <div className="col-10 align-self-center fs-2">
            <span>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvmZTbFsGhnWcvPNqZNVFMVrJGKtNngjdCsFqJBftQJRZCTzDJbLHnZdHplQPqfmmFhwPg"
                target="_blank"
                rel="noreferrer"
              >
                {GMAILADDRESS}
              </a>
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1">
            <span className="input-group-text bg-warning text-white fs-1 justify-content-center">
              <LinkedinOutlined />
            </span>
          </div>
          <div className="col-10 align-self-center fs-2">
            <span>
              <a
                href="https://www.linkedin.com/in/jay-jha-b187bb1b0/"
                target="_blank"
                rel="noreferrer"
              >
                {LINKEDPROFILENAME}
              </a>
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1">
            <span className="input-group-text bg-warning text-white fs-1 justify-content-center">
              <GithubOutlined />
            </span>
          </div>
          <div className="col-10 align-self-center fs-2">
            <span>
              <a
                href="https://github.com/Jay-Jha04"
                target="_blank"
                rel="noreferrer"
              >
                {GITHUBPROFILENAME}
              </a>
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1">
            <span className="input-group-text bg-warning text-white fs-1 justify-content-center">
              <PhoneOutlined />
            </span>
          </div>
          <div className="col-10 align-self-center fs-2">
            <span>{PHONENUMBER}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

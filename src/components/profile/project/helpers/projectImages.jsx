import { useState, useEffect } from "react";
import { getImagesByProjectId } from "../../../../services/project";
import Modal from "../../../common/modal";

const ProjectImages = ({ projectId, setShowModal }) => {
  const [images, setImages] = useState([]);
  const buttons = [{ id: "close", text: "Close" }];

  useEffect(() => {
    async function fetchData() {
      const res = await getImagesByProjectId(projectId);
      setImages(res);
    }
    fetchData();
  }, []);

  return (
    <>
      {images.length > 0 && (
        <Modal
          title={"Modal Title"}
          buttons={buttons}
          backdrop="static"
          onClick={() => setShowModal(false)}
        >
          <div className="row">
            {images.map((image) => (
              <div key={image._id} className="col-sm-6 mb-1">
                <img
                  style={{ width: "100%", height: "50%" }}
                  src={`data:${image.contentType};base64,${image.imageBase64}`}
                  alt="..."
                />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectImages;

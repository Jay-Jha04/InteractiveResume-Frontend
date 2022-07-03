import { useState, useEffect } from "react";
import { getImagesByProjectId } from "../../../../services/project";
import Modal from "../../../common/modal";
import { Carousel } from "react-responsive-carousel";

const ProjectImages = ({ projectId, setShowModal }) => {
  const [images, setImages] = useState([]);
  const buttons = [{ id: "close", text: "Close", color: "success" }];

  useEffect(() => {
    async function fetchData() {
      const res = await getImagesByProjectId(projectId);
      setImages(res);
    }
    fetchData();
  }, []);

  const indicatorStyles = {
    background: "#b0e8b0",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          style={{ ...indicatorStyles, background: "#117811" }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        style={indicatorStyles}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <>
      <Modal
        title={"Modal Title"}
        buttons={buttons}
        backdrop="static"
        onClick={() => setShowModal(false)}
      >
        {images.length > 0 && (
          <Carousel
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            dynamicHeight={true}
            useKeyboardArrows={true}
            renderIndicator={renderIndicator}
          >
            {images.map((image, _id) => (
              <img
                key={_id}
                style={{ width: "40rem", height: "33rem" }}
                src={`data:${image.contentType};base64,${image.imageBase64}`}
                alt="..."
              />
            ))}
          </Carousel>
        )}
        {images.length === 0 && (
          <div className="text-center">
            <img
              src="/NoImagesPlaceholder.png"
              style={{ width: "25rem", height: "20rem" }}
            />
            <p className="my-5 font-monospace fs-5">
              No Images added for this project yet!
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectImages;

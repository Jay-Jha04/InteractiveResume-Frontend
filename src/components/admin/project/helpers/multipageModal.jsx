import MultipageModalHeaderSection from "./multipageModalHeaderSection";
import Modal from "../../../common/modal";

const MultipageModal = ({
  pages,
  title,
  height,
  backdrop,
  onClick,
  page,
  errors,
}) => {
  const buttons = [];
  const errs = { ...errors };
  errs["images"] && delete errs["images"];
  const disabled = Object.keys(errs).length > 0 ? "disabled" : "";
  if (page === 1) {
    buttons.push({
      id: "next",
      text: "Next",
      color: "success",
      disabled: disabled,
    });
  } else if (page === pages.length) {
    buttons.push({ id: "back", text: "Back", color: "success" });
    buttons.push({
      id: "save",
      text: "Save",
      color: "success",
      disabled: disabled,
    });
  } else {
    buttons.push({ id: "back", text: "Back", color: "success" });
    buttons.push({
      id: "next",
      text: "Next",
      color: "success",
      disabled: disabled,
    });
  }

  const renderHeaderSection = () => {
    const rate = (page - 1) * 5;
    return (
      <MultipageModalHeaderSection
        title={title}
        pages={pages}
        page={page}
        rate={rate}
        errors={errors}
        onClick={onClick}
      />
    );
  };

  return (
    <Modal
      title="Add Project"
      buttons={buttons}
      backdrop={backdrop}
      errors={errors}
      onClick={onClick}
      header={renderHeaderSection()}
    >
      <div className="mx-1 g-0" style={{ height }}>
        {pages[page - 1].component}
      </div>
    </Modal>
  );
};

export default MultipageModal;

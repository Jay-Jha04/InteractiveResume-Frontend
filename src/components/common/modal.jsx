const Modal = ({
  children,
  title,
  onClick,
  buttons,
  header,
  titleInformation,
  backdrop,
}) => {
  const renderHeaderSection = () => {
    if (header) {
      return header;
    }
    return (
      <div className="modal-header">
        <div className="modal-title">
          <h5>{title}</h5>
          <p>{titleInformation}</p>
        </div>
        <button
          type="button"
          className="btn-close"
          name="close"
          onClick={onClick}
        ></button>
      </div>
    );
  };

  const renderButtonSection = () => {
    if (buttons) {
      return buttons.map((bt) => (
        <button
          key={bt.id}
          type="button"
          name={bt.id}
          className={`btn btn-${bt.color} ${bt?.disabled}`}
          onClick={onClick}
        >
          {bt.text}
        </button>
      ));
    }
  };

  return (
    <div className="modal show d-block" data-bs-backdrop={backdrop}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          {renderHeaderSection()}
          <div className="modal-body">{children}</div>
          <div className="modal-footer mt-2">{renderButtonSection()}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

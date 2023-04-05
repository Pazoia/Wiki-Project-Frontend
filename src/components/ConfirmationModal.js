import { Modal } from "react-bootstrap";

import { Button } from "./Button";
import "../css/ConfirmationModal.css";

export const ConfirmationModal = ({
  showConfirmationModal,
  handleConfirmationModal,
  handleDocumentModal,
  confirmationModalSettings
}) => {

  return(
    <Modal 
      className="confirmation-modal"
      show={showConfirmationModal}
    >
      <div className={`confirmation-modal-content ${confirmationModalSettings.confirmationType}`}>
        <Modal.Header className="confirmation-type">
          <h1>{confirmationModalSettings.confirmationType}</h1>
        </Modal.Header>
        <Modal.Body>
          <h3>{confirmationModalSettings.confirmationText}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            buttonText={"Close"}
            onClick={() => {
              handleConfirmationModal();
              handleDocumentModal();
            }}
          />
        </Modal.Footer>
      </div>
    </Modal>
  )
};

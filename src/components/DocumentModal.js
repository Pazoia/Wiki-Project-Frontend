import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import { Button } from "./Button";
import "../css/ModalCssConfig.css"
import "../css/DocumentModal.css"

export const DocumentModal = ({
  selectedTitle,
  showDocumentModal,
  saveSelectedDocument,
  handleDocumentModal,
  handleEditDocumentModal,
  handleTitlesDisplay
}) => {

  const [document, setDocument] = useState([])

  useEffect (() => {
    if (showDocumentModal) {
      fetch(`/documents/${selectedTitle}/latest`).then(
        res => res.json()
      ).then(
        data => {
          setDocument(data)
        }
      )
    }
  }, [showDocumentModal, selectedTitle]);

  const title = document[0];
  const timestamp = document[1];
  const documentData = document[2];

  return (
    <Modal
      className="modal"
      show={showDocumentModal}
    >
    <Modal.Dialog
      scrollable={true}
    >
      <div className="modal-content">
        <Modal.Header>
          <h1>{title}</h1>
        </Modal.Header>
        <Modal.Body className="modal-body">{documentData}</Modal.Body>
        <Modal.Footer>
          <div className="creation-timestamp">
            <p>Document creation date and time: </p>
            <p>{timestamp}</p>
          </div>
          <div className="model-buttons">
            <Button
              buttonText={"Edit"}
              onClick={() => {
                handleEditDocumentModal();
                handleDocumentModal();
                saveSelectedDocument(document);
              }}
            />
            <Button
              buttonText={"Close"}
              onClick={() => {
                handleDocumentModal();
                handleTitlesDisplay();
              }}
            />
          </div>
        </Modal.Footer>
      </div>
    </Modal.Dialog>
    </Modal>
  )
};
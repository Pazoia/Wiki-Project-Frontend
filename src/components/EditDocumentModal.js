import React from "react";
import { useRef } from "react";
import { Modal } from "react-bootstrap";

import { Button } from "./Button";
import "../css/ModalCssConfig.css"
import "../css/EditDocumentModal.css"

export const EditDocumentModal = ({
  showEditDocumentModal,
  selectedDocument,
  saveConfirmationModalSettings,
  handleEditDocumentModal,
  handleConfirmationModal
}) => {

  const documentDataRef = useRef();
  const title = selectedDocument[0];
  const documentData = selectedDocument[2];

  const saveNewDocumentData = async () => {
    
    const newDocumentData = {
      "content": documentDataRef.current.value,
    };

    if (documentData === newDocumentData.content) {
      console.log(`No changes detected in new content for title: ${title}`);
      const text = `No changes detected in new content for title: ${title}`;
      const type = "Alert";
      saveConfirmationModalSettings(text, type);
    } else {
      await fetch(`/documents/${title}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(newDocumentData)
        }).then((res) => res.json()
        ).then((post) => {
          const text = post.message;
          const type = "Success";
          saveConfirmationModalSettings(text, type);
        }).catch((err) => {
          console.log(err.message);
      });
    }
  };

  return(
    <Modal
      className="modal"
      show={showEditDocumentModal}
    >
      <div className="modal-content">
        <Modal.Header>
          <h1>{title}</h1>
        </Modal.Header>
        <Modal.Body className="edit-document-modal-body">
          <p>Edit the document in the box below.</p>
          <textarea
            className="edit-text-area"
            defaultValue={documentData}
            ref={documentDataRef}
          >
          </textarea>
        </Modal.Body>
        <Modal.Footer>
          <p>Hit save to add a new revision for title: <strong>{title}</strong>.</p>
          <div className="model-buttons">
            <Button
              buttonText={"Save"}
              onClick={() => {
                saveNewDocumentData();
                handleEditDocumentModal();
                handleConfirmationModal();
              }}
            />
            <Button
              buttonText={"Cancel"}
              onClick={() => {
                const text = "You cancelled, nothing was changed!";
                const type = "Alert";
                saveConfirmationModalSettings(text, type);
                handleEditDocumentModal();
                handleConfirmationModal();
              }}
            />
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  )
};
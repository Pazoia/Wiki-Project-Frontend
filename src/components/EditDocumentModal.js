import React from "react";
import { useRef } from "react";
import { Modal } from "react-bootstrap";

import { Button } from "./Button";
import "../css/ModalCssConfig.css"
import "../css/EditDocumentModal.css"

export const EditDocumentModal = ({
  showEditDocumentModal,
  selectedDocument,
  handleDocumentModal,
  handleEditDocumentModal
}) => {

  const documentDataRef = useRef();
  const title = selectedDocument[0];
  const documentData = selectedDocument[2];

  const saveNewDocumentData = async () => {
    const newDocumentData = {
      "content": documentDataRef.current.value,
    };
    if (documentData === newDocumentData.content) {
      console.log("No changes detected!");
    } else {
      await fetch(`/documents/${title}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newDocumentData)
      }).then((res) => res.json()
      ).then((post) => console.log(post.message)
      ).catch((err) => {
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
        <Modal.Body>
          <div className="edit-document-modal-msg">
            <p>Edit the document in the box below.</p>
          </div>
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
              }}
            />
            <Button
              buttonText={"Cancel"}
              onClick={() => {
                console.log("Canceling editing document");
              }}
            />
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  )
};
import React from "react";
import { useState } from "react";

import { Titles } from "./components/Titles";
import { DocumentModal } from "./components/DocumentModal";
import { EditDocumentModal } from "./components/EditDocumentModal";
import { ConfirmationModal } from "./components/ConfirmationModal";

export const App = () => {

  const [showTitles, setShowTitles] = useState(true);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showEditDocumentModal, setShowEditDocumentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedDocument, setSelectedDocument] = useState([]);
  const [confirmationModalSettings, setConfirmationModalSettings] = useState({
    confirmationText: "",
    confirmationType: ""
  });

  const handleTitlesDisplay = () => {
    setShowTitles(!showTitles);
  };

  const handleDocumentModal = () => {
    setShowDocumentModal(!showDocumentModal);
  };

  const handleEditDocumentModal = () => {
    setShowEditDocumentModal(!showEditDocumentModal);
  };

  const handleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal)
  }

  const saveSelectedTitle = (title) => {
    setSelectedTitle(title);
  };

  const saveSelectedDocument = (document) => {
    setSelectedDocument(document);
  };

  const saveConfirmationModalSettings = (text, type) => {
    console.log(text);
    setConfirmationModalSettings({
      confirmationText: text,
      confirmationType: type
    });
  };

  return (
    <>
      <Titles
        showTitles={showTitles}
        handleTitlesDisplay={handleTitlesDisplay}
        handleDocumentModal={handleDocumentModal}
        saveSelectedTitle={saveSelectedTitle}
      />
      <DocumentModal
        selectedTitle={selectedTitle}
        showDocumentModal={showDocumentModal}
        saveSelectedDocument={saveSelectedDocument}
        handleDocumentModal={handleDocumentModal}
        handleEditDocumentModal={handleEditDocumentModal}
        handleTitlesDisplay={handleTitlesDisplay}
      />
      <EditDocumentModal
        showEditDocumentModal={showEditDocumentModal}
        selectedDocument={selectedDocument}
        saveConfirmationModalSettings={saveConfirmationModalSettings}
        handleDocumentModal={handleDocumentModal}
        handleEditDocumentModal={handleEditDocumentModal}
        handleConfirmationModal={handleConfirmationModal}
      />
      <ConfirmationModal
        showConfirmationModal={showConfirmationModal}
        handleConfirmationModal={handleConfirmationModal}
        handleDocumentModal={handleDocumentModal}
        confirmationModalSettings={confirmationModalSettings}
      />
  </>
  );
}

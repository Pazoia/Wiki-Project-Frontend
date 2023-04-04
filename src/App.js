import React from "react";
import { useState } from "react";

import { Titles } from "./components/Titles";
import { DocumentModal } from "./components/DocumentModal";
import { EditDocumentModal } from "./components/EditDocumentModal";

export const App = () => {

  const [showTitles, setShowTitles] = useState(true);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showEditDocumentModal, setShowEditDocumentModal] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedDocument, setSelectedDocument] = useState([]);

  const handleTitlesDisplay = () => {
    setShowTitles(!showTitles);
  };

  const handleDocumentModal = () => {
    setShowDocumentModal(!showDocumentModal);
  };

  const handleEditDocumentModal = () => {
    setShowEditDocumentModal(!showEditDocumentModal);
  };

  const saveSelectedTitle = (title) => {
    setSelectedTitle(title);
  };

  const saveSelectedDocument = (document) => {
    setSelectedDocument(document);
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
        handleDocumentModal={handleDocumentModal}
        handleEditDocumentModal={handleEditDocumentModal}

    />
  </>
  );
}

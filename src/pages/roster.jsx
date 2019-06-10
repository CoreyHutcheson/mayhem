import React, { useState } from "react";
import Modal from "react-modal";

import PageWrapper from "src/components/page-wrapper";
import ToggleButton from "src/components/roster/toggle-button";
import Card from "src/components/roster/card";
import ModalContent from "src/components/roster/modal-content";

import { useRoster } from "src/utils/js/custom-hooks/useRoster.js";
import "src/utils/styles/page-styles/roster.scss";

const modalStyles = {
  overlay: {
    zIndex: "1",
  },
  content: {
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "90%",
    maxWidth: "900px",
    margin: "5% auto",
    padding: "0",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
};

const RosterPage = () => {
  const allRoster = useRoster();
  const [shownRoster, setShownRoster] = useState(allRoster);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleToggleChange = e => {
    const filteredValue = e.target.id.toUpperCase();
    const newRoster =
      filteredValue === "ALL"
        ? allRoster
        : allRoster.filter(
            person =>
              (person.node.categories[0].name + "s").toUpperCase() ===
              filteredValue
          );

    setShownRoster(newRoster);
  };

  const handleModalOpen = (title, image, acf) => {
    setModalInfo({ title, image, ...acf });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setModalInfo({});
    setShowModal(false);
  };

  // This is used for accessibility purposes
  Modal.setAppElement("#___gatsby");

  return (
    <PageWrapper>
      <div className="roster-page">
        <ToggleButton handleChange={handleToggleChange} />

        <div className="roster-page__roster-container">
          {shownRoster.map(({ node }) => (
            <Card
              key={node.id}
              image={node.featured_media.localFile.childImageSharp.fluid}
              openModal={handleModalOpen}
              {...node}
            />
          ))}
        </div>

        <Modal
          isOpen={showModal}
          contentLabel="Roster Modal"
          onRequestClose={handleModalClose}
          style={modalStyles}
        >
          <ModalContent {...modalInfo} handleModalClose={handleModalClose} />
        </Modal>
      </div>
    </PageWrapper>
  );
};

export default RosterPage;

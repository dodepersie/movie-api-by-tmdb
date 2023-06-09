import { createPortal } from "react-dom";
import { Modal, useModal, Button } from "@nextui-org/react";

const Modalinternal = ({ children, activator }) => {
  const { setVisible, bindings } = useModal();

  const content = setVisible && (
    <Modal
      preventClose
      aria-labelledby="modal-title"
      css={{
        "@xsMax": { w: "95%" },
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "1rem",
      }}
      {...bindings}
    >
      {children}
      <Modal.Footer>
        <Button
          auto
          color="primary"
          size="sm"
          onPress={() => setVisible(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      {activator({ setVisible })}
      {createPortal(content, document.body)}
    </>
  );
};

export default Modalinternal;

import { createPortal } from "react-dom";
import { Modal, useModal, Button } from "@nextui-org/react";

const Modalinternal = ({ children, activator }) => {
  const { setVisible, bindings } = useModal();
  const closeHandler = () => {
    setVisible(false);
  };

  const content = setVisible && (
    <Modal
      preventClose
      aria-labelledby="modal-title"
      open={setVisible}
      onClose={closeHandler}
      css={{ marginLeft: "auto", marginRight: "auto", paddingTop: "1rem"}}
      {...bindings}
    >
      {children}
      <Modal.Footer>
        <Button color="secondary" size="md" auto onPress={closeHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      {activator({ setVisible })}
      {createPortal(<div>{content}</div>, document.body)}
    </>
  );
};

export default Modalinternal;

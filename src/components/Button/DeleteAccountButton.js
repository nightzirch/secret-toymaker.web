import List from "../List";
import Modal, { useModal } from "../Modal";
import { Paragraph, Title } from "../Typography";
import Button from "./Button";

const DeleteAccountButton = (props) => {
  const modal = useModal();

  const handleDelete = async () => {
    console.log("Delete account clicked");
    // const result = await this.global.firebase.deleteAccount();
    // console.log(result);
    modal.closeModal();
  };

  return (
    <>
      <Button
        onClick={modal.openModal}
        theme="danger"
        title="Delete account"
        {...props}
      />

      <Modal
        actionButton={
          <Button
            onClick={handleDelete}
            theme="danger"
            title="Delete account"
          />
        }
        {...modal}
      >
        <Title level="tertiary">
          Are you sure you want to delete your account?
        </Title>

        <Paragraph>You are about to:</Paragraph>
        <List
          elements={[
            "Remove your login credentials from our authentication provider",
            "Remove your email and all other data collected when you created your account",
            "Remove your account name, API token, and all other data collected from the Guild Wars 2 API",
            "Remove the gift notes you have written for the events you participated in",
          ]}
        />

        <Paragraph>
          Please note some data are being kept for the system to keep working.
          Any data connected to you have been removed, but the unique identifier
          (UUID) for your Guild Wars 2 account will be kept, as will the
          participations associated with that UUID.
        </Paragraph>
        <Paragraph>
          <span className="modal__strong">This is a destructive action!</span>{" "}
          You will not be able to recover the deleted data.
        </Paragraph>
      </Modal>
    </>
  );
};

export default DeleteAccountButton;

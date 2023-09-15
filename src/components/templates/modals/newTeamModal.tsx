import { Modal } from "@/components/molecules"

const NewTeamModal = ({ open, onClose }: { open: boolean; onClose: () => any; }): React.ReactNode => {
  return (
    <Modal open={open} onClose={onClose}>

    </Modal>
  )
}

export default NewTeamModal;

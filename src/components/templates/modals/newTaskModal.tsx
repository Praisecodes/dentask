import { Modal } from "@/components/molecules"

const NewTaskModal = ({ open, onClose }: { open: boolean; onClose: () => void ; }): React.ReactNode => {
  return (
    <Modal open={open} onClose={onClose}>

    </Modal>
  )
}

export default NewTaskModal;

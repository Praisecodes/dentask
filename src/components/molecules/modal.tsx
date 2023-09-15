const Modal = ({ children, open, onClose }: { children: React.ReactNode; open: boolean; onClose: () => any; }): React.ReactNode => {
  return (
    <section onClick={onClose} className={`backdrop-blur-md fixed top-0 left-0 w-screen h-screen ${open ? "flex" : "hidden"} items-center justify-center`}>
      <div onClick={(e) => { e.stopPropagation() }} className={`w-[35rem] max-h-[70vh] bg-[#2B3441] shadow-md py-5 rounded-md`}>
        {children}
      </div>
    </section>
  )
}

export default Modal;

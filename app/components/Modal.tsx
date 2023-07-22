interface ModalProps {
  modalOpen: boolean
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    
<div className={`modal ${modalOpen ? "modal-open": ""}`}>

  <div className="modal-box">
  <div className="modal-close" onClick={() => setModalOpen(false)}>
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
        </div>
    {children}
    <div className="modal-action">
    
      
      
    </div>
    
  </div>
</div>
  );
}

export default Modal
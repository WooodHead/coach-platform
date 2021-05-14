import { FC } from "react";

export const Modal: FC<{ onClose: () => void }> = ({ children, onClose }) => {
  return (
    <div className="modal" onClick={() => onClose()}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => onClose()} title="Close">
          X
        </button>
        {children}
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #aaaaaaaa;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-box {
          background-color: white;
          border-radius: var(--box-border-radius);
          padding: 1rem;
          position: relative;
        }
        .modal-box button {
          border-radius: var(--box-border-radius);
          position: absolute;
          right: calc(-1 * var(--box-border-radius) / 2);
          top: calc(-1 * var(--box-border-radius) / 2);
        }
      `}</style>
    </div>
  );
};

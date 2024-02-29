import { cloneElement, createContext, useContext, ReactElement, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import { useOutsideClick } from "../utils/useOutsideClick"; 

const ModalContext = createContext<{
  openName: string;
  close: () => void;
  open: (name: string) => void;
}>({
  openName: "",
  close: () => {},
  open: () => {},
});

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps): JSX.Element {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

function Open({ children, opens }: OpenProps): JSX.Element {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}

interface WindowProps {
  children: ReactNode;
  name: string;
}

function Window({ children, name }: WindowProps): JSX.Element | null {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed z-[1000] inset-0 w-full h-full flex justify-center items-center bg-green-600 bg-opacity-70 backdrop-blur">
      <div ref={ref}>
        <button
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-50 hover:text-green-600 hover:bg-gray-200 transition-colors"
          onClick={close}
        >
          <HiX className="w-8 h-8" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

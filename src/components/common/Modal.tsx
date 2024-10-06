import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { swipeableConfig } from "../../lib/swipeable";
import { useRef, useState } from "react";

type ModalProps = {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {

  const [y, setY] = useState<number>(0)
  const [moving, setMoving] = useState(false)

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      const { initial, deltaY } = eventData;
      setY(initial[0] + deltaY)
      setMoving(true)
    },
    onTouchEndOrOnMouseUp: () => {
      setMoving(false)
      const windowHeight = window.innerHeight;
      if (y > 2 * windowHeight / 3) {
        onClose()
      }
    },
    ...swipeableConfig,
  });

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.section layout
          onClick={onClose}
          className="fixed inset-0 backdrop-blur-md z-[999]">

          <motion.section
            initial={{ top: '100%' }}
            animate={{ top: moving ? y : 'auto' }}
            exit={{ top: '100%' }}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              event.stopPropagation()
            }}
            transition={{ duration: moving ? 0.1 : .3, bounce: 'none' }}
            {...handlers}

            className={`fixed top-auto z-[9991] left-0 right-0 bottom-0 rounded-t-3xl bg-container flex flex-col`}>

            <div className="absolute w-1/3 h-1 -translate-x-1/2 bg-gray-400 rounded-full top-2.5 left-1/2 dark:bg-gray-500"></div>

            {children}

          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
    , document.getElementById("modal-portal")!);
}

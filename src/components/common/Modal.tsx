import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { swipeableConfig } from "../../lib/swipeable";
import { useEffect, useState } from "react";

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
      setY(initial[1] + deltaY)
      setMoving(true)
    },
    onSwipedDown: (eventData) => {
      const { deltaY } = eventData;
      setMoving(false)

      if (deltaY > 100) {
        onClose()
      }
    },
    ...swipeableConfig,
  });

  const modalBodyHandlers = useSwipeable({

    onSwipedDown: (eventData) => {
      const { deltaY } = eventData;
      if (deltaY > 100) {
        onClose()
      }
    },
    ...swipeableConfig,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

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
            {...modalBodyHandlers}
            transition={{ duration: moving ? 0.1 : .3, bounce: 'none' }}
            className={`fixed max-w-[600px]  top-auto z-[9991] left-1/2 w-full -translate-x-1/2 bottom-0 rounded-t-3xl bg-container flex flex-col`}>


            <div {...handlers} className="absolute top-0 w-1/3 p-3 -translate-x-1/2 bg-transparent left-1/2">
              <div className="w-full h-1 bg-gray-400 rounded-full dark:bg-gray-500"></div>
            </div>

            {children}

          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
    , document.getElementById("modal-portal")!);
}

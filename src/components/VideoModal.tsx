import { useEffect, useRef, type RefObject } from "react";
import "./VideoModal.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  triggerRef?: RefObject<HTMLButtonElement | null>;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoId,
  triggerRef,
}: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        triggerRef?.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
    triggerRef?.current?.focus();
  };

  return (
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div className="video-modal__panel">
        <div className="video-modal__header">
          <div>
            <span>J.P. Muia Health System</span>
            <h2 id="video-modal-title">Watch Our Story</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            className="video-modal__close"
            aria-label="Close video"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="video-modal__player">
          <iframe
            src={`https://youtube.com/@jpmuiahealthsystem?si=PcISHhVwnd67wM0t`}
            title="J.P. Muia Health System story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

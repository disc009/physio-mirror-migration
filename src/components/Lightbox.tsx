import { useEffect, useCallback } from "react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const prev = useCallback(
    () => onChange((index - 1 + images.length) % images.length),
    [index, images.length, onChange],
  );
  const next = useCallback(
    () => onChange((index + 1) % images.length),
    [index, images.length, onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Bildergalerie"
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Schließen"
      >
        ×
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>
      <img
        src={images[index]}
        alt=""
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Nächstes Bild"
      >
        ›
      </button>
      <div className="lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

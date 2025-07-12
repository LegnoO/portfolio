"use client";

// ** Types
type Props = { setIsShowCV: (value: boolean) => void };

const DisplayCV = ({ setIsShowCV }: Props) => {
  return (
    <div
      className="preview-cv"
      onClick={() => {
        setIsShowCV(false);
      }}>
      <embed
        src="/MinhKhoi_Frontend_Developer.pdf"
        type="application/pdf"
        className="preview-cv-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default DisplayCV;

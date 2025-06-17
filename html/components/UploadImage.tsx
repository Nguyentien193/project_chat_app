import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

const UploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    e.target.value = '';
  };

  return (
    <div className="file-upload">
      {imagePreview && (
        <div className="img_preview">
          <img src={imagePreview} alt="img_upload" />
          <FontAwesomeIcon
            icon={faTrash}
            className="icon"
            onClick={() => {
              setFileName('No file chosen');
              setImagePreview(null);
            }}
          />
        </div>
      )}
      <div className="flex-center gap-10">
        <button type="button" className="btn-choose" onClick={() => inputRef.current?.click()}>
          Choose File
        </button>
        <span className="file-name">{fileName}</span>
        <input type="file" ref={inputRef} onChange={handleChange} className="hidden-input" />
      </div>
    </div>
  );
};

export default UploadImage;

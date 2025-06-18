import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  onChange: (file: any) => void;
  imgUrl?: any;
}
const UploadImage = ({ onChange, imgUrl }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (imgUrl) {
      setImagePreview(imgUrl);
    }
  }, [imgUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
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
        <input
          type="file"
          accept="image/jpg,image/jpeg,image/png"
          ref={inputRef}
          onChange={handleChange}
          className="hidden-input"
        />
      </div>
    </div>
  );
};

export default UploadImage;

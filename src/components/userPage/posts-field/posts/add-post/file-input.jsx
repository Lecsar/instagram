import React from 'react';

const FileInput = ({ showAddPostImgPreview }) => {
  // предпоказ
  const onChangeInputEvent = (img) => {
    const reader = new FileReader();

    reader.readAsDataURL(img);
    reader.onloadend = () => {
      showAddPostImgPreview({ bs64File: reader.result, img });
    };
  };

  return (
    <input
      type="file"
      style={{
        width: '100%',
        marginBottom: '1.5rem'
      }}
      accept="image/jpeg,image/png"
      onChange={({
        target: {
          files: [img]
        }
      }) => onChangeInputEvent(img)}
    />
  );
};

export default FileInput;

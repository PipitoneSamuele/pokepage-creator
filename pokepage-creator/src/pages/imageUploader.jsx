import { useDropzone } from 'react-dropzone';
import { useState, useCallback, useEffect } from 'react';

export function ImageUploader() {
  const [files, setFiles] = useState([]);
  
  const onDrop = useCallback(acceptedFiles => {
    // Map accepted files to add preview URL
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    onDrop,
    maxFiles: 9
  });

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images here...</p>
        ) : (
          <p>Drag & drop images here, or click to select</p>
        )}
      </div>
      
      {/* Preview section */}
      <div style={previewContainerStyle}>
        {files.map((file, index) => (
          <div key={index} style={previewItemStyle}>
            <img
              src={file.preview}
              style={imageStyle}
              alt="Preview"
              // Revoke data uri after image is loaded
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <p>{file.name}</p>
            <p>{Math.round(file.size / 1024)} KB</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles (you can move these to CSS)
const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '20px'
};

const previewContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '20px'
};

const previewItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const imageStyle = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '4px'
};
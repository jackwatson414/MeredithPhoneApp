import React, { useState, useEffect } from 'react';

type Media = {
  file: File;
  preview: string;
  type: 'image' | 'video';
};

type Props = {
  onChange: (files: File[]) => void;
};

const MediaPicker: React.FC<Props> = ({ onChange }) => {
  const [media, setMedia] = useState<Media[]>([]);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = Array.from(e.target.files || []);
    const mapped: Media[] = files.map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
      type: f.type.startsWith('image') ? 'image' : 'video',
    }));
    setMedia(mapped);
    onChange(files);
  };

  // revoke object URLs on unmount
  useEffect(() => {
    return () => {
      media.forEach((m) => URL.revokeObjectURL(m.preview));
    };
  }, [media]);

  return (
    <div>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleSelect}
        className="mb-3"
      />
      <div className="flex gap-2 flex-wrap">
        {media.map((m, i) => (
          <div key={i} className="w-24 h-24 relative border rounded overflow-hidden">
            {m.type === 'image' ? (
              <img src={m.preview} alt="preview" className="object-cover w-full h-full" />
            ) : (
              <video src={m.preview} className="object-cover w-full h-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPicker; 
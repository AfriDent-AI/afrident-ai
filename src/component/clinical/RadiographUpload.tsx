import { useState, useRef } from "react";
import { Camera, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RadiographUploadProps {
  onUpload?: (image: string | null) => void;
}

export function RadiographUpload({ onUpload }: RadiographUploadProps) {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImage(imageData);
        if (onUpload) {
          onUpload(imageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (onUpload) {
      onUpload(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-lg bg-[#E8F8FA]">
          <Camera className="size-4 text-[#078F9E]" />
        </div>
        <h2 className="text-base font-bold text-slate-900">Radiograph</h2>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {image ? (
        <div className="relative">
          <img
            src={image}
            alt="Radiograph"
            className="w-full rounded-lg border border-slate-200"
            style={{ maxHeight: '200px', objectFit: 'contain' }}
          />
          <button
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleUploadClick}
          className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 py-6 transition hover:border-[#078F9E] hover:bg-[#F8FAFC]"
        >
          <Upload className="size-8 text-slate-400" />
          <p className="mt-2 text-sm text-slate-500">Click to upload radiograph</p>
          <p className="text-xs text-slate-400">PNG, JPG, JPEG</p>
        </button>
      )}
    </div>
  );
}
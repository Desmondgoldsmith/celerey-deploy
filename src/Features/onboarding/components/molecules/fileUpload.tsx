import { useState, useRef, useEffect } from "react";
import { FileCheck2, Upload, X } from "lucide-react";

interface FileUploadProps {
  label: string;
  value: {
    file: File | null;
    fileName: string;
    uploadStatus: "idle" | "uploading" | "completed" | "error";
  };
  onChange: (value: {
    file: File | null;
    fileName: string;
    uploadStatus: "idle" | "uploading" | "completed" | "error";
  }) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  value,
  onChange,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const simulateUpload = (file: File) => {
    setUploadProgress(0);
    onChange({
      file,
      fileName: file.name,
      uploadStatus: "uploading",
    });

    progressIntervalRef.current = setInterval(() => {
      setUploadProgress((currentProgress) => {
        if (currentProgress >= 100) {
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
          onChange({
            file,
            fileName: file.name,
            uploadStatus: "completed",
          });
          return 100;
        }
        return currentProgress + 10;
      });
    }, 200);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    simulateUpload(file);
  };

  const handleRemoveFile = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    onChange({
      file: null,
      fileName: "",
      uploadStatus: "idle",
    });
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (value.uploadStatus === "idle") {
    return (
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">Click to upload {label}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <FileCheck2 className="h-5 w-5 text-navyLight" />
          <span className="text-sm font-medium">{value.fileName}</span>
        </div>
        <button
          onClick={handleRemoveFile}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-navyLight h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${uploadProgress}%` }}
        />
      </div>

      {value.uploadStatus === "completed" && (
        <p className="text-sm text-navy mt-2">Upload complete</p>
      )}
    </div>
  );
};

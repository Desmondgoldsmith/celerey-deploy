import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileCheck2, Upload, X } from "lucide-react";
import { IdentificationScreenProps } from "../../types";

export const IdentificationScreen: React.FC<IdentificationScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const identificationTypes = [
    { value: "drivers-license", label: "Driver's License" },
    { value: "id-card", label: "ID Card" },
    { value: "passport", label: "Passport" },
  ];

  const handleTypeSelect = (type: string) => {
    onChange({
      ...value,
      type,
      uploadStatus: "idle",
    });
  };

  const simulateUpload = (file: File) => {
    setUploadProgress(0);
    onChange({
      ...value,
      uploadStatus: "uploading",
      file,
      fileName: file.name,
    });

    const interval = setInterval(() => {
      setUploadProgress((currentProgress) => {
        const newProgress = currentProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          onChange({
            ...value,
            uploadStatus: "completed",
            file,
            fileName: file.name,
          });
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    simulateUpload(file);
  };

  const handleRemoveFile = () => {
    onChange({
      ...value,
      file: null,
      fileName: "",
      uploadStatus: "idle",
    });
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-4">
        Thank you for submitting your personal details. We now need to verify
        your identification
      </h1>

      <p className="text-gray-600 mb-8">
        Upload an image of an identification document, <br></br>
        such as Driver&apos;s License, ID Card or Passport
      </p>

      <div className="w-full max-w-md mx-auto space-y-6">
        <Select value={value.type} onValueChange={handleTypeSelect}>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select Identification Type" />
          </SelectTrigger>
          <SelectContent>
            {identificationTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {value.type && value.uploadStatus === "idle" && (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Click to upload your {value.type.replace("-", " ")}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}

        {(value.uploadStatus === "uploading" ||
          value.uploadStatus === "completed") && (
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
        )}

        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button
            onClick={onContinue}
            className="flex-1 bg-navy hover:bg-navyLight text-white"
            disabled={value.uploadStatus !== "completed"}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

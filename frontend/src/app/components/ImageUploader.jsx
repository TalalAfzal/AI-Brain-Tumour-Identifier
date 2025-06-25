"use client";

import Image from "next/image";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
      setPrediction(null);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result);
    } catch (err) {
      console.error("Error submitting image:", err);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    setPrediction(null);
    setError(null);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <div className="flex flex-col items-center justify-center bg-transparent p-4 border-2 border-dashed border-gray-300 rounded-lg w-full aspect-square relative overflow-hidden">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
        >
          {!selectedImage ? (
            <>
              <FaPlus className="text-4xl text-gray-700 mb-4" />
              <span className="text-gray-500">Upload an Image</span>
            </>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Uploaded Preview"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
        </label>

        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {selectedImage && !prediction && (
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-teal-600 hover:bg-teal-700 p-2 px-4 cursor-pointer rounded-lg text-white font-semibold transition duration-200 ease-in-out w-full"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <FaSpinner className="animate-spin mr-2" /> Analyzing...
            </span>
          ) : (
            "Analyze Image"
          )}
        </button>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full">
          {error}
        </div>
      )}

      {prediction && (
        <div className="bg-gray-800 p-4 rounded-lg w-full">
          <h3 className="text-xl font-bold mb-2">{prediction.prediction}</h3>
          <p className="text-gray-400 mb-4">
            Confidence: {Math.round(prediction.probability * 100)}%
          </p>
          <button
            onClick={resetUpload}
            className="bg-gray-700 hover:bg-gray-600 p-2 cursor-pointer rounded-lg text-white font-semibold transition duration-200 ease-in-out w-full"
          >
            Upload New Image
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { CheckCircle } from "lucide-react"; 

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center relative">
        <div className="flex justify-center mb-4">
          <div className="bg-orange-100 rounded-full p-3">
            <CheckCircle className="text-orange-500 w-6 h-6" />
          </div>
        </div>
        <h2 className="text-lg font-semibold">Your Message Has Been Sent!</h2>
        <p className="text-gray-600 mt-2">
          We&apos;ve received your information and our expert team will contact you soon to discuss your needs.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;

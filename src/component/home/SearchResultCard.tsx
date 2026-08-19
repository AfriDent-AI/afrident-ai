// SearchResultCard.tsx
import { X } from "lucide-react";

interface SearchResultCardProps {
  title: string;
  diagnosis: string;
  symptoms: string[];
  treatment: string[];
  recommendation: string;
  onClose: () => void;
}

export function SearchResultCard({
  title,
  diagnosis,
  symptoms,
  treatment,
  recommendation,
  onClose,
}: SearchResultCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#00A8B5] px-6 py-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close results"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Diagnosis */}
        <div>
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-2">
            Possible Diagnosis
          </h4>
          <p className="text-gray-800 text-lg font-medium">{diagnosis}</p>
        </div>

        {/* Symptoms */}
        <div>
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-2">
            Symptoms
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>

        {/* Treatment */}
        <div>
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-2">
            Treatment
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {treatment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Recommendation */}
        <div className="bg-blue-50 border-l-4 border-[#00A8B5] p-4 rounded-r-lg">
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-1">
            Recommendation
          </h4>
          <p className="text-gray-800">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
// DentalXrayResultCard.tsx - New component for image analysis
interface DentalXrayResultCardProps {
  onClose: () => void;
}

export function DentalXrayResultCard({ onClose }: DentalXrayResultCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#00A8B5] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦷</span>
          <h3 className="text-xl font-bold text-white">Dental Image Analysis</h3>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close results"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Possible Findings */}
        <div>
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-3">
            Possible Findings
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Existing dental fillings/restorations</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Possible tooth decay beneath/around a restoration</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>No obvious large abscess visible on this image</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Bone levels appear generally maintained</span>
            </li>
          </ul>
        </div>

        {/* Possible Diagnosis */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-1">
            Possible Diagnosis
          </h4>
          <p className="text-gray-800">
            Findings may be consistent with dental caries/restorative changes, but an X-ray alone cannot confirm a diagnosis.
          </p>
        </div>

        {/* Recommended Treatment */}
        <div>
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-3">
            Recommended Treatment
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Clinical dental examination</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Check the restored teeth for recurrent decay</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Filling/restoration if decay is confirmed</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-[#00A8B5] mt-1">•</span>
              <span>Root canal treatment only if there is evidence of significant pulp involvement</span>
            </li>
          </ul>
        </div>

        {/* Recommendation */}
        <div className="bg-yellow-50 border-l-4 border-[#00A8B5] p-4 rounded-r-lg">
          <h4 className="text-sm font-semibold text-[#00A8B5] uppercase tracking-wider mb-1">
            Recommendation
          </h4>
          <p className="text-gray-800">
            Have a dentist correlate the X-ray with symptoms and an oral examination before deciding on treatment.
          </p>
        </div>
      </div>
    </div>
  );
}
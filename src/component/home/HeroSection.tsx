// HeroSection.tsx - Updated with dental X-ray result
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBars";
import heroWomenImage from "../../assets/Hero_women.png";
import circleImage from "../../assets/circle.png";
import { services } from "@/data/Service";
import { ServiceCard } from "./ServiceCard";
import { SearchResultCard } from "./SearchResultCard";
import { SearchLoading } from "../searchLoading";
import { DentalXrayResultCard } from '@/component/home/DentalXrayCard'

// ... keep all SEARCH_ANSWERS the same ...
const SEARCH_ANSWERS = [
  {
    keywords: ["cavity", "cavities", "tooth decay", "decay", "hole in tooth", "tooth hole"],
    title: "Symptoms of a Cavity",
    diagnosis: "Dental cavity / tooth decay",
    symptoms: [
      "Tooth sensitivity",
      "Toothache",
      "White, brown, or black spots",
      "Visible hole in the tooth",
      "Pain when eating or chewing"
    ],
    treatment: [
      "Early decay → Fluoride treatment",
      "Cavity → Dental filling",
      "Deep decay → Root canal",
      "Severely damaged → Extraction"
    ],
    recommendation: "See a dentist for an examination and X-ray if needed."
  },
  {
    keywords: ["severe tooth pain", "tooth pain at night", "night tooth pain", "throbbing tooth", "pulp infection", "dental abscess", "abscess", "cracked tooth"],
    title: "Severe Tooth Pain ",
    diagnosis: "Deep cavity, Pulp inflammation/infection, Dental abscess, or Cracked tooth",
    symptoms: [
      "Severe or throbbing pain",
      "Sensitivity to hot/cold",
      "Swelling",
      "Pain when biting"
    ],
    treatment: [
      "Cavity → Filling",
      "Pulp infection → Root canal",
      "Abscess → Dental treatment ± antibiotics",
      "Cracked tooth → Restoration or extraction"
    ],
    recommendation: "Arrange a dental visit promptly. Seek urgent care if you have facial swelling, fever, or difficulty swallowing/breathing."
  },
  {
    keywords: ["sensitive", "sensitivity", "hot", "cold", "temperature"],
    title: "Tooth Sensitivity",
    diagnosis: "Dentin hypersensitivity, Enamel erosion, or Gum recession",
    symptoms: [
      "Sharp pain when consuming hot or cold foods/drinks",
      "Pain when eating sweet or acidic foods",
      "Discomfort when brushing teeth",
      "Pain when breathing cold air"
    ],
    treatment: [
      "Desensitizing toothpaste",
      "Fluoride gel/varnish application",
      "Dental bonding for exposed roots",
      "Gum grafting for severe recession"
    ],
    recommendation: "Use desensitizing toothpaste with potassium nitrate. Avoid acidic foods and drinks. Consult your dentist for a proper diagnosis."
  },
  {
    keywords: ["swollen gum", "swollen gums", "gum swelling", "gum infection", "periodontitis", "gingivitis"],
    title: "Swollen or Bleeding Gums",
    diagnosis: "Gingivitis, Periodontitis, or Gum infection",
    symptoms: [
      "Swollen, red, or tender gums",
      "Bleeding when brushing or flossing",
      "Receding gums",
      "Persistent bad breath",
      "Loose teeth"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved oral hygiene",
      "Antibacterial mouthwash",
      "Scaling and root planing (deep cleaning)",
      "Periodontal surgery for severe cases"
    ],
    recommendation: "Improve your oral hygiene routine. Visit your dentist for a professional cleaning. Seek immediate care if you have severe pain or swelling."
  },
  {
    keywords: ["wisdom tooth", "wisdom teeth", "impacted wisdom", "molar pain"],
    title: "Wisdom Tooth Problems",
    diagnosis: "Impacted wisdom tooth, Pericoronitis, or Infection",
    symptoms: [
      "Pain at the back of the jaw",
      "Swollen or tender gums",
      "Difficulty opening mouth",
      "Bad breath or unpleasant taste",
      "Headache or earache"
    ],
    treatment: [
      "Antibiotics for infection",
      "Pain relief medication",
      "Surgical extraction if impacted",
      "Improved cleaning around the tooth"
    ],
    recommendation: "Visit your dentist for an X-ray to assess the position of your wisdom teeth. Prompt treatment can prevent complications."
  }
];
export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStep, setRecordingStep] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [voiceResult, setVoiceResult] = useState<string | null>(null);
  const [cameraResult, setCameraResult] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [searchAnswer, setSearchAnswer] = useState<typeof SEARCH_ANSWERS[0] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Processing your request...");
  const [showXrayResult, setShowXrayResult] = useState(false);
  const navigate = useNavigate();

  // Check if the search query matches any predefined answers
  const getSearchAnswer = (query: string): typeof SEARCH_ANSWERS[0] | null => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return null;

    for (const answer of SEARCH_ANSWERS) {
      const matched = answer.keywords.some(keyword => 
        normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
      );
      if (matched) {
        return answer;
      }
    }
    return null;
  };

  // Filter services based on search query - ONLY if no answer is found
  const filteredServices = useMemo(() => {
    if (getSearchAnswer(searchQuery)) {
      return [];
    }
    
    if (!searchQuery.trim()) {
      return services;
    }
    return services.filter((service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [searchQuery]);

  // Handle search submission with loading animation
  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setShowLoading(true);
    setLoadingMessage("Searching for: " + searchQuery);
    setSearchAnswer(null);
    setActiveService(null);
    setShowResult(false);
    setShowXrayResult(false);

    const delay = 800 + Math.random() * 700;
    
    setTimeout(() => {
      const answer = getSearchAnswer(searchQuery);
      
      if (answer) {
        setSearchAnswer(answer);
        setShowResult(true);
      } else {
        setSearchAnswer(null);
        setShowResult(true);
      }
      
      setIsSearching(false);
      setShowLoading(false);
    }, delay);
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearchSubmit();
    }
  };

  // Handle voice recording with loading animation
  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingStep(0);
      setVoiceResult(null);
      setActiveService(null);
      setShowResult(false);
      setSearchQuery("");
      setSearchAnswer(null);
      setShowLoading(false);
      setShowXrayResult(false);

      setTimeout(() => {
        setRecordingStep(1);
        setIsRecording(false);
        
        setShowLoading(true);
        setLoadingMessage("Processing voice input...");
        
        setTimeout(() => {
          const service = services.find(s => s.id === "ai-assistant");
          if (service) {
            setActiveService(service);
            setVoiceResult("Showing Multilingual AI Assistant");
            setShowResult(true);
          }
          setShowLoading(false);
        }, 1200);
      }, 1500);
    } else {
      setIsRecording(false);
      setRecordingStep(2);
      
      setShowLoading(true);
      setLoadingMessage("Processing voice input...");
      
      setTimeout(() => {
        const service = services.find(s => s.id === "education");
        if (service) {
          setActiveService(service);
          setVoiceResult("Showing Patient Oral Health Education");
          setShowResult(true);
          setSearchQuery("");
          setSearchAnswer(null);
        }
        setShowLoading(false);
      }, 1500);
    }
  };

  // Handle camera/image upload with loading animation
  const handleCameraClick = (file?: File) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setIsProcessingImage(true);
      setActiveService(null);
      setCameraResult(null);
      setShowResult(false);
      setSearchQuery("");
      setSearchAnswer(null);
      setShowLoading(false);
      setShowXrayResult(false);

      // Show loading animation for image processing
      setShowLoading(true);
      setLoadingMessage("Analyzing dental X-ray...");

      setTimeout(() => {
        setIsProcessingImage(false);
        // Show the X-ray analysis result instead of service
        setShowXrayResult(true);
        setShowResult(true);
        // setCameraResult("Image analyzed - Dental X-ray results ready");
        setShowLoading(false);
      }, 1700);
    }
  };



  // Full clear (including search query)
  const fullClear = () => {
    setActiveService(null);
    setVoiceResult(null);
    setCameraResult(null);
    setUploadedImage(null);
    setSearchQuery("");
    setShowResult(false);
    setIsRecording(false);
    setIsProcessingImage(false);
    setSearchAnswer(null);
    setShowLoading(false);
    setIsSearching(false);
    setShowXrayResult(false);
  };

  useEffect(() => {
    return () => {
      setIsRecording(false);
      setRecordingStep(0);
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

  return (
    <section className="relative min-h-[screen] overflow-visible pb-20">
      {/* Background image */}
      <div className="absolute inset-0 flex">
        <img
          src={heroWomenImage}
          alt="Hero background"
          className="h-full w-full object-cover transform mt-20"
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto grid max-w-560 items-center -mt-25 gap-8 px-6 py-2 lg:grid-cols-[1fr_1.1fr_0.8fr] lg:px-10 min-h-[700px]">
        <div className="z-10 -mt-32">
          <h1 className="max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-black lg:text-3xl">
            Pan-African Multilingual AI Ecosystem for Oral Health
          </h1>
          <p className="mt-2 text-xl font-bold text-[#00A8B5]">
            Welcome to AfriDent-AI!
          </p>
          <p className="mt-3 max-w-100 text-base font-bold leading-relaxed text-black/50">
            Supporting oral healthcare across Africa through multilingual
            artificial intelligence.
          </p>

          <div className="mt-4">
            <SearchBar
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                if (value !== searchQuery) {
                  setShowResult(false);
                  setSearchAnswer(null);
                  setActiveService(null);
                  setVoiceResult(null);
                  setCameraResult(null);
                  setShowXrayResult(false);
                }
              }}
              // onKeyD6wn={handleKeyDown}
              onClear={fullClear}
              onMicClick={handleMicClick}
              onCameraClick={handleCameraClick}
              onSearchSubmit={handleSearchSubmit}
              isRecording={isRecording}
              isLoading={isSearching || showLoading}
            />

            {/* Recording status indicator */}
            {isRecording && (
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="h-4 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="h-6 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '200ms' }} />
                  <div className="h-8 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '400ms' }} />
                  <div className="h-6 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '600ms' }} />
                  <div className="h-4 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '800ms' }} />
                </div>
                <span className="text-sm text-red-500 animate-pulse">
                  Recording... {recordingStep === 0 ? 'Listening' : 'Processing'}
                </span>
              </div>
            )}

            {/* Uploaded image preview */}
            {uploadedImage && !isProcessingImage && showResult && !showLoading && (
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="h-12 w-12 object-cover rounded-lg border border-gray-200"
                />
                <span className="text-sm text-green-600">
                  Image uploaded successfully!
                </span>
              </div>
            )}

            {/* Voice result status */}
            {voiceResult && !isRecording && !isProcessingImage && showResult && !showLoading && (
              <div className="mt-3 flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-700">{voiceResult}</span>
                </div>
                <button
                  onClick={fullClear}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Close results"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}

            {/* Camera result status */}
            {cameraResult && !isProcessingImage && showResult && !showLoading && (
              <div className="mt-3 flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-700">{cameraResult}</span>
                </div>
                <button
                  onClick={fullClear}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Close results"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div />
        <div className="relative flex size-67 mx-10 items-center -mt-10 justify-center">
          <div className="absolute inset-7 rounded-full" />
          <div className="z-10 text-center text-white">
            <img src={circleImage} alt="Circle decoration" />
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      {showLoading && (
        <div className="relative z-50 px-6 pb-10 lg:px-10 -mt-32">
          <div className="mx-auto max-w-340">
            <SearchLoading searchQuery={loadingMessage} />
          </div>
        </div>
      )}

      {/* Show Dental X-ray Result - For Image Upload */}
      {!showLoading && showXrayResult && showResult && (
        <div className="relative z-20 px-6 pb-10 lg:px-10 -mt-40">
          <div className="mx-auto max-w-340">
            <DentalXrayResultCard onClose={fullClear} />
          </div>
        </div>
      )}

      {/* Show Search Answer (Predefined answers) */}
      {!showLoading && searchAnswer && showResult && !showXrayResult && (
        <div className="relative z-20 px-6 pb-10 lg:px-10 -mt-40">
          <div className="mx-auto max-w-340">
            <SearchResultCard 
              title={searchAnswer.title}
              diagnosis={searchAnswer.diagnosis}
              symptoms={searchAnswer.symptoms}
              treatment={searchAnswer.treatment}
              recommendation={searchAnswer.recommendation}
              onClose={fullClear}
            />
          </div>
        </div>
      )}

      {/* Show Filtered Services */}
      {!showLoading && searchQuery && !searchAnswer && showResult && !showXrayResult && (
        <div className="relative z-20 -mt-50 px-6 pb-10 lg:px-10">
          <div className="mx-auto max-w-340">
            {filteredServices.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    items={service.items}
                    icon={service.icon}
                    path={service.path}
                  />
                ))}
              </div>
            ) : (
              <div className="py-8 text-center justify-center text-red-400 bg-white/45 h-60 w-full">
                No services found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Display Active Service Card (from Voice/Camera) */}
      {!showLoading && activeService && showResult && !searchQuery && !searchAnswer && !showXrayResult && (
        <div className="relative z-20 px-6 lg:px-10 -mt-40">
          <div className="mx-auto max-w-340">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <ServiceCard
                key={activeService.id}
                title={activeService.title}
                items={activeService.items}
                icon={activeService.icon}
                path={activeService.path}
              />
            </div>
          </div>
        </div>
      )}

      {/* Show All Services */}
      {!showLoading && !activeService && !searchQuery && !showResult && !searchAnswer && !showXrayResult && (
        <div className="relative z-20 -mt-64 px-6 pb-10 lg:px-10">
          <div className="mx-auto max-w-340">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  items={service.items}
                  icon={service.icon}
                  path={service.path}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, UsersRound, CheckCircle } from "lucide-react";
import { ClinicalHeader } from "@/component/clinical/ClinicalHeader";
import { PatientInformation, type PatientData } from "@/component/clinical/PatienInformation";
import { AIRecommendation } from "@/component/clinical/AIRecommendation";
import { RadiographUpload } from "@/component/clinical/RadiographUpload";
import { PeriodontalChart } from "@/component/clinical/PeriodontalChart";
import { ClinicalNotes } from "@/component/clinical/ClinicalNotes";
import { ClinicalActionBar } from "@/component/clinical/ClinicalActionBar";
import allBg from '@/assets/all bg.png';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  location: string;
  email: string;
  experience: string;
}

interface SubmittedOpinion {
  text: string;
  doctor: Doctor;
  timestamp: string;
}

export default function ClinicalDecisionSupportPage() {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [radiographImage, setRadiographImage] = useState<string | null>(null);
  const [clinicalNotes, setClinicalNotes] = useState<string>("");
  const [periodontalData, setPeriodontalData] = useState<any>(null);
  const [submittedOpinion, setSubmittedOpinion] = useState<SubmittedOpinion | null>(null);

  const handlePatientSubmit = (data: PatientData) => {
    setPatientData(data);
    setShowRecommendations(true);
    setIsThinking(true);
    
    setTimeout(() => {
      setIsThinking(false);
    }, 3000);
  };

  const handleRadiographUpload = (image: string | null) => {
    setRadiographImage(image);
  };

  const handleClinicalNotesChange = (notes: string) => {
    setClinicalNotes(notes);
  };

  const handlePeriodontalChange = (data: any) => {
    setPeriodontalData(data);
  };

  const handleOpinionSubmit = (opinionText: string, doctor: Doctor) => {
    setSubmittedOpinion({
      text: opinionText,
      doctor: doctor,
      timestamp: new Date().toISOString(),
    });
  };

  const handleGenerateReport = () => {
    const reportData = {
      patient: patientData,
      recommendations: showRecommendations ? patientData : null,
      radiograph: radiographImage,
      radiographImage: radiographImage,
      clinicalNotes: clinicalNotes,
      notes: clinicalNotes,
      periodontal: periodontalData,
      requestedOpinion: submittedOpinion?.text || null,
      requestedDoctor: submittedOpinion?.doctor || null,
      generatedAt: new Date().toISOString(),
    };

    navigate("/dentists/report", { state: { reportData } });
  };

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${allBg})` }}
    >
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[38%] top-[90px] h-[380px] w-[500px] opacity-[0.08]">
          <div className="h-full w-full bg-[radial-gradient(circle,#00B8D4_1.5px,transparent_1.5px)] [background-size:7px_7px]" />
        </div>
        <div className="absolute bottom-0 left-0 h-[300px] w-full bg-[radial-gradient(circle_at_20%_100%,#B7E8FF,transparent_45%)]" />
      </div>

      <section className="mx-auto max-w-[1600px] px-5 pb-8 pt-6 lg:px-6">
        <div className="flex items-start gap-16">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#078F9E]"
          >
            <ArrowLeft className="size-4" />
            Home
          </Link>
          <ClinicalHeader />
        </div>

        {/* Main dashboard */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[350px_minmax(0,1fr)_320px]">
          {/* Left */}
          <PatientInformation onSubmit={handlePatientSubmit} />

          {/* Center */}
          <AIRecommendation 
            patientData={patientData} 
            isVisible={showRecommendations}
          />

          {/* Right */}
          <div className="space-y-5">
            <RadiographUpload onUpload={handleRadiographUpload} />
            <PeriodontalChart  />
            <ClinicalNotes onChange={handleClinicalNotesChange} />
          </div>
        </div>

        {/* Submitted Opinion Display - only shows after opinion is submitted */}
        {submittedOpinion && (
          <div className="mt-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#F0EAFE]">
                    <UsersRound className="size-4 text-[#9654E5]" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    Second Opinion Requested
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                    <CheckCircle className="size-3" />
                    Sent
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  {new Date(submittedOpinion.timestamp).toLocaleString()}
                </span>
              </div>

              {/* Doctor Info */}
              <div className="mb-3 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#9654E5] text-sm font-bold text-white">
                  {submittedOpinion.doctor.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    {submittedOpinion.doctor.name}
                  </p>
                  <p className="text-xs text-[#9654E5]">
                    {submittedOpinion.doctor.specialty}
                  </p>
                  <p className="text-xs text-slate-500">
                    {submittedOpinion.doctor.hospital}
                  </p>
                </div>
              </div>

              {/* Opinion Text */}
              <div className="rounded-lg border-l-4 border-[#9654E5] bg-[#FBF9FF] p-4">
                <p className="text-sm text-slate-700 whitespace-pre-wrap">
                  {submittedOpinion.text}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9654E5]"></span>
                  Opinion request sent to {submittedOpinion.doctor.name}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <ClinicalActionBar 
          onGenerateReport={handleGenerateReport}
          hasPatientData={!!patientData}
          onOpinionSubmit={handleOpinionSubmit}
        />
      </section>
    </main>
  );
}
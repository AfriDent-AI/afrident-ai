import {
  Bookmark,
  FileDown,
  FileText,
  UsersRound,
  X,
  Stethoscope,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ClinicalActionBarProps {
  onGenerateReport?: () => void;
  hasPatientData?: boolean;
  onOpinionSubmit?: (opinion: string, doctor: Doctor) => void;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  location: string;
  email: string;
  experience: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Oral & Maxillofacial Surgeon",
    hospital: "Addis Dental Medical Center",
    location: "Addis Ababa, Ethiopia",
    email: "sarah.mitchell@example.com",
    experience: "12 years experience",
  },
  {
    id: 2,
    name: "Dr. Daniel Bekele",
    specialty: "Periodontist",
    hospital: "Dental Care Hospital",
    location: "Addis Ababa, Ethiopia",
    email: "daniel.bekele@example.com",
    experience: "9 years experience",
  },
  {
    id: 3,
    name: "Dr. Hana Tesfaye",
    specialty: "Prosthodontist",
    hospital: "Smile Dental Clinic",
    location: "Addis Ababa, Ethiopia",
    email: "hana.tesfaye@example.com",
    experience: "10 years experience",
  },
  {
    id: 4,
    name: "Dr. Michael Adams",
    specialty: "General Dentist",
    hospital: "International Dental Center",
    location: "Addis Ababa, Ethiopia",
    email: "michael.adams@example.com",
    experience: "15 years experience",
  },
];

export function ClinicalActionBar({
  onGenerateReport,
  hasPatientData = false,
  onOpinionSubmit,
}: ClinicalActionBarProps) {
  const navigate = useNavigate();

  const [isOpinionOpen, setIsOpinionOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [requestSent, setRequestSent] = useState(false);
  const [opinionText, setOpinionText] = useState("");

  const handleOpenOpinion = () => {
    setSelectedDoctor(null);
    setRequestSent(false);
    setOpinionText("");
    setIsOpinionOpen(true);
  };

  const handleCloseOpinion = () => {
    setSelectedDoctor(null);
    setRequestSent(false);
    setOpinionText("");
    setIsOpinionOpen(false);
  };

  const handleRequestOpinion = () => {
    if (!selectedDoctor || !opinionText.trim()) return;

    // Pass the opinion to parent component
    if (onOpinionSubmit) {
      onOpinionSubmit(opinionText.trim(), selectedDoctor);
    }

    // Temporary action until backend is connected
    console.log("Second opinion requested from:", selectedDoctor);
    console.log("Opinion text:", opinionText);

    setRequestSent(true);

    // Clear and close the form after showing success
    setTimeout(() => {
      setSelectedDoctor(null);
      setOpinionText("");
      setRequestSent(false);
      setIsOpinionOpen(false);
    }, 1500);
  };

  const actions = [
    {
      label: "Generate Report",
      icon: FileText,
      className: "bg-[#078F9E] hover:bg-[#067984]",
      action: () => {
        if (onGenerateReport) {
          onGenerateReport();
        } else {
          navigate("dentists/report");
        }
      },
    },
    {
      label: "Export PDF",
      icon: FileDown,
      className: "bg-[#0875E1] hover:bg-[#0661BD]",
      action: () => console.log("Export PDF"),
    },
    {
      label: "Save Case",
      icon: Bookmark,
      className: "bg-[#2E9B5F] hover:bg-[#268450]",
      action: () => console.log("Save case"),
    },
    {
      label: "Second Opinion",
      icon: UsersRound,
      className: "bg-[#9654E5] hover:bg-[#8145C8]",
      action: handleOpenOpinion,
    },
  ];

  return (
    <>
      {/* Action Bar */}
      <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Button
                key={action.label}
                type="button"
                onClick={action.action}
                className={`h-9 text-xs font-semibold text-white ${action.className}`}
                disabled={
                  action.label === "Generate Report" && !hasPatientData
                }
                title={
                  action.label === "Generate Report" && !hasPatientData
                    ? "Please submit patient information first"
                    : ""
                }
              >
                <Icon className="size-5" />
                {action.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Second Opinion Modal */}
      {isOpinionOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#F0EAFE]">
                    <UsersRound className="size-5 text-[#9654E5]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#203E62]">
                    Request Second Opinion
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Select a dental specialist and provide the clinical question
                  for an independent opinion.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseOpinion}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 px-6 py-5">
              {/* Doctor Selection */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Select Doctor
                </label>
                <select
                  value={selectedDoctor?.id ?? ""}
                  onChange={(event) => {
                    const doctor = doctors.find(
                      (item) => item.id === Number(event.target.value)
                    );
                    setSelectedDoctor(doctor ?? null);
                  }}
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-[#9654E5] focus:ring-2 focus:ring-[#9654E5]/10"
                >
                  <option value="">Select a doctor...</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} — {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Opinion Text Area */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Opinion Request <span className="text-red-500">*</span>
                </label>
                <Textarea
                  value={opinionText}
                  onChange={(e) => setOpinionText(e.target.value)}
                  placeholder="Describe the specific clinical question or case details you need a second opinion on..."
                  className="min-h-[100px] resize-none text-sm p-3"
                  disabled={requestSent}
                />
                <div className="mt-1 flex justify-end text-xs text-slate-400">
                  {opinionText.length} characters
                </div>
              </div>

              {/* Selected Doctor Details */}
              {selectedDoctor && (
                <div className="rounded-xl border border-[#E5D9FA] bg-[#FBF9FF] p-4">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#9654E5] text-lg font-bold text-white">
                      {selectedDoctor.name
                        .replace("Dr. ", "")
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-[#203E62]">
                        {selectedDoctor.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#9654E5]">
                        {selectedDoctor.specialty}
                      </p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Stethoscope className="size-3.5 shrink-0" />
                          <span>{selectedDoctor.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <MapPin className="size-3.5 shrink-0" />
                          <span>{selectedDoctor.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail className="size-3.5 shrink-0" />
                          <span>{selectedDoctor.email}</span>
                        </div>
                      </div>
                      <div className="mt-3 border-t border-[#E5D9FA] pt-3">
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">
                            Organization:
                          </span>{" "}
                          {selectedDoctor.hospital}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Request Info */}
              {selectedDoctor && opinionText.trim() && !requestSent && (
                <div className="rounded-lg bg-slate-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-slate-500">
                    The selected doctor will receive a request to review
                    the clinical case and provide a second opinion based on
                    your question.
                  </p>
                </div>
              )}

              {/* Success */}
              {requestSent && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3">
                  <p className="text-sm font-semibold text-green-700">
                    ✓ Second opinion request sent successfully!
                  </p>
                  <p className="mt-1 text-xs text-green-600">
                    The request has been sent to {selectedDoctor?.name}.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseOpinion}
                className="h-10 px-5 text-sm"
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={!selectedDoctor || !opinionText.trim() || requestSent}
                onClick={handleRequestOpinion}
                className="h-10 bg-[#9654E5] px-5 text-sm font-semibold text-white hover:bg-[#8145C8] disabled:opacity-50"
              >
                <Send className="mr-2 size-4" />
                {requestSent ? "Sending..." : "Request Opinion"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import { useState } from "react";
import {
  UserRound,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import patientIcon from '@/assets/patient.png';

interface PatientInformationProps {
  onSubmit?: (data: PatientData) => void;
}

export interface PatientData {
  age: string;
  gender: string;
  medicalHistory: string;
  chiefComplaint: string;
  pain: string;
  swelling: string;
  mobility: string;
}

export function PatientInformation({ onSubmit }: PatientInformationProps) {
  const [gender, setGender] = useState("Male");
  const [pain, setPain] = useState("Mild");
  const [swelling, setSwelling] = useState("Yes");
  const [mobility, setMobility] = useState("Moderate");
  const [age, setAge] = useState("34");
  const [medicalHistory, setMedicalHistory] = useState("No known systemic illness.\nNot on any medication");
  const [chiefComplaint, setChiefComplaint] = useState("Severe tooth pain and facial swelling for 2 days");

  const handleSubmit = () => {
    const patientData: PatientData = {
      age,
      gender,
      medicalHistory,
      chiefComplaint,
      pain,
      swelling,
      mobility,
    };
    
    if (onSubmit) {
      onSubmit(patientData);
    }
    
    console.log("Patient data submitted:", patientData);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <img src={patientIcon} className="size-8 text-[#0875E1]" />

        <h2 className="text-xl font-bold text-slate-900">
          Patient Information
        </h2>
      </div>

      {/* Age */}
      <div className="mb-4">
        <label className="mb-2 block text-base font-semibold text-slate-900">
          Age
        </label>

        <div className="relative">
          <Input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="h-9 pr-14 text-xs"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
            Years
          </span>
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="mb-2 block text-base font-semibold text-slate-900">
          Gender
        </label>

        <div className="flex gap-3">
          {["Male", "Female"].map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => setGender(item)}
              variant="outline"
              className={`h-8 flex-1 text-sm ${
                gender === item
                  ? "border-[#078F9E] bg-[#078F9E] text-white hover:bg-[#067984] hover:text-white"
                  : ""
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Medical history */}
      <div className="mb-4">
        <label className="mb-2 block text-base font-semibold text-slate-900">
          Medical History
        </label>

        <Textarea
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
          className="min-h-[55px] resize-none text-base p-3"
        />
      </div>

      {/* Chief complaint */}
      <div className="mb-5">
        <label className="mb-2 block text-base font-semibold text-slate-900">
          Chief Complaint
        </label>

        <Textarea
          value={chiefComplaint}
          onChange={(e) => setChiefComplaint(e.target.value)}
          className="min-h-[55px] resize-none text-base p-3"
        />
      </div>

      {/* Clinical findings */}
      <h3 className="mb-4 text-xl font-bold text-slate-900">
        Clinical Findings
      </h3>

      {/* Pain */}
      <FindingRow label="Pain">
        {["Mild", "Moderate", "Severe"].map((item) => (
          <FindingButton
            key={item}
            active={pain === item}
            onClick={() => setPain(item)}
          >
            {item}
          </FindingButton>
        ))}
      </FindingRow>

      {/* Swelling */}
      <FindingRow label="Swelling">
        {["No", "Yes"].map((item) => (
          <FindingButton
            key={item}
            active={swelling === item}
            onClick={() => setSwelling(item)}
          >
            {item}
          </FindingButton>
        ))}
      </FindingRow>

      {/* Mobility */}
      <FindingRow label="Mobility">
        {["None", "Slight", "Moderate", "Severe"].map((item) => (
          <FindingButton
            key={item}
            active={mobility === item}
            onClick={() => setMobility(item)}
          >
            {item}
          </FindingButton>
        ))}
      </FindingRow>

      {/* Submit button */}
      <Button
        variant="outline"
        type="button"
        onClick={handleSubmit}
        className="mt-3 h-8 w-full text-sm text-[#078F9E] hover:bg-[#EAF9FB]"
      >
        Ask Ai Recomendation
      </Button>
    </section>
  );
}

function FindingRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="mb-2 text-base font-semibold text-slate-700">
        {label}
      </div>

      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

function FindingButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-3 py-1.5 text-[11.5px] font-semibold transition ${
        active
          ? "border-[#078F9E] bg-[#078F9E] text-white"
          : "border-slate-300 bg-white text-slate-900 hover:border-[#078F9E] hover:text-[#078F9E]"
      }`}
    >
      {children}
    </button>
  );
}
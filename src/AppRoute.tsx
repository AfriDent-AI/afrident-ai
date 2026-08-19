import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/auth/LoginPage";
import SignupPage from "./page/auth/SignUpPage";
import MainLayout from "./MainOutlet";
import { HeroSection } from "./component/home/HeroSection";
import AIAssistantPage from "./page/AIAssistantPage";
import PatientEducationPage from "./page/PatientEducationPage";
import ClinicalDecisionSupportPage from "./page/ClinicalDecisionSupportPage";
import DentalResearchPolicyPage from "./page/DentalResearchPolicyPage";
import ResearchReportPage from "./page/ResearchReportPage";
import ClinicalReportPage from "./page/ClinicalReportPage";

export default function AppRoutes() {
  return (
    <Routes>

      {/* AUTH — NO HEADER, NO FOOTER */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />

      {/* WEBSITE — HAS HEADER + FOOTER */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<HeroSection />} />

        {/*  other pages */}

        <Route
          path="/assistant"
          element={<AIAssistantPage />}
        />

        <Route
          path="/patients"
          element={<PatientEducationPage />}
        />

        <Route
          path="/dentists"
          element={<ClinicalDecisionSupportPage />}
        />
        <Route
          path="/dentists/report"
          element={<ClinicalReportPage />}
        />
        <Route
          path="/researchers"
          element={<DentalResearchPolicyPage />}
        />
        <Route
          path="/researchers/report"
          element={<ResearchReportPage />}
        />
        {/* 
          <Route
            path="/dentists/clinical-support"
            element={<SimplePage title="Clinical Decision Support" />}
          />

          <Route
            path="/search"
            element={<SearchPage />}
          /> */}
        {/* <Route path="/patients" element={<PatientsPage />} /> */}
        {/* <Route path="/dentists" element={<DentistsPage />} /> */}
        {/* <Route path="/researchers" element={<ResearchPage />} /> */}

      </Route>

    </Routes>
  );
}
// ClinicalReportPage.tsx - Updated with print styles
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  User, 
  Stethoscope, 
  Image, 
  Clipboard,
  Activity,
  MessageSquare,
  FileText
} from "lucide-react";

export default function ClinicalReportPage() {
  const location = useLocation();
  const reportData = location.state?.reportData || {};

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const reportHTML = generateReportHTML(reportData);
    const blob = new Blob([reportHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Clinical_Report_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateReportHTML = (data: any) => {
    const clinicalNotes = data.clinicalNotes || data.notes || '';
    const radiographImage = data.radiograph || data.radiographImage || '';
    const requestedOpinion = data.requestedOpinion || '';
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Clinical Report</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; padding: 40px; max-width: 1200px; margin: 0 auto; color: #1e293b; }
            .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
            h1 { font-size: 28px; color: #203E62; }
            .subtitle { color: #64748b; font-size: 14px; margin-top: 8px; }
            .meta { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; display: flex; gap: 30px; flex-wrap: wrap; }
            .section { margin: 30px 0; }
            .section h2 { font-size: 20px; color: #203E62; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
            .card { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #078F9E; }
            .label { font-weight: 600; color: #64748b; font-size: 14px; }
            .value { margin-top: 4px; font-size: 16px; }
            .image-container { max-width: 400px; margin: 10px 0; }
            .image-container img { width: 100%; border-radius: 8px; border: 1px solid #e2e8f0; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .notes-box { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #9B6BEB; white-space: pre-wrap; }
            .opinion-box { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #FF9B32; white-space: pre-wrap; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Clinical Decision Support Report</h1>
            <p class="subtitle">AI-Assisted Clinical Report</p>
          </div>

          <div class="meta">
            <span>📅 Generated: <strong>${new Date().toLocaleDateString()}</strong></span>
            <span>🕐 Time: <strong>${new Date().toLocaleTimeString()}</strong></span>
            <span>📋 Report ID: <strong>CLIN-${Date.now().toString().slice(-8)}</strong></span>
          </div>

          <div class="section">
            <h2>👤 Patient Information</h2>
            ${data.patient ? `
              <div class="grid">
                <div class="card"><span class="label">Age</span><div class="value">${data.patient.age || 'N/A'} years</div></div>
                <div class="card"><span class="label">Gender</span><div class="value">${data.patient.gender || 'N/A'}</div></div>
                <div class="card" style="grid-column: 1 / -1;"><span class="label">Medical History</span><div class="value">${data.patient.medicalHistory || 'N/A'}</div></div>
                <div class="card" style="grid-column: 1 / -1;"><span class="label">Chief Complaint</span><div class="value">${data.patient.chiefComplaint || 'N/A'}</div></div>
                <div class="card"><span class="label">Pain Level</span><div class="value">${data.patient.pain || 'N/A'}</div></div>
                <div class="card"><span class="label">Swelling</span><div class="value">${data.patient.swelling || 'N/A'}</div></div>
                <div class="card"><span class="label">Mobility</span><div class="value">${data.patient.mobility || 'N/A'}</div></div>
              </div>
            ` : '<p>No patient data available</p>'}
          </div>

          <div class="section">
            <h2>🤖 AI Recommendations</h2>
            ${data.patient ? `
              <div class="card" style="border-left-color: #078F9E;">
                <span class="label">Possible Diagnosis</span>
                <div class="value">Acute apical abscess (most likely)<br>Periapical abscess</div>
              </div>
              <div class="card" style="border-left-color: #FF9B32;">
                <span class="label">Treatment Options</span>
                <div class="value">Incision and drainage<br>Root canal treatment</div>
              </div>
              <div class="card" style="border-left-color: #9B6BEB;">
                <span class="label">Drug Considerations</span>
                <div class="value">Amoxicillin 500mg TID for 5–7 days<br>Ibuprofen 400mg TID for pain</div>
              </div>
              <div class="card" style="border-left-color: #FF7A00;">
                <span class="label">Referral Recommendation</span>
                <div class="value">Refer to oral & maxillofacial surgeon if swelling increases</div>
              </div>
            ` : '<p>No AI recommendations available</p>'}
          </div>

          ${radiographImage ? `
            <div class="section">
              <h2>📷 Radiograph</h2>
              <div class="image-container">
                <img src="${radiographImage}" alt="Radiograph" />
                <p style="margin-top: 8px; font-size: 12px; color: #64748b;">Uploaded radiograph image</p>
              </div>
            </div>
          ` : ''}

          ${clinicalNotes ? `
            <div class="section">
              <h2>📝 Clinical Notes</h2>
              <div class="notes-box">
                ${clinicalNotes}
              </div>
            </div>
          ` : ''}

          ${data.periodontal ? `
            <div class="section">
              <h2>🦷 Periodontal Chart</h2>
              <div class="card">
                <div class="value">${typeof data.periodontal === 'string' ? data.periodontal : JSON.stringify(data.periodontal, null, 2)}</div>
              </div>
            </div>
          ` : ''}

          ${requestedOpinion ? `
            <div class="section">
              <h2>💬 Requested Opinion</h2>
              <div class="opinion-box">
                ${requestedOpinion}
              </div>
              <p style="margin-top: 8px; font-size: 12px; color: #64748b;">This opinion request was submitted by the clinician for review.</p>
            </div>
          ` : ''}

          <div class="footer">
            <p>AfriDent-AI Clinical Decision Support Platform</p>
            <p style="margin-top: 4px;">This report was generated by AI and should be reviewed by a qualified professional</p>
          </div>
        </body>
      </html>
    `;
  };

  return (
    <>
      {/* Print Styles - Hide everything except the report */}
      <style>{`
        @media print {
          /* Hide everything except the report content */
          body * {
            visibility: hidden;
          }
          #report-content, #report-content * {
            visibility: visible;
          }
          #report-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
            background: white;
          }
          /* Hide the print button container */
          .print-hide {
            display: none !important;
          }
          /* Hide the back button and header actions */
          .no-print {
            display: none !important;
          }
          /* Ensure the report takes full page */
          .report-container {
            margin: 0;
            padding: 0;
            max-width: 100%;
          }
          /* Remove shadows and borders for print */
          .report-card {
            box-shadow: none !important;
            border-color: #e2e8f0 !important;
          }
          /* Ensure proper page breaks */
          .page-break {
            page-break-after: always;
          }
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-[#F9FDFE] via-white to-[#DDF6FB]">
        <div className="mx-auto max-w-[1200px] px-5 py-6">
          {/* Header - Hidden when printing */}
          <div className="no-print mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/dentists"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-[#078F9E]"
              >
                <ArrowLeft className="size-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-[#203E62]">Clinical Report</h1>
                <p className="text-sm text-slate-500">AI-Assisted Clinical Decision Support Report</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Printer className="size-4" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-lg bg-[#078F9E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#067984]"
              >
                <Download className="size-4" />
                Download Report
              </button>
            </div>
          </div>

          {/* Report Content - This is what gets printed */}
          <div id="report-content" className="report-container space-y-6">
            {/* Patient Information */}
            <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                <User className="size-5 text-[#078F9E]" />
                Patient Information
              </h2>
              {reportData.patient ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-500">Age</p>
                    <p className="font-semibold">{reportData.patient.age || 'N/A'} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Gender</p>
                    <p className="font-semibold">{reportData.patient.gender || 'N/A'}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-slate-500">Medical History</p>
                    <p className="font-semibold">{reportData.patient.medicalHistory || 'N/A'}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-slate-500">Chief Complaint</p>
                    <p className="font-semibold">{reportData.patient.chiefComplaint || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Pain Level</p>
                    <p className="font-semibold">{reportData.patient.pain || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Swelling</p>
                    <p className="font-semibold">{reportData.patient.swelling || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Mobility</p>
                    <p className="font-semibold">{reportData.patient.mobility || 'N/A'}</p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-500">No patient data available</p>
              )}
            </div>

            {/* AI Recommendations */}
            <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                <Stethoscope className="size-5 text-[#078F9E]" />
                AI Recommendations
              </h2>
              {reportData.patient ? (
                <div className="space-y-3">
                  <div className="rounded-lg border-l-4 border-[#078F9E] bg-[#F8FAFC] p-4">
                    <p className="font-semibold text-slate-700">Possible Diagnosis</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                      <li>Acute apical abscess (most likely)</li>
                      <li>Periapical abscess</li>
                      <li>Cellulitis of odontogenic origin</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-[#FF9B32] bg-[#F8FAFC] p-4">
                    <p className="font-semibold text-slate-700">Treatment Options</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                      <li>Incision and drainage</li>
                      <li>Root canal treatment</li>
                      <li>Systemic antibiotics (if indicated)</li>
                      <li>Analgesics for pain management</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-[#9B6BEB] bg-[#F8FAFC] p-4">
                    <p className="font-semibold text-slate-700">Drug Considerations</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                      <li>Amoxicillin 500mg TID for 5–7 days</li>
                      <li>Ibuprofen 400mg TID for pain</li>
                      <li>Metronidazole 400mg TID (if anaerobic infection suspected)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-[#FF7A00] bg-[#F8FAFC] p-4">
                    <p className="font-semibold text-slate-700">Referral Recommendation</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                      <li>Refer to oral & maxillofacial surgeon if swelling increases</li>
                      <li>Refer if no improvement after 48–72 hours</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-slate-500">No AI recommendations available</p>
              )}
            </div>

            {/* Radiograph */}
            {(reportData.radiograph || reportData.radiographImage) && (
              <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                  <Image className="size-5 text-[#078F9E]" />
                  Radiograph
                </h2>
                <div className="flex flex-col items-start">
                  <img 
                    src={reportData.radiograph || reportData.radiographImage} 
                    alt="Radiograph" 
                    className="max-w-md rounded-lg border border-slate-200 shadow-sm"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                  <p className="mt-2 text-sm text-slate-500">Uploaded radiograph image</p>
                </div>
              </div>
            )}

            {/* Clinical Notes */}
            {(reportData.clinicalNotes || reportData.notes) && (
              <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                  <Clipboard className="size-5 text-[#9B6BEB]" />
                  Clinical Notes
                </h2>
                <div className="rounded-lg border-l-4 border-[#9B6BEB] bg-[#F8FAFC] p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">
                    {reportData.clinicalNotes || reportData.notes || 'No clinical notes available'}
                  </p>
                </div>
              </div>
            )}

            {/* Periodontal Chart */}
            {reportData.periodontal && (
              <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                  <Activity className="size-5 text-[#078F9E]" />
                  Periodontal Chart
                </h2>
                <div className="rounded-lg bg-[#F8FAFC] p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">
                    {typeof reportData.periodontal === 'string' 
                      ? reportData.periodontal 
                      : JSON.stringify(reportData.periodontal, null, 2)}
                  </p>
                </div>
              </div>
            )}

            {/* Requested Opinion */}
            {reportData.requestedOpinion && (
              <div className="report-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#203E62]">
                  <MessageSquare className="size-5 text-[#FF9B32]" />
                  Requested Opinion
                </h2>
                <div className="rounded-lg border-l-4 border-[#FF9B32] bg-[#FFF8F0] p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">
                    {reportData.requestedOpinion}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9B32]"></span>
                      Opinion requested by clinician
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="report-card rounded-xl border border-slate-200 bg-white px-5 py-4 text-center text-xs text-slate-500">
              <p>AfriDent-AI Clinical Decision Support Platform</p>
              <p className="mt-1">This report was generated by AI and should be reviewed by a qualified professional</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Privacy Policy</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              AZURA AI Privacy Policy
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setLocation("/")}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Back to Home
          </button>
        </div>

        <div className="mt-8 space-y-8 text-slate-700">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Last Updated: May 29, 2026</p>
            <p>
              At AZURA (Autonomous Zero-touch User Response Agentic AI System), we prioritize the privacy and security of the guests and staff who interact with our platform. This Privacy Policy outlines how we collect, process, use, and protect your information when you engage with our AI-powered reception services.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">1. Information We Collect</h2>
            <p>
              To provide an intelligent, personalized, and efficient experience, we collect the following types of information:
            </p>

            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">A. Information Provided Directly by You</h3>
                <p className="text-slate-700">Booking Details: Information shared during a conversation to facilitate reservations, including check-in/check-out dates, number of guests, room preferences, and special requests.</p>
                <p className="text-slate-700">Communication Content: The text of your conversations with AZURA, including questions, feedback, and clarifications.</p>
                <p className="text-slate-700">Personal Identification: Contact information or preferences provided by you to enable personalized services and remember your history.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">B. Information Collected Automatically</h3>
                <p className="text-slate-700">Technical Data: Information about the device or platform used to contact us (e.g., Facebook Messenger, web browser type, IP address, and connection timestamps).</p>
                <p className="text-slate-700">Usage Information: Metadata regarding your interaction with the AI, such as conversation duration, message frequency, and navigation through our digital channels.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">C. Information via Third-Party Integrations</h3>
                <p className="text-slate-700">We collect information through integrated messaging platforms (e.g., Facebook) as permitted by their respective APIs to enable the receptionist functionality.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">2. How We Use and Process Information</h2>
            <p>
              We process your data to operate, maintain, and enhance the AZURA AI system. The primary purposes for collection include:
            </p>
            <ul className="space-y-3 pl-5 text-slate-700 marker:text-sky-700">
              <li>Service Delivery: To answer resort-related questions, explain amenities, provide pricing, and execute booking requests seamlessly.</li>
              <li>Personalization: To utilize "Persistent Guest Memory," allowing AZURA to remember your preferences and previous stays to provide a customized, "welcome back" experience.</li>
              <li>Administrative Oversight: To provide resort staff with tools—such as the Conversation Inbox and Analytics Dashboard—to monitor performance, manage knowledge bases, and ensure guest satisfaction.</li>
              <li>Quality Assurance: To analyze conversation trends, track booking conversion rates, and improve the AI's natural language understanding.</li>
              <li>Human-in-the-Loop Support: To enable human staff to intervene in complex requests or address guest frustration, ensuring a professional standard of service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">3. Data Retention and Security</h2>
            <p>
              AZURA employs a hybrid architecture of LLM reasoning and structured database storage. We retain information only for as long as is necessary to provide our services and to maintain a record of bookings and guest preferences. We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">4. Your Rights: Deleting Your Data</h2>
            <p>
              You have the right to request the deletion of the data associated with your interactions. If you would like your conversation history, stored preferences, or personal details removed from our systems, please contact our data management team at:
            </p>
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-5 text-slate-800">
              <p><strong>Email:</strong> <span className="font-medium">algenioxavier@gmail.com</span></p>
              <p><strong>Subject Line:</strong> Data Deletion Request - AZURA</p>
            </div>
            <p>
              Note: Please include the account name or identifier used during your interaction (e.g., your Facebook profile name or the email address used for bookings) so we can locate and remove your records accurately. We will process your request within a reasonable timeframe, subject to legal and operational requirements regarding existing bookings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our AI capabilities or legal requirements. We encourage you to review this page periodically for the latest information on our privacy practices.
            </p>
          </section>

          <section className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">Questions?</h2>
            <p>
              If you have any questions regarding this Privacy Policy or how AZURA handles your data, please contact us at <a href="mailto:algenioxavier@gmail.com" className="font-medium text-sky-700 hover:text-sky-900">algenioxavier@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

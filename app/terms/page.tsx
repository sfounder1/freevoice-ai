import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using FreeVoice.ai services.",
  alternates: { canonical: "https://freevoice.ai/terms" },
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-slate-400 mb-10">
          Last updated: April 6, 2026
        </p>

        <div className="prose prose-slate prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 mt-2">
              By accessing or using FreeVoice.ai (&quot;the Service&quot;), you
              agree to be bound by these Terms &amp; Conditions. If you do not
              agree, you may not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Description of Service
            </h2>
            <p className="text-slate-600 mt-2">
              FreeVoice.ai provides AI-powered voice tools including
              text-to-speech, transcription, voice changing, and related audio
              processing services. Some features are available for free with
              daily usage limits; additional usage may require a paid plan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. User Responsibilities
            </h2>
            <p className="text-slate-600 mt-2">
              You agree not to use the Service to: generate content that is
              illegal, harmful, threatening, abusive, defamatory, or otherwise
              objectionable; impersonate any person or entity; violate any
              applicable laws or regulations; attempt to gain unauthorized
              access to any part of the Service; or use the Service for any
              fraudulent or deceptive purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Intellectual Property
            </h2>
            <p className="text-slate-600 mt-2">
              You retain ownership of any content you submit to the Service.
              Audio generated using the Service may be used by you for personal
              or commercial purposes. The FreeVoice.ai name, logo, and branding
              are the property of FreeVoice.ai and may not be used without
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Privacy &amp; Data
            </h2>
            <p className="text-slate-600 mt-2">
              We respect your privacy. Audio files and text submitted for
              processing are used solely to provide the Service and are not
              stored permanently unless you choose to save them. We do not sell
              your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Service Availability
            </h2>
            <p className="text-slate-600 mt-2">
              We strive to maintain high availability but do not guarantee
              uninterrupted access. The Service is provided &quot;as is&quot;
              without warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Limitation of Liability
            </h2>
            <p className="text-slate-600 mt-2">
              To the fullest extent permitted by law, FreeVoice.ai shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Modifications
            </h2>
            <p className="text-slate-600 mt-2">
              We reserve the right to modify these Terms at any time. Continued
              use of the Service after changes constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              9. Contact
            </h2>
            <p className="text-slate-600 mt-2">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:hello@freevoice.ai"
                className="text-blue-600 hover:underline"
              >
                hello@freevoice.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

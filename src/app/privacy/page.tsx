import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | NRI Solutions",
  description: "Privacy policy and client data protection practices for NRI Solutions.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-950">Privacy Policy</h1>
        <p className="text-xs text-gray-500">Last updated: June 17, 2026</p>
        <div className="h-0.5 w-12 bg-gold-500"></div>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-light">
          <p>
            At NRI Solutions, we value the trust you place in us as your local representative. This Privacy Policy details how we collect, use, and secure your personal details, property documentation, and communication logs.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">1. Information We Collect</h3>
          <p>
            We collect names, email addresses, WhatsApp phone numbers, residency country, and property details. For legal services, we collect digitized property deeds, tax identification numbers, and surveyor reports.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">2. Secure Document Chamber</h3>
          <p>
            All legal documentation uploaded to our client portal is encrypted in transit and at rest. Access is limited strictly to authorized operational staff allocated to your specific task audit.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">3. Data Retention</h3>
          <p>
            We retain your data for the duration of our subscription services. You may request immediate deletion of property records and correspondence history at any time.
          </p>
        </div>
        <div className="pt-8 border-t border-gray-150">
          <Link href="/" className="text-xs font-bold text-gold-600 hover:underline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Terms of Service | NRI Solutions",
  description: "Terms of service and local representation agreements for NRI Solutions.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-950">Terms of Service</h1>
        <p className="text-xs text-gray-500">Last updated: June 17, 2026</p>
        <div className="h-0.5 w-12 bg-gold-500"></div>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-light">
          <p>
            Welcome to NRI Solutions. By accessing our client portal or requesting services, you agree to comply with the terms outlined below.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">1. Local Representation Authority</h3>
          <p>
            By requesting property verification, banking coordination, or government paperwork support, you grant NRI Solutions authorization to act as your local coordinator. In cases requiring official power of attorney, separate physical documents must be signed.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">2. Subscription & Payments</h3>
          <p>
            Starter packages are billed one-time upfront. Monthly standard and premium plans are billed on recurring cycles. Pricing displayed represents initial base rates; final quotes are determined after consultation.
          </p>
          <h3 className="text-lg font-bold text-navy-950 pt-4">3. Limit of Liability</h3>
          <p>
            NRI Solutions acts as a coordinating agent. We work with verified professionals and carry professional indemnity insurance, but cannot be held responsible for administrative delays caused by government departments or sub-registrar offices.
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

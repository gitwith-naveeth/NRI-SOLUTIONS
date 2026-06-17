import Link from "next/link";
import * as Icons from "lucide-react";
import { serviceCategories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services | NRI Solutions",
  description: "Comprehensive property management, home maintenance, paperwork assistance, and local coordination for NRIs.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            On-Ground Concierge Services
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            Professional representation and assistance across India. Choose a category below to explore individual services.
          </p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const IconName = category.icon as keyof typeof Icons;
              const Icon = (Icons[IconName] || Icons.Building2) as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={category.id}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 bg-navy-950 rounded-xl flex items-center justify-center text-gold-500 mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>
                    
                    {/* List services */}
                    <div className="border-t border-gray-50 pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-4">
                        Services Included
                      </h4>
                      <ul className="space-y-3">
                        {category.services.map((service) => (
                          <li key={service.id} className="flex items-start text-xs text-gray-600 font-medium">
                            <Icons.CheckCircle2 className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{service.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={`/services/${category.slug}`} className="block mt-8 w-full">
                    <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl py-3 font-semibold text-sm">
                      View All {category.title}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust elements */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="p-6">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gold-500 mx-auto mb-4 shadow-sm border border-gray-100">
              <Icons.ShieldAlert className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-navy-950 text-base mb-2">Safe & Vetted</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Every local coordinator is fully verified, background-checked, and reference-vetted.
            </p>
          </div>
          <div className="p-6">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gold-500 mx-auto mb-4 shadow-sm border border-gray-100">
              <Icons.Video className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-navy-950 text-base mb-2">Live Verification</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              We offer real-time updates, photos, and video validation of all on-ground operations.
            </p>
          </div>
          <div className="p-6">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gold-500 mx-auto mb-4 shadow-sm border border-gray-100">
              <Icons.FolderLock className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-navy-950 text-base mb-2">Document Security</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Legal documents are digitized securely and stored in encrypted client folders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

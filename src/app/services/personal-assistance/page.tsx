import { serviceCategories } from "@/lib/mock-data";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata = {
  title: "Personal Assistance & Local Representation | NRI Solutions",
  description: "Government paperwork coordination, NRE/NRO banking support, local representation, and elder care coordination for NRIs.",
};

export default function PersonalAssistancePage() {
  const category = serviceCategories.find((c) => c.id === "personal-assistance")!;
  return <ServicePageLayout category={category} />;
}

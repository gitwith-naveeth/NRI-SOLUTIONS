import { serviceCategories } from "@/lib/mock-data";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata = {
  title: "House Help & Maintenance Services | NRI Solutions",
  description: "Deep cleaning, home maintenance, gardening, security inspections, and utility bill management for NRI homes in India.",
};

export default function HouseHelpPage() {
  const category = serviceCategories.find((c) => c.id === "house-help")!;
  return <ServicePageLayout category={category} />;
}

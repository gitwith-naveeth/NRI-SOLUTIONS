import { serviceCategories } from "@/lib/mock-data";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata = {
  title: "Property & Land Services | NRI Solutions",
  description: "Property verification, encroachment checks, legal document verification, and property management in India for NRIs.",
};

export default function PropertyLandPage() {
  const category = serviceCategories.find((c) => c.id === "property-land")!;
  return <ServicePageLayout category={category} />;
}

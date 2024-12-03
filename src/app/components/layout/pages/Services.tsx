import ServiceCard from "@/app/components/reusable/ServiceCard";
import { OUR_SERVICES } from "@/app/helpers/stub-data/services";

export default function Services() {
  return (
    <div className="m-6 min-h-screen flex flex-col w-screen items-center">
      <h1 className="text-2xl text-primary">Our service list</h1>
      <h2 className="text-4xl">What we are offering</h2>
      {OUR_SERVICES.map((service, index) => (
        <ServiceCard
          key={service.id}
          title={service.name}
          image={service.image}
          description={service.description}
          index={index + 1}
        />
      ))}
    </div>
  );
}

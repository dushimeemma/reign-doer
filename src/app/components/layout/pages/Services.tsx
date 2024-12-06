import ServiceCard from "@/app/components/reusable/ServiceCard";
import { OUR_SERVICES as services } from "@/app/helpers/stub-data/services";
import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";

export default function Services() {
  return (
    <div
      className="m-6 min-h-screen flex flex-col w-screen items-center"
      id="services"
    >
      <Title />
      <SubTitle />
      {services.map((service, index) => (
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

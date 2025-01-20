import Image from "next/image";
import Link from "next/link";

import FooterTitle from "@/app/components/reusable/footer/Title";
import SubTitle from "@/app/components/reusable/footer/SubTitle";
import { OUR_SERVICES as services } from "@/app/helpers/stub-data/services";
import { socialMedia } from "@/app/helpers/stub-data/social-media";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="w-full min-h-[60vh] bg-primary text-white flex lg:flex-row flex-col justify-around items-start p-6">
      <div className="lg:self-center self-start mt-3">
        <Logo />
      </div>

      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle />
        {services.map((service) => (
          <SubTitle label={service.name} key={service.id} />
        ))}
      </div>
      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle label="Other" />
        <SubTitle label="About us" link="#team" />
        <SubTitle label="Blog" link="#blog" />
        <SubTitle label="Portfolio" link="#projects" />
        <SubTitle label="Career" link="#team" />
      </div>
      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle label="Contact us" />
        <SubTitle label="reigndoer@gmail.com" />
        <SubTitle label="+250788951224" />
        <FooterTitle label="Follow us" />
        <div className="flex flex-row gap-4">
          {socialMedia.map((media) => (
            <Link href={media.link} key={media.id}>
              <Image
                src={media.image}
                width={24}
                height={24}
                alt={media.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

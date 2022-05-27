import React from "react";

interface ServicePropsType {
  service: {
    title: string;
    description: string;
    theme: string;
  };
  ServiceIcon: React.ComponentType;
}

const Service = (props: ServicePropsType) => {
  const { service, ServiceIcon } = props;
  return (
    <div className="shadow-lg even:shadow-sky-400/40 odd:shadow-violet-400/40 rounded-[4rem] w-56 h-56 p-8">
      <div
        className={`rounded-full ${service.theme} text-white w-16 h-16 text-2xl flex justify-center items-center`}
      >
        <ServiceIcon />
      </div>
      <h5 className="mt-5 mb-2 font-bold">{service.title}</h5>
      <p className="text-gray-400 text-sm">{service.description}</p>
    </div>
  );
};

export default Service;

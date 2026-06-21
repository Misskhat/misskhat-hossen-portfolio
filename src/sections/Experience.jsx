import React from "react";

const experiences = [
  {
    period: "2022 — Present",
    role: "Operation Executive",
    company: "City Express",
    description:
      "International Logistics Management: Supervise and optimize export/import courier workflows to ensure timely, cost-effective, and compliant global deliveries., Customer Consultation & Service Matching: Guide clients in selecting the most suitable courier solutions based on their needs, budget, and destination requirements. Team Leadership & Employee Development: Manage and mentor operational staff, fostering a high-performance culture and continuous improvement.",
    technologies: [
      "MyDHL+",
      "UPS Easyship",
      "FedEx Easyship",
      "Express ERP",
      "CRM",
    ],
    current: true,
  },
  {
    period: "2019 — 2022",
    role: "Jr. Executive Office",
    company: "City Express",
    description:
      "City Express serves as a trusted agent of DHL Worldwide Express (BD) Pvt Ltd, specializing in DHL express services (outbound). Within the billings department, my primary role involves generating monthly billing invoices for our esteemed clientele and meticulously managing their ledger.",
    technologies: ["MyDHL+", "UPS Easyship", "FedEx Easyship", "Express ERP"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Data Analyst (Remote - Part Time)",
    company: "Intelligent Image Management Ltd",
    description:
      "At Intelligent Image Management Ltd., I was part of the NPS-3 (National Production Services) team, where I focused on handling title reports and commitments for First American Title Company. My responsibilities included collecting, analyzing, and processing documents to ensure accuracy and completeness",
    technologies: [
      "Title Examinee App",
      "Ms Excel",
      "Data Tree",
      "Data Trace System App",
      "Ms Powerpoint",
    ],
    current: false,
  },
  {
    period: "2017 — 2019",
    role: "Map Locator",
    company: "Intelligent Image Management Ltd",
    description:
      "During my tenure at Intelligent Image Management Ltd., I was integral to the Map Locating team, dedicated to managing customer documents for First American Insurance Company. My primary focus was on mapping and identifying the latest property situations to ensure accurate updates. ",
    technologies: [
      "Ms Excel",
      "Data Tree",
      "Data Trace System App",
      "Ms Powerpoint",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="#experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4  w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 "></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 ">
          <span className="text-sm text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="italic font-serif font-normal text-white">
              {" "}
              speak volumes.
            </span>
          </h2>
          <p className="text-mute-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious courier operation
            executive to junior web developer and building products at scale.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"></div>
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  )}
                </div>
                {/* timeline content */}
                <div
                  className={`p-8 md:p-0 ${idx % 2 === 0 ? "md:pr-16 text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}{" "}
                    </span>
                    <h3 className="text-xl mt-2 font-semibold">{exp.role}</h3>
                    <p className="text-mute-foreground">{exp.company}</p>
                    <p className="text-mute-foreground text-sm mt-4 text-justify">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 2 && "md:justify-end"}`}
                    >
                      {exp.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-mute-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

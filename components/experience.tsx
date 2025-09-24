"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "LMFEB UNPAD",
      location: "Bandung",
      period: "July 2024 — December 2024",
      description: [
        "Developed a Laravel based application empowering 10+ MSMEs to digitize operations",
        "Built performance analysis dashboards, improving decision-making speed by 25%",
        "Designed user-friendly interfaces for inventory management and financial tracking",
        "Automated generation of 5+ financial reports (ledger, balance sheet, P&L, etc.)",
        "Created collaboration features enabling MSMEs to connect and grow together",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Kantor Jasa Akuntan KJA Kasir CA BKP",
      location: "Bandung",
      period: "October 2023 — March 2024",
      description: [
        "Collaborated on a financial reporting system serving internal accounting needs",
        "Managed data flows: purchase orders, goods receipts, sales orders, and invoices",
        "Generated reports including general ledger, balance sheet, and P&L statements",
        "Supported clients' systems and software to ensure data accuracy",
        "Improved report preparation efficiency by 20% through automation",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="perspective-card bg-card p-8 rounded-lg border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                  <p className="text-lg text-foreground">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

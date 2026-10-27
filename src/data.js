export const experience = [
  {
    company: "Iberdrola Australia",
    role: "Lead Data Engineer and Architect",
    dates: "June 2022 — Present",
    location: "Sydney, New South Wales",
    summary:
      "Lead the design, development, and operation of enterprise data platforms and business-critical integrations across Microsoft Fabric, Azure, Dynamics 365, Oracle EPM, CRM, and Power BI.",
    details: [
      "Architect medallion-based Lakehouse platforms for operational reporting, financial reporting, and advanced analytics.",
      "Automate regulatory and compliance reporting to reduce manual effort and improve data quality, traceability, and governance.",
      "Lead delivery from requirements and design through implementation, deployment, and operational support.",
      "Partner with business and technology teams; mentor engineers and champion governed self-service analytics."
    ],
    technologies: [
      "Microsoft Fabric",
      "Azure Data Factory",
      "Azure SQL",
      "Power BI",
      "PySpark",
      "Delta Lake",
      "Dynamics 365 F&O",
      "Oracle EPM",
      "Azure DevOps",
      "Python",
      "T-SQL",
      "REST APIs"
    ]
  },
  {
    company: "Charter Hall",
    role: "Business Intelligence Lead",
    dates: "October 2019 — June 2022",
    location: "Greater Sydney Area",
    summary:
      "Led end-to-end BI and data warehouse delivery, aligning reporting and integration work with business needs.",
    details: [
      "Designed a Kimball-method data warehouse with SSIS data integration, Azure Analysis Services models, and Power BI Service reporting.",
      "Provided architectural guidance for data integrity, quality, and accessibility, and coordinated offshore BI developers.",
      "Integrated Yardi ERP, Microsoft Dynamics CRM, Tradeshift, CFT Tax Services, and other business systems."
    ],
    technologies: [
      "Kimball",
      "SSIS",
      "Azure Analysis Services",
      "Power BI",
      "Yardi ERP",
      "Dynamics CRM",
      "Azure Logic Apps"
    ]
  },
  {
    company: "PT. Jui Shin Indonesia",
    role: "Head of Information Technology",
    dates: "June 2016 — May 2019",
    location: "Medan Area, North Sumatra",
    summary:
      "Led ERP specialists and IT infrastructure and support teams while aligning systems, operations, and technology investment with business strategy.",
    details: [
      "Oversaw the performance and security of IT systems, networks, and applications.",
      "Implemented disaster recovery and business continuity plans.",
      "Managed budgets, vendor relationships, procurement, and technology evaluation."
    ],
    technologies: ["ERP", "IT operations", "Infrastructure", "Business continuity", "Vendor management"]
  },
  {
    company: "ECOCEAN",
    role: "Android Developer · Freelancer",
    dates: "July 2015 — August 2015",
    location: "Greater Perth Area",
    summary:
      "Built an Android application to track tagged shark movements, retrieving Argos location history and presenting it on a map.",
    details: [
      "Implemented API requests to the Argos server and processed data with SQLite."
    ],
    technologies: ["Java", "SOAP", "Android", "SQLite", "Argos API"]
  },
  {
    company: "PT. Jui Shin Indonesia",
    role: "Enterprise Resource Planning System Manager",
    dates: "February 2014 — May 2015",
    location: "Medan Area, North Sumatra",
    summary:
      "Managed a multi-module TIPTOP ERP platform across production, planning, purchasing, warehousing, marketing, and finance.",
    details: [
      "Coordinated TIPTOP ERP implementation and data migration across departments.",
      "Led preparation and validation of data for system upload, with a focus on accuracy and completeness.",
      "Designed and maintained programming systems supporting business operations."
    ],
    technologies: ["TIPTOP ERP", "4GL", "Oracle Database", "SQL", "Crystal Reports"]
  },
  {
    company: "SHYANG YAO FUNG, PT",
    role: "ERP Analyst Developer",
    dates: "March 2012 — January 2014",
    location: "Indonesia",
    summary:
      "Developed ERP capabilities across planning, purchasing, warehouse, quality control, and export operations.",
    details: [
      "Built an R&D module for sample production, BOM uploads, material requirements, and stock levels.",
      "Automated purchase order generation in collaboration with Purchasing and PPIC, aligning orders with sales and production schedules."
    ],
    technologies: ["HP ERP", "IBM Informix", "4GL", "Excel macros"]
  }
];

export const projects = [
  {
    id: "reporting",
    className: "work-card--wide",
    category: "Automation · Governance",
    title: "Regulatory reporting, with fewer manual steps.",
    summary:
      "End-to-end automation for regulatory and compliance reporting, with stronger data quality, traceability, and governance.",
    detail:
      "At Iberdrola Australia, reporting automation sits alongside data validation, reconciliation, and auditability across finance, customer, and regulatory datasets.",
    tools: ["Microsoft Fabric", "Azure Data Factory", "Azure SQL", "Power BI"]
  },
  {
    id: "integrations",
    className: "work-card--narrow",
    category: "Enterprise integration",
    title: "Connecting finance and operations systems.",
    summary:
      "Business-critical integrations across Dynamics 365 Finance & Operations, CRM, Oracle EPM, Tally, and other enterprise applications.",
    detail:
      "The work includes requirements, integration design, implementation, deployment, and operational support across business and technology teams.",
    tools: ["Dynamics 365 F&O", "CRM", "Oracle EPM", "Tally", "REST APIs"]
  },
  {
    id: "lakehouse",
    className: "work-card--narrow",
    category: "Data platform architecture",
    title: "A medallion Lakehouse for analytics.",
    summary:
      "Architected medallion-based data platforms for operational reporting, financial reporting, and advanced analytics.",
    detail:
      "The platform toolkit includes Microsoft Fabric, Azure Data Factory, Azure SQL Database, PySpark, Delta Lake, and Power BI.",
    tools: ["Fabric", "Lakehouse", "PySpark", "Delta Lake", "Power BI"]
  },
  {
    id: "manufacturing",
    className: "work-card--wide",
    category: "ERP implementation · Manufacturing",
    title: "Full ERP implementation, from the ground up.",
    summary:
      "Coordinated a full TIPTOP ERP implementation across production, planning, purchasing, warehousing, marketing, and finance.",
    detail:
      "Coordinated stakeholders across departments through implementation and data migration, led data preparation and validation for system uploads, and built purchasing automation linking orders to sales and production schedules.",
    tools: ["TIPTOP ERP", "Production", "Planning", "Purchasing", "Warehousing", "Marketing", "Finance", "4GL", "Oracle Database"]
  }
];

export const skillGroups = [
  {
    title: "Data platforms",
    items: ["Microsoft Fabric", "Azure Data Factory", "Azure SQL Database", "Lakehouse", "Delta Lake", "PySpark"]
  },
  {
    title: "Integration",
    items: ["Dynamics 365 Finance & Operations", "Oracle EPM", "CRM", "Tally", "REST APIs", "SSIS"]
  },
  {
    title: "Analytics & engineering",
    items: ["Power BI", "Kimball methodology", "T-SQL", "Python", "Java", "4GL"]
  },
  {
    title: "Architecture & delivery",
    items: ["Data governance", "Data quality", "CI/CD", "Azure DevOps", "Data migration", "Technical leadership"]
  }
];


export type ProjectId = "p1" | "p2" | "p3" | "p4";

export type Project = {
  id: ProjectId;
  number: string;
  image: string;
  shortTitle: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  challenges: string[];
  plans: string[];
  live: string;
  github: string;
  githubServer?: string;
  passwordLink?: string;
  githubPrivate?: boolean;
};

export const projects: Project[] = [
  {
    id: "p1",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
    shortTitle: "My-Job - Job Posting Platform",
    title: "My-Job - Job Posting Web Application",
    shortDescription:
      "A full-featured job platform with Applicant, Company, and Admin roles, PayPal subscriptions, resume upload, live notifications, and chat.",
    description:
      "A full-featured job posting platform with three distinct user roles: Applicant, Company, and Admin. Companies can post jobs, track applicants, shortlist profiles, and communicate by email. Applicants get advanced search with filters, resume upload, certificate download, and real-time notifications. PayPal handles secure subscription-based packages, and admin-customer chat provides fast support.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "PayPal API",
      "Socket.io",
      "Redux",
      "TailwindCSS",
      "Shadcn/UI",
      "React Hook Form",
      "Cloudinary",
      "Lenis",
      "React-Quill-New",
    ],
    challenges: [
      "Designing a scalable multi-role permission model with role-specific UI and data scope.",
      "Integrating PayPal subscription webhooks with reliability across failed payments and plan changes.",
      "Adding Socket.io notifications and support chat without degrading API performance.",
      "Building advanced resume search with compound filters on a growing dataset.",
    ],
    plans: [
      "Add AI-powered job matching using skill embeddings.",
      "Launch a React Native companion app for applicants.",
      "Introduce i18next-based multilingual support.",
      "Build a company analytics dashboard with funnel conversion metrics.",
    ],
    live: "https://my-job-brown.vercel.app/",
    github: "https://github.com/Mujahid2000/myJob",
    githubServer: "https://github.com/Mujahid2000/Job-server",
  },
  {
    id: "p2",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&q=80",
    shortTitle: "Dynamic RBAC System",
    title: "Dynamic RBAC System",
    shortDescription:
      "Permission-based access control replacing static roles with runtime route checks, grant ceilings, visual permission management, and audit logs.",
    description:
      "Designed and executed a dynamic permission-based access control system replacing static role restrictions. It includes permission-driven routing with Next.js middleware, grant ceiling logic for delegated permissions, an admin-friendly visual permission manager, and detailed audit logs for sensitive actions.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "JWT",
      "Recharts",
      "bcrypt",
      "cookie-parser",
    ],
    challenges: [
      "Designing grant ceilings to prevent privilege escalation while keeping UX straightforward.",
      "Keeping middleware route protection synchronized with server permission state.",
      "Creating a visual permission matrix for non-technical administrators.",
      "Maintaining high-volume audit logging performance.",
    ],
    plans: [
      "Add temporary time-window permissions.",
      "Create permission templates for faster onboarding.",
      "Ship a permission diff view across time periods.",
      "Add enterprise SSO and SAML support.",
    ],
    live: "https://rbac-system-nextjs.vercel.app/login",
    github: "https://github.com/Mujahid2000/rbac-system-nextjs",
    githubServer: "https://github.com/Mujahid2000/rbac-system-nestjs",
    passwordLink:
      "https://docs.google.com/document/d/1vDzV_ROGuxEan9H6T8w410IoN3eDfASUoUnIlCo1sIM/edit?tab=t.0",
  },
  {
    id: "p3",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    shortTitle: "Amar-Storage - Warehouse SaaS",
    title: "Amar-Storage - Warehouse & Shipment Management SaaS",
    shortDescription:
      "A paid multi-role SaaS for warehouse, inventory, and shipments with invoice generation, account automation, risk scoring, and real-time support chat.",
    description:
      "A paid multi-role SaaS platform for warehouse, inventory, and shipment management with separate admin and user dashboards. It includes invoice generation, bulk order workflows, COD risk scoring, automatic account-locking for non-payment, one-click Excel/PDF export, and Socket.io live chat support.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redux",
      "PDF Engine",
      "Excel Export",
    ],
    challenges: [
      "Building COD risk scoring with low false-positive rates.",
      "Implementing account auto-lock with grace periods and admin override.",
      "Generating dynamic invoice PDFs with tax and branding variations.",
      "Designing tenant-safe data isolation for client organizations.",
    ],
    plans: [
      "Add barcode and QR scanning for warehouse operations.",
      "Integrate local carriers for real-time shipment tracking.",
      "Build demand forecasting from order history.",
      "Launch a mobile app for warehouse floor teams.",
    ],
    live: "https://smart-inventory-nextjs.vercel.app/",
    github: "#",
    githubPrivate: true,
  },
  {
    id: "p4",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    shortTitle: "PM-Sourcing - Tailoring & Supply Chain App",
    title: "PM-Sourcing - Tailoring & Supply Chain Management Platform",
    shortDescription:
      "Manufacturing, sourcing, and supply chain management with country-based ordering, complete order dashboards, advanced GSAP animations, and dynamic multi-language switching.",
    description:
      "PM-Sourcing is a production platform for tailoring and supply chain operations. It supports country-based ordering logic, end-to-end order tracking dashboards, multilingual content switching, and animated data-heavy UI built with GSAP for smooth interactions. The backend handles authentication, order workflows, and role-aware access for operations teams.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    challenges: [
      "Designing country-based order flows with different operational rules.",
      "Keeping complex dashboard interactions smooth while rendering dense order data.",
      "Handling multilingual UI content without breaking layout consistency.",
      "Maintaining secure JWT-based access control for role-specific actions.",
    ],
    plans: [
      "Add vendor performance analytics and SLA tracking.",
      "Introduce shipment milestone alerts for internal teams and buyers.",
      "Expand language support for more regional markets.",
      "Add export-ready reports for sourcing and fulfillment teams.",
    ],
    live: "https://pm-sourcing.vercel.app/",
    github: "#",
    githubPrivate: true,
  },
];

export const projectBadge: Record<ProjectId, string> = {
  p1: "LIVE",
  p2: "COMPLEX",
  p3: "PAID",
  p4: "PAID",
};

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

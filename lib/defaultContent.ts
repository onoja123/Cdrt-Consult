export interface HeroContent {
  title: string;
  description1: string;
  description2: string;
}

export interface ServiceItem {
  name: string;
}

export interface ServicesContent {
  sectionTitle: string;
  sectionDescription: string;
  mainImage: string;
  items: ServiceItem[];
}

export interface AdvisorItem {
  title: string;
  institution: string;
  phone: string;
  email?: string;
}

export interface AdvisorsContent {
  items: AdvisorItem[];
}

export interface PartnerItem {
  title: string;
  location: string;
  contactPerson: string;
  phone: string;
  email: string;
}

export interface PartnersContent {
  items: PartnerItem[];
}

export interface AboutServiceItem {
  text: string;
}

export interface AboutContent {
  title: string;
  description: string;
  services: AboutServiceItem[];
  approachText: string;
}

export interface TeamMember {
  title: string;
  name: string;
}

export interface ZonalCoordinator {
  zone: string;
  coordinator: string;
  department: string;
  institution: string;
}

export interface TeamContent {
  headerTitle: string;
  headerDescription: string;
  members: TeamMember[];
  zonalCoordinators: ZonalCoordinator[];
}

export interface GalleryContent {
  images: string[];
}

export interface FooterContent {
  address: string;
  phone1: string;
  phone2: string;
  email: string;
}

export interface ContactPageContent {
  title: string;
  description: string;
}

export interface SiteContent {
  hero: HeroContent;
  services: ServicesContent;
  advisors: AdvisorsContent;
  partners: PartnersContent;
  about: AboutContent;
  team: TeamContent;
  gallery: GalleryContent;
  footer: FooterContent;
  contactPage: ContactPageContent;
}

export const defaultContent: SiteContent = {
  hero: {
    title: "Welcome to CDRT",
    description1:
      "Where we empower sustainable development through people-centered solutions. We are a Human Resource Management and Development Support Services Consultancy firm registered in Nigeria. Our mission is to promote participatory and gender-sensitive development processes that ensure long-term impact and community ownership.",
    description2:
      "CDRT CONSULT is the enterprise arm of CDRT, providing specialized consultancy services to further our mission.",
  },
  services: {
    sectionTitle: "Our Service",
    sectionDescription:
      "At CDRT Consult, we offer a range of specialized consultancy services to support sustainable development and organizational growth. Our vision is a world where development processes emphasize people's participation in identifying, planning, and executing programs. Our mission is to promote participatory, gender-sensitive, and sustainable development through research and training.",
    mainImage: "/Picture5.png",
    items: [
      { name: "Research and Data Analysis" },
      { name: "Training & Workshop Facilitation" },
      { name: "Project Implementation and Management" },
      { name: "Monitoring and Evaluation" },
      { name: "Community Mobilization/Development" },
    ],
  },
  advisors: {
    items: [
      {
        title: "Prof. Emmanuel Gyong",
        institution: "Department of Sociology, Ahmadu Bello University, Zaria",
        phone: "+2348034533701",
      },
      {
        title: "Dr. Sunday Emmanuel Ologunla",
        institution:
          "Department of Economics, Bingham University, Auta Balefi, Nasarawa State",
        phone: "+2348037870578",
        email: "ologunlaemma@yahoo.com",
      },
    ],
  },
  partners: {
    items: [
      {
        title: "Theatre for Development Centre",
        location: "Ahmadu Bello University, Zaria",
        contactPerson: "Prof. Oga Steve Abah, Executive Director",
        phone: "+2348037037441",
        email: "aba.ogah@gmail.com",
      },
      {
        title: "MambaPoint DevServices",
        location: "FCT Abuja",
        contactPerson: "Dr. Dauda Garuba, Executive Director",
        phone: "+2348034261150",
        email: "daudagaruz@yahoo.com",
      },
    ],
  },
  about: {
    title: "About CDRT",
    description:
      "The Centre for Developmental Research and Training is a nonprofit organization founded in 2018 with the mandate to promote people-centered development processes. It is registered as a non-governmental incorporated trustee with the Corporate Affairs Commission, Registration No. CAC/IT/NO 111099. Its training and development services are tailored to the specific needs of client organizations.",
    services: [
      {
        text: "Research and Data Analysis: We have a team of multidisciplinary researchers conducting studies across Nigeria. We also perform qualitative and quantitative data analysis and interpretation.",
      },
      {
        text: "Community Mobilization/Development: Using participatory learning and action tools, we engage communities from the preparatory stages of a program to ensure sustained community interest throughout the project lifecycle.",
      },
      {
        text: "Project Implementation and Management: We handle project activities and can partner or sub-grant with your organization to implement various projects and programs.",
      },
      {
        text: "Monitoring and Evaluation: We conduct situation analysis, baseline surveys, midline, and end-line evaluations. We also design M&E tools that serve as performance indicators throughout the project cycle.",
      },
      {
        text: "Training & Workshop Facilitation: We facilitate and manage training sessions and workshops, handling both technical aspects and logistics.",
      },
    ],
    approachText:
      "The Centre employs skills and methods that enhance stakeholder participation through the use of Participatory Learning and Action (PLA) tools.",
  },
  team: {
    headerTitle: "Meet the Team Behind Our Exceptional Services",
    headerDescription:
      "We carry out a variety of services including Core research and surveys, Organisational Capacity assessment (OCA), Evaluation research, Community mobilization and development, Training and capacity building, Project planning and management, Translation and transcription services.",
    members: [
      { title: "Executive Director", name: "Mary Okpe" },
      { title: "Research Officer", name: "Margaret Dankaro" },
      { title: "Data Analyst", name: "Binta Hassan" },
      { title: "Finance Officer", name: "Gauje Benjamin" },
      { title: "Admin Assistant", name: "Olaide Olasupo" },
    ],
    zonalCoordinators: [
      {
        zone: "Northwest Zone",
        coordinator: "Prof. Rafiu O. Yusuf",
        department: "Department of Geography",
        institution: "Ahmadu Bello University, Zaria",
      },
      {
        zone: "Northeast Zone",
        coordinator: "Dr. Talatu Adiwu",
        department: "Department of Fine Arts",
        institution: "University of Maiduguri, Borno",
      },
      {
        zone: "Southeast Zone",
        coordinator: "Dr. Ndubisi Isaac",
        department: "Department of Political Science",
        institution: "University of Nigeria, Nsukka",
      },
      {
        zone: "Southsouth Zone",
        coordinator: "Prof. Pauline Esoka",
        department: "Department of Geography",
        institution: "University of Calabar, Calabar",
      },
      {
        zone: "Southwest Zone",
        coordinator: "Dr. Deborah Yakubu",
        department: "Department of Urban and Regional Planning",
        institution: "Osun State University, Oshogbo",
      },
    ],
  },
  gallery: {
    images: [
      "/images/image11.png",
      "/images/image12.png",
      "/images/image13.png",
      "/images/image14.png",
    ],
  },
  footer: {
    address: "No. 11 Shehu Ladan Road, Kabama Layout, Zaria, Kaduna State",
    phone1: "+234 818 6874708",
    phone2: "+234 803 5077195",
    email: "cdrtmails@gmail.com",
  },
  contactPage: {
    title: "Contact us",
    description:
      "We're here to help! If you have any questions or need further information about our Human Resource Management and Development Support Services, feel free to reach out. Our team in Nigeria is dedicated to supporting you through every step of your journey.",
  },
};

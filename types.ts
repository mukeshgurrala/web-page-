
export interface ClinicData {
  name: string;
  tagline: string;
  doctors: Doctor[];
  treatments: Treatment[];
  facilities: string[];
  contact: ContactInfo;
  about: string;
}

export interface Doctor {
  name: string;
  credentials: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Treatment {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  mapEmbedUrl?: string;
}

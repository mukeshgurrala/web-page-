
import { ClinicData } from './types';

export const DEFAULT_CLINIC_DATA: ClinicData = {
  name: "Elite Physio Care",
  tagline: "Restoring Movement, Enhancing Life.",
  about: "We specialize in personalized physical therapy programs designed to help you recover faster and perform better. Our evidence-based approach combines manual therapy, advanced technology, and functional movement training.",
  doctors: [
    {
      name: "Dr. Sarah Mitchell",
      credentials: "DPT, OCS, FAAOMPT",
      specialty: "Orthopedic Specialist",
      image: "https://picsum.photos/seed/doc1/400/400",
      bio: "With over 12 years of experience in high-performance athletics, Dr. Mitchell leads our sports injury division."
    },
    {
      name: "Dr. James Wilson",
      credentials: "PT, MSPT, CKTP",
      specialty: "Neuro-Rehabilitation",
      image: "https://picsum.photos/seed/doc2/400/400",
      bio: "James specializes in complex neurological recovery and post-surgical rehabilitation."
    }
  ],
  treatments: [
    {
      title: "Sports Rehabilitation",
      description: "Customized recovery plans for athletes to return to sport safely and efficiently.",
      icon: "Activity"
    },
    {
      title: "Manual Therapy",
      description: "Hands-on techniques to reduce pain and restore joint and soft tissue mobility.",
      icon: "Hand"
    },
    {
      title: "Post-Surgical Care",
      description: "Guided recovery protocols following orthopedic and spinal surgeries.",
      icon: "ShieldCheck"
    },
    {
      title: "Posture Correction",
      description: "Corrective exercises and ergonomic advice to eliminate chronic pain.",
      icon: "User"
    }
  ],
  facilities: [
    "State-of-the-art Rehabilitation Gym",
    "Private Assessment Rooms",
    "Cryotherapy & Recovery Zone",
    "Advanced Gait Analysis Studio"
  ],
  contact: {
    address: "123 Medical Plaza, Health Suite 500, Metro City, MC 10101",
    phone: "(555) 123-4567",
    email: "appointments@elitephysio.com",
    openingHours: "Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 2:00 PM"
  }
};

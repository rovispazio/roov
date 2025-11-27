export interface EventLocation {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  details: string[];
  spotsTotal: number;
  spotsTaken: number;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}


export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  details: {
    problem: string;
    approach: string;
    outcome: string;
  };
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface CareerInfo {
  name: string;
  role: string;
  expectedSalary: string;
  currentCTC: string;
  noticePeriod: string;
  availability: string;
  openToOffers: boolean;
  preferredRoles: string[];
  workType: string;
  techStack: string[];
  summary: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

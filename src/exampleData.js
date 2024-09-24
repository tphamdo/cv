import { v4 as uuidv4 } from 'uuid';

const exampleData = {
  personalInfo: {
    name: 'Trueman Phamdo',
    email: 'trueman@phamdo.com',
    phone: '410-953-9920',
    address: 'Ellicott City, MD',
  },
  educationList: [
    {
      school: 'University of Maryland',
      startDate: '08/2018',
      endDate: '05/2022',
      degree: 'Bachelors in Computer Science',
      location: 'College Park, MD',
      id: uuidv4(),
    },
    {
      school: 'University of Maryland',
      startDate: '08/2018',
      endDate: '05/2022',
      degree: 'Bachelors in Mathematics',
      location: 'College Park, MD',
      id: uuidv4(),
    },
  ],
  workList: [
    {
      company: 'Google',
      position: 'Software Engineer',
      startDate: '06/2022',
      endDate: '01/2024',
      location: 'Mountain View, CA',
      description:
        'Worked on the Google Assistant on Android Auto team, developing features for UI theming, Whatsapp Assistant CUJs, Music control, and more (Java, Kotlin, C++)',
      id: uuidv4(),
    },
    {
      company: 'JHU Applied Physics Lab',
      position: 'Software Engineer Intern',
      startDate: '06/2021',
      endDate: '05/2022',
      location: 'Laurel, MD',
      description:
        'Worked on internal tooling, developing a GPS GUI tool to parse and record satellite data. Tool was used in field tests and applauded by our customers (C++)',
      id: uuidv4(),
    },
    {
      company: 'JHU Applied Physics Lab',
      position: 'Software Engineer Intern',
      startDate: '05/2019',
      endDate: '08/2019',
      location: 'Laurel, MD',
      description:
        'Built internal tool to automate radar simulation runs, increasing team velocity and eliminating manual input errors for a team of 40+ users',
      id: uuidv4(),
    },
  ],
};

export default exampleData;

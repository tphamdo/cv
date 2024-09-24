import { v4 as uuidv4 } from 'uuid';

const exampleData = {
  personalInfo: {
    name: 'Trueman Phamdo',
    email: 'trueman@phamdo.com',
    phone: '(410)-953-9920',
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
        'Worked on the Google Assistant on Android Auto team, developing features for UI theming, Whatsapp Assistant CUJs, Music control, and more',
      id: uuidv4(),
    },
  ],
};

export default exampleData;

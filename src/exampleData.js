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
  ],
};

export default exampleData;

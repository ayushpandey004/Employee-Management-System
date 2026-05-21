
const employees = [
  {
    "id": 1,
    "firstName": "Ayush",
    "email": "ayush@company.com",
    "password": "123",
    "tasks": []
  },
  {
    "id": 2,
    "firstName": "Rohit",
    "email": "rohit@company.com",
    "password": "123",
    "tasks": []
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "priya@company.com",
    "password": "123",
    "tasks": []
  },
  {
    "id": 4,
    "firstName": "Aman",
    "email": "aman@company.com",
    "password": "123",
    "tasks": []
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "neha@company.com",
    "password": "123",
    "tasks": []
  }
];


const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@company.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};


export const getLocalStorage = () => {
  let employees = JSON.parse(localStorage.getItem('employees'));
  let admin = JSON.parse(localStorage.getItem('admin'));
  if (!employees || !admin) {
    setLocalStorage();
    employees = JSON.parse(localStorage.getItem('employees'));
    admin = JSON.parse(localStorage.getItem('admin'));
  }
  return { employees, admin };
};
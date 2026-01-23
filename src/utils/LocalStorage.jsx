const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Update Task List UI",
        description:
          "Improve UI design and add better spacing in task list page.",
        date: "2026-01-23",
        category: "Frontend",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Fix Login Bug",
        description: "Fix the issue where user login fails after page refresh.",
        date: "2026-01-20",
        category: "Bug Fix",
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Deploy on Netlify",
        description: "Deploy the frontend project and test live routing.",
        date: "2026-01-18",
        category: "Deployment",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Create Employee Dashboard",
        description:
          "Build dashboard layout with task cards and summary counts.",
        date: "2026-01-23",
        category: "Frontend",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "API Integration",
        description: "Connect employee dashboard with backend API endpoints.",
        date: "2026-01-21",
        category: "Backend",
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Write Unit Tests",
        description: "Write basic unit tests for task component.",
        date: "2026-01-19",
        category: "Testing",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Design Admin Panel",
        description: "Create admin panel sidebar and main layout structure.",
        date: "2026-01-23",
        category: "UI/UX",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Add Task Filter",
        description: "Add filtering feature by category and status.",
        date: "2026-01-22",
        category: "Frontend",
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Fix Form Validation",
        description: "Fix validation errors in create task form.",
        date: "2026-01-17",
        category: "Bug Fix",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Create Task Card Component",
        description: "Build reusable task card with status badge and date.",
        date: "2026-01-23",
        category: "Frontend",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Improve Responsiveness",
        description: "Make dashboard fully responsive for mobile devices.",
        date: "2026-01-21",
        category: "UI/UX",
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Database Schema Planning",
        description: "Plan schema for employee and tasks in MongoDB.",
        date: "2026-01-16",
        category: "Database",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Create Task Form",
        description: "Build form to create new task with all required fields.",
        date: "2026-01-23",
        category: "Frontend",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Add Logout Feature",
        description: "Add logout button and clear user session properly.",
        date: "2026-01-20",
        category: "Auth",
      },
      {
        active: false,
        completed: false,
        failed: true,
        title: "Fix Date Picker",
        description:
          "Fix issue where date picker does not select correct date.",
        date: "2026-01-18",
        category: "Bug Fix",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};

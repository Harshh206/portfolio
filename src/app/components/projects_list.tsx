const projects = [
  {
    id: 1,
    title: "Deepfake Detection using DeepLearning",
    description:
      "Use of EfficientNet + TCN for effective real time as well as manual/auto video deepfake detection",
    longDescription:
      "Developed a real-time deepfake detection system using EfficientNet and Temporal Convolutional Networks (TCN) for manipulated video classification. Implemented face extraction, video preprocessing, and temporal feature learning using OpenCV and PyTorch. Built an end-to-end CNN + TCN pipeline for spatial and temporal deepfake analysis. Optimized inference and model evaluation to improve real-time detection accuracy and reliability.",
    image:
      "",
    tags: ["React", "API Integration", "Tailwind CSS", "Local Storage"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
    duration: "2 months",
    features: [],
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "Final year project: A collaborative task manager with real-time updates and user authentication.",
    longDescription:
      "A full-stack task management application developed as my final year project. This platform enables teams to collaborate on projects, assign tasks, track progress, and communicate in real-time. It features secure user authentication and real-time updates using WebSocket technology.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1OTYxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Academic Project",
    duration: "4 months",
    features: [
      "User authentication and authorization with JWT",
      "Create, assign, and track tasks with priority levels",
      "Real-time updates using Socket.io",
      "Team collaboration features with role-based access",
      "Dashboard with analytics and progress tracking",
      "File attachments and comments on tasks",
    ],
  },
  {
    id: 3,
    title: "Weather Forecast Application",
    description:
      "A responsive weather app that displays current weather and 5-day forecast for any location.",
    longDescription:
      "A sleek weather application that provides current weather conditions and a 5-day forecast for any location worldwide. The app uses the OpenWeatherMap API to fetch accurate weather data and presents it in a user-friendly, visually appealing interface.",
    image:
      "https://images.unsplash.com/photo-1552233697-193249b08f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1OTIyNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["JavaScript", "HTML/CSS", "Weather API", "Geolocation"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
    duration: "1 month",
    features: [
      "Search weather by city name or use geolocation",
      "Display current weather with temperature, humidity, and wind speed",
      "5-day weather forecast with hourly breakdown",
      "Dynamic background changes based on weather conditions",
      "Temperature unit conversion (Celsius/Fahrenheit)",
      "Clean and responsive UI design",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website Builder",
    description:
      "A drag-and-drop portfolio builder for creatives to showcase their work without coding.",
    longDescription:
      "An intuitive portfolio website builder that empowers designers, photographers, and creatives to build professional portfolio websites without any coding knowledge. Features a drag-and-drop interface with customizable templates and sections.",
    image:
      "https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2NTk3MDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "DnD Kit", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
    duration: "3 months",
    features: [
      "Drag-and-drop interface for easy customization",
      "Multiple pre-designed templates to choose from",
      "Image gallery with lightbox functionality",
      "Contact form integration",
      "Export portfolio as static HTML/CSS",
      "Mobile-responsive preview mode",
    ],
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description:
      "A mini e-learning platform with course videos, quizzes, and progress tracking.",
    longDescription:
      "An educational platform designed for online learning, featuring video lectures, interactive quizzes, and progress tracking. Built as a semester project, it demonstrates full-stack development skills and understanding of educational technology.",
    image:
      "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvdXJzZXN8ZW58MXx8fHwxNzY1OTgyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Express", "MySQL", "Video.js"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Academic Project",
    duration: "3 months",
    features: [
      "Course catalog with search and filter options",
      "Video player with playback controls and subtitles",
      "Interactive quizzes with instant feedback",
      "User progress tracking and certificates",
      "Admin panel for course management",
      "Discussion forums for student interaction",
    ],
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "A personal finance app to track income, expenses, and visualize spending patterns.",
    longDescription:
      "A comprehensive personal finance management application that helps users track their income and expenses, categorize transactions, and visualize spending patterns through interactive charts and graphs.",
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1OTc2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Chart.js", "IndexedDB", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
    duration: "1.5 months",
    features: [
      "Add and categorize income/expense transactions",
      "Visual charts for spending analysis",
      "Budget setting and alerts",
      "Export data as CSV or PDF",
      "Offline functionality with IndexedDB",
      "Progressive Web App for mobile installation",
    ],
  },
];

export { projects };

import { ArrowRight, ExternalLink, Github } from "lucide-react";

/* Map each tech tag to its CDN-hosted logo */
const tagIcons = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Socket.io":
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Tailwind CSS": "/tailwind.svg", // Assuming you have this in your public folder
  "CoinGecko API":
    "https://static.coingecko.com/s/coingecko-logo-02cbd083b1ec198cc0ed54e6c6d1fa50812820556f36c93d75d99154f7f2a39e.png",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  JPA: "https://miro.medium.com/v2/resize:fit:2400/format:webp/1*o_2fQcR6N4v1re1Z9cBlCw.png",
  Swagger: "/swagger.svg",
};

const projects = [
  {
    id: 1,
    title: "Codlet - Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with chat, voice, whiteboard, and support for multi-language code execution. Built for pair programming and remote interviews.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "Socket.io", "Docker"],
    demoUrl: "https://cod-let.vercel.app/",
    githubUrl: "https://github.com/karthi9772/CodLet",
  },
  {
    id: 2,
    title: "CryptoPlace",
    description:
      "A web app that displays real-time crypto data using the CoinGecko API. Includes search, multi-currency support (INR, USD, EUR), and charts via react-google-chart.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "CoinGecko API"],
    demoUrl: "https://crypto-tracker-karthi9772.netlify.app/",
    githubUrl: "https://github.com/karthi9772/Crypto-Tracker",
  },
  {
    id: 3,
    title: "Gym Management System Backend",
    description:
      "Scalable Spring Boot backend for managing gym members, subscriptions, and dashboard stats. Includes REST APIs, Swagger integration, and MySQL support.",
    image: "/projects/project3.png",
    tags: ["Spring Boot", "MySQL", "JPA", "Swagger"],
    demoUrl: "#",
    githubUrl: "https://github.com/karthi9772/gym-management-backend",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project details */}
              <div className="p-6">
                {/* Tags with logos */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tagIcons[tag] && (
                        <img
                          src={tagIcons[tag]}
                          alt={tag}
                          className="inline-block w-4 h-4 mr-1"
                        />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/karthi9772"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

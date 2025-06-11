import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  {
    name: "Java",
    level: 90,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  // Technologies
  {
    name: "React.js",
    level: 90,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Spring Boot",
    level: 85,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "technologies",
    icon: "/icons/tailwindcss.svg",
  },

  {
    name: "MySQL",
    level: 85,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "HTML",
    level: 95,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: 95,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    level: 80,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    level: 75,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Git/GitHub",
    level: 90,
    category: "technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  // DevOps
  {
    name: "Docker",
    level: 70,
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "GitHub Actions",
    level: 65,
    category: "devops",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg",
  },
  {
    name: "VPS Hosting",
    level: 75,
    category: "devops",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", // generic server icon
  },

  // Tools
  {
    name: "VSCode",
    level: 95,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "IntelliJ",
    level: 85,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },
  {
    name: "Eclipse",
    level: 80,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  },
  {
    name: "Postman",
    level: 85,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },

  // Hardware
  {
    name: "PC Building",
    level: 90,
    category: "hardware",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
  },
  {
    name: "Fix Computer Hardware Issues",
    level: 90,
    category: "hardware",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
];

const categories = [
  "all",
  "languages",
  "technologies",
  "devops",
  "tools",
  "hardware",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

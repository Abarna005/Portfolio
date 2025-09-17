import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github, Dribbble } from "lucide-react";

// Internship images
import Login from "../assets/login.jpg";
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";
import Img6 from "../assets/Img6.jpg";
import Img7 from "../assets/Img7.jpg";
import Img8 from "../assets/Img8.jpg";
import Img9 from "../assets/Img9.jpg";
import Img10 from "../assets/Img10.jpg";
import Project1 from "../assets/Screenshot 2025-09-06 234624.jpg";
import Leanify from "../assets/LearniFy.png";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },

  // Internship images
  { image: Login, category: "Internship" },
  { image: Img1, category: "Internship" },
  { image: Img2, category: "Internship" },
  { image: Img3, category: "Internship" },
  { image: Img4, category: "Internship" },
  { image: Img5, category: "Internship" },
  { image: Img6, category: "Internship" },
  { image: Img7, category: "Internship" },
  { image: Img8, category: "Internship" },
  { image: Img9, category: "Internship" },
  { image: Img10, category: "Internship" }
];

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "A beautiful landing page app using Html and Tailwind.",
    image: Project1,
    tags: ["Html", "tailwind.css"],
    demoUrl: "#",
    githubUrl: "https://github.com/Abarna005/Finance-App",
    category: "Frontend"
  },
  
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with authentication and payments.",
    image: Leanify,
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "",
    githubUrl:
      "https://www.behance.net/gallery/234110397/Online-LearniFy-Dashboard-UI",
    category: "Figma"
  }
];

const categories = ["Internship", "Frontend", "Figma"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Internship");
  const [selectedImage, setSelectedImage] = useState(null);
  const [defaultView, setDefaultView] = useState("6");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Work</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
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

        {/* Internship Images */}
        {activeCategory === "Internship" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills
                .slice(0, defaultView === "6" ? 6 : filteredSkills.length)
                .map((skill, key) => (
                  <div
                    key={key}
                    className="bg-card p-4 rounded-lg shadow-xs card-hover cursor-pointer"
                    onClick={() => setSelectedImage(skill.image)}
                  >
                    <img
                      src={skill.image}
                      alt="Internship"
                      className="rounded-lg object-cover w-full h-40"
                    />
                  </div>
                ))}
            </div>

            {/* Show More / Show Less Button */}
            {filteredSkills.length > 6 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() =>
                    setDefaultView(defaultView === "6" ? "all" : "6")
                  }
                  className="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-colors"
                >
                  {defaultView === "6" ? "Show More" : "Show Less"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Frontend / Figma Projects */}
        {(activeCategory === "Frontend" || activeCategory === "Figma") && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {/* <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a> */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
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
        )}
      </div>

      {/* Internship Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Popup"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Trophy,
  Medal,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Achievements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      issuer: "DeepVision Hackathon",
      date: "2025",
      type: "Award",
      icon: <Award className="w-8 h-8" />,
      description:
        "Won first place for a smart education app in a 24-hour hackathon.",
      verifyLink: "#",
      skills: ["Leadership", "Competition", "Hackathon", "Smart Education"],
    },
    {
      id: 2,
      title: "Hackathon Final Round",
      issuer: "Innovatrix Hackathon",
      date: "2024",
      type: "Award",
      icon: <Trophy className="w-8 h-8" />,
      description:
        "Reached the final round among 100 teams for an AI Mental Health Chatbot in a 24-hour hackathon.",
      verifyLink: "#",
      skills: ["Leadership", "Competition", "Hackathon", "Smart Education"],
    },
    {
      id: 3,
      title: "Introduction to DBMS Certification",
      issuer: "NPTEL",
      date: "2023",
      type: "Certification",
      icon: <Medal className="w-8 h-8" />,
      description:
        "Advanced database skills covering ER modeling, relational models, and SQL fundamentals.",
      verifyLink: "#",
      skills: [
        "Database Management Systems",
        "SQL",
        "ER Modeling",
      ],
    },
    {
      id: 4,
      title: "Datathon",
      issuer: "Bug Busters",
      date: "2023",
      type: "Award",
      icon: <Trophy className="w-8 h-8" />,
      description:
        "Recognized for outstanding data-driven innovation and reaching the Datathon Final Round.",
      verifyLink: "#",
      skills: [
        "Data Analysis",
        "Machine Learning",
        "Python",
        "Feature Engineering",
        "Problem Solving",
      ],
    },
    {
      id: 5,
      title: "Data Science Certification",
      issuer: "Deloitte",
      date: "2024",
      type: "Certification",
      icon: <Medal className="w-8 h-8" />,
      description:
        "Completed a virtual internship program on Data Science and Analytics.",
      verifyLink: "#",
      skills: ["Data Science", "Job Simulation", "Analytics"],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "certification":
        return "bg-blue-500/10 text-blue-400 border-blue-400/20";
      case "award":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-400/20";
      default:
        return "bg-green-500/10 text-green-400 border-green-400/20";
    }
  };

  return (
    <section className="relative py-20">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Recognition
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          A showcase of awards, certifications, and recognitions earned through
          dedication and creativity.
        </p>
      </div>

      {/* Scroll buttons */}
      <Button
        size="icon"
        variant="outline"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 backdrop-blur-md shadow-lg z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 backdrop-blur-md shadow-lg z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 px-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 snap-center border border-white/10 bg-gradient-to-b from-gray-900/60 to-gray-800/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                    {achievement.icon}
                  </div>
                  <Badge className={getTypeColor(achievement.type)}>
                    {achievement.type}
                  </Badge>
                </div>
                <div className="text-sm text-text-muted flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {achievement.date}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-1 text-white">
                {achievement.title}
              </h3>
              <p className="text-primary text-sm mb-2 font-medium">
                {achievement.issuer}
              </p>
              <p className="text-sm text-text-secondary mb-4">
                {achievement.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {achievement.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs border-primary/20 text-primary/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full text-primary hover:bg-primary hover:text-white border-primary/30"
                onClick={() => window.open(achievement.verifyLink, "_blank")}
              >
                View Certificate
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

import React from "react";
import Card from "./Card";

const CoursesList = () => {
  const courses = [
    {
      title: "Introduction to Computer Science",
      institution: "Harvard",
      tags: ["Technology"],
      description: "A foundational course in computer science.",
      price: 100,
    },
    {
      title: "Principles of Economics",
      institution: "Harvard",
      tags: ["Business", "Economics"],
      description: "Learn about the basics of economics.",
      price: 120,
    },
    {
      title: "Shakespeare: The Early Plays",
      institution: "Yale",
      tags: ["Humanities", "Literature"],
      description: "Dive into Shakespeare's early works.",
      price: 0, // Free
    },
    {
      title: "Psychology and the Good Life",
      institution: "Yale",
      tags: ["Psychology"],
      description: "Learn about happiness and well-being.",
      price: null, // Free
    },
    {
      title: "Algorithms and Data Structures",
      institution: "Princeton",
      tags: ["Technology"],
      description: "An advanced course in algorithms.",
      price: 130,
    },
    {
      title: "History of the American Revolution",
      institution: "Princeton",
      tags: ["History"],
      description: "Explore the causes and effects of the American Revolution.",
      price: 95,
    },
    {
      title: "Introduction to AI",
      institution: "Columbia",
      tags: ["Technology", "AI"],
      description: "A course on the fundamentals of artificial intelligence.",
      price: 150,
    },
    {
      title: "Business Analytics",
      institution: "Columbia",
      tags: ["Business", "Data Analysis"],
      description: "Learn how to analyze business data.",
      price: 140,
    },
    {
      title: "Engineering for Health",
      institution: "Cornell",
      tags: ["Health", "Engineering"],
      description: "Innovative engineering solutions for health challenges.",
      price: 160,
    },
    {
      title: "Genomics in Health",
      institution: "Cornell",
      tags: ["Biology", "Health"],
      description: "Study the role of genomics in health and disease.",
      price: 175,
    },
    {
      title: "Blockchain Fundamentals",
      institution: "University of Pennsylvania",
      tags: ["Technology", "Blockchain"],
      description: "Learn about blockchain technology and its applications.",
      price: 180,
    },
    {
      title: "Marketing Strategy",
      institution: "University of Pennsylvania",
      tags: ["Business"],
      description: "Strategic marketing concepts and frameworks.",
      price: 125,
    },
    {
      title: "Neuroscience of Learning",
      institution: "Brown",
      tags: ["Biology", "Psychology"],
      description: "How the brain learns and retains information.",
      price: 145,
    },
    {
      title: "Ancient Civilizations",
      institution: "Brown",
      tags: ["History", "Anthropology"],
      description: "Explore the world's oldest civilizations.",
      price: 115,
    },
    {
      title: "Social Entrepreneurship",
      institution: "Dartmouth",
      tags: ["Business", "Social Impact"],
      description: "Creating businesses for social good.",
      price: 135,
    },
    {
      title: "Machine Learning Basics",
      institution: "Dartmouth",
      tags: ["Technology", "AI"],
      description: "Introduction to the concepts of machine learning.",
      price: 170,
    },
    {
      title: "Finance for Executives",
      institution: "Harvard Business School",
      tags: ["Business", "Finance"],
      description: "Advanced finance strategies for executives.",
      price: 200,
    },
    {
      title: "Organizational Leadership",
      institution: "Harvard Business School",
      tags: ["Business", "Leadership"],
      description: "Leadership theories and practices for businesses.",
      price: 220,
    },
    {
      title: "Advanced Marketing Concepts",
      institution: "Columbia Business School",
      tags: ["Business", "Marketing"],
      description: "Deep dive into advanced marketing strategies.",
      price: 210,
    },
    {
      title: "Global Strategy",
      institution: "Columbia Business School",
      tags: ["Business", "Strategy"],
      description: "How businesses operate on a global scale.",
      price: null, // Free
    },
    {
      title: "Ethics in Technology",
      institution: "Harvard",
      tags: ["Technology", "Ethics"],
      description: "The ethical implications of technological advancements.",
      price: 105,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {courses.map((course, index) => (
        <Card
          key={index}
          institution={course.institution}
          title={course.title}
          description={`${course.description}`}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CoursesList;

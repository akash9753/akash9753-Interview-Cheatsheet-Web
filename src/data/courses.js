export const courses = [
  {
    slug: 'mssql',
    mdFile: 'mssql learning course.md',
    num: '01',
    cardTitle: 'MSSQL Learning Course',
    cardDesc: 'SQL fundamentals, joins, indexes, normalization, and SQL Server topics.',
    brand: 'MSSQL Learning Course',
  },
  {
    slug: 'programming-principles',
    mdFile: 'programming-principles-interview-roadmap.md',
    num: '02',
    cardTitle: 'Programming Principles',
    cardDesc: 'SOLID, design patterns, and architectural patterns for interviews.',
    brand: 'Programming Principles',
  },
  {
    slug: 'csharp-fundamentals',
    mdFile: 'csharp-fundamentals-interview-roadmap.md',
    num: '03',
    cardTitle: 'C# Fundamentals',
    cardDesc: 'Core C# syntax, collections, LINQ, async, memory, and modern features.',
    brand: 'C# Fundamentals',
  },
  {
    slug: 'csharp-oops',
    mdFile: 'csharp-oops-interview-roadmap.md',
    num: '04',
    cardTitle: 'C# OOP',
    cardDesc: 'Classes, inheritance, polymorphism, abstraction, and OOP concepts.',
    brand: 'Csharp Oops Interview Roadmap',
  },
  {
    slug: 'entity-framework-core',
    mdFile: 'entity-framework-core-interview-roadmap.md',
    num: '05',
    cardTitle: 'Entity Framework Core',
    cardDesc: 'DbContext, migrations, relationships, LINQ queries, and EF Core patterns.',
    brand: 'Entity Framework Core Interview Roadmap',
  },
  {
    slug: 'aspnet-core-mvc',
    mdFile: 'aspnet-core-mvc-interview-roadmap.md',
    num: '06',
    cardTitle: 'ASP.NET Core MVC',
    cardDesc: 'MVC pipeline, routing, middleware, dependency injection, and web concepts.',
    brand: 'Aspnet Core Mvc Interview Roadmap',
  },
];

const markdownModules = import.meta.glob('../../MarkDownFormat/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug) ?? null;
}

export function getCourseMarkdown(mdFile) {
  const entry = Object.entries(markdownModules).find(([path]) => path.endsWith(`/${mdFile}`));
  return entry ? entry[1] : null;
}

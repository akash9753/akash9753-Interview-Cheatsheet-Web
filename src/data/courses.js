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
  {
    slug: 'azure',
    mdFile: 'azure-interview-roadmap.md',
    num: '07',
    cardTitle: 'Azure',
    cardDesc: 'Azure compute, storage, networking, identity, monitoring, and cloud architecture.',
    brand: 'Azure Interview Roadmap',
  },
  {
    slug: 'microservices',
    mdFile: 'microservices-interview-roadmap.md',
    num: '08',
    cardTitle: 'Microservices',
    cardDesc: 'Service design, messaging, sagas, resilience patterns, and distributed systems.',
    brand: 'Microservices Interview Roadmap',
  },
  {
    slug: 'react',
    mdFile: 'react-interview-roadmap.md',
    num: '09',
    cardTitle: 'React',
    cardDesc: 'Components, hooks, routing, state management, performance, and React 18 interview topics.',
    brand: 'React Interview Roadmap',
  },
  {
    slug: 'dotnet-senior-interview-qa',
    mdFile: 'dotnet-senior-interview-qa.md',
    num: '10',
    cardTitle: '.NET Senior Interview Q&A',
    cardDesc: '215 senior-level Q&A — C#, ASP.NET Core, EF Core, security, messaging, and system design.',
    brand: '.NET Senior Interview Q&A',
  },
  {
    slug: 'scenario-based-interview-qa',
    mdFile: 'scenario-based-interview-qa.md',
    num: '11',
    cardTitle: 'Scenario-Based Interview Q&A',
    cardDesc: '50 real-world scenarios — API, Angular, microservices, security, and architecture with concise answers.',
    brand: 'Scenario-Based Interview Q&A',
  },
  {
    slug: 'react-qp',
    mdFile: 'react-qp.md',
    num: '12',
    cardTitle: 'React QP',
    cardDesc: 'Standard React learning sequence — setup, hooks, Virtual DOM, routing, forms, Axios, Context, Redux, JWT, and performance.',
    brand: 'React QP',
  },
  {
    slug: 'javascript',
    mdFile: 'javascript-learning-roadmap.md',
    num: '13',
    cardTitle: 'JavaScript',
    cardDesc: 'Standard JS roadmap — execution context, closures, this, spread/rest, async, DOM, debounce/throttle, and interview essentials.',
    brand: 'JavaScript Learning Roadmap',
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

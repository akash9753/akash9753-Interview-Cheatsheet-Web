import { Link } from 'react-router-dom';
import { getCoursesGroupedByCategory } from '../data/courses';

export function Home() {
  const groups = getCoursesGroupedByCategory();

  return (
    <div className="home-page">
      <h1>Interview Cheatsheet</h1>
      <p className="subtitle">Choose a topic by category to open the learning roadmap.</p>

      {groups.map((group) => (
        <section className="course-category" key={group.id} id={`category-${group.id}`}>
          <div className="category-header">
            <h2 className="category-title">{group.label}</h2>
            <p className="category-desc">{group.description}</p>
            <span className="category-count">{group.courses.length} courses</span>
          </div>

          <div className="grid">
            {group.courses.map((course) => (
              <Link className="card" to={`/course/${course.slug}`} key={course.slug}>
                <span className={`card-category card-category-${group.id}`}>{group.label}</span>
                <span className="card-num">{course.num}</span>
                <h3 className="card-title">{course.cardTitle}</h3>
                <p className="card-desc">{course.cardDesc}</p>
                <div className="card-arrow">Open course →</div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <p className="footer">Made by Akash</p>
    </div>
  );
}

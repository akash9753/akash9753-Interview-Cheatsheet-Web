import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

export function Home() {
  return (
    <div className="home-page">
      <h1>Interview Cheatsheet</h1>
      <p className="subtitle">Choose a topic to open the learning roadmap.</p>

      <div className="grid">
        {courses.map((course) => (
          <Link className="card" to={`/course/${course.slug}`} key={course.slug}>
            <span className="card-num">{course.num}</span>
            <h2 className="card-title">{course.cardTitle}</h2>
            <p className="card-desc">{course.cardDesc}</p>
            <div className="card-arrow">Open course →</div>
          </Link>
        ))}
      </div>

      <p className="footer">Made by Akash</p>
    </div>
  );
}

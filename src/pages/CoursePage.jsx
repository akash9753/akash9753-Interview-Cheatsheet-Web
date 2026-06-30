import { Navigate, useParams } from 'react-router-dom';
import { CourseLayout } from '../components/CourseLayout';
import { getCourseBySlug, getCourseMarkdown } from '../data/courses';

export function CoursePage() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const markdown = course ? getCourseMarkdown(course.mdFile) : null;

  if (!course || !markdown) {
    return <Navigate to="/" replace />;
  }

  return <CourseLayout brand={course.brand} markdown={markdown} />;
}

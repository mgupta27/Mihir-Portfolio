import './styles/BlogTile.css'
import { Link } from 'react-router-dom';

const BlogTile = ( {title, date, description} ) => {
  return (
    <div className="blog-tile">
        <div className="blog-title-box">
            <div className="blog-title">
                <Link to="/Blog-1">New Year, New Hobby</Link>
            </div>
        </div>
        <div className="blog-date-box">
            <div className="blog-date">
                { date }
            </div>
        </div>
        <div className="blog-description-box">
            <div className="blog-description">
                {description}
            </div>
        </div>
    </div>
  )
}

export default BlogTile
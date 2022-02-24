import './../App.css';
import Header from './../components/Header';
import BlogHeading from './../components/BlogHeading'
import BlogBody from '../components/BlogBody';

const Blog = () => {
    return (
        <div className='App'>
          <Header />,
          <BlogHeading />,
          <BlogBody />
        </div>
      );
};

export default Blog;

import './styles/BlogBody.css'
import BlogTile from '../components/BlogTile';

const BlogBody = () => {
  return (
    <center>
        <div className="blog-body">
            <table>
                <tr>
                    <th>
                    <BlogTile title="New Year New Hobby" 
                            date="January 1st, 2022" 
                            description="Hello there! Welcome to the first edition on my blog.
                            My name is Mihir and I'm a student studying Computer Engineering at 
                            the University of Waterloo. As a part of my New Year’s resolution 
                            for 2022, I wanted to start this blog to ... " />
                    </th>
                </tr>
            </table>
        </div>
    </center>
  )
}

export default BlogBody
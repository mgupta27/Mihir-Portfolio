import './styles/BlogBody.css'
import BlogTile from '../components/BlogTile';

const BlogBody = () => {
  return (
    <center>
        <div className="blog-body">
            <table>
                <tr>
                <th>
                    <BlogTile title="3, 2, 1 Battlesnakes!" 
                            date="March 12th, 2022"
                            path="/Blog-2" 
                            description="For the past three weeks, I worked with a group of
                            interns to develop a Battlesnake to participate in a company-wide 
                            Battlesnake competition for interns. I am proud to present our 
                            Battlesnake for the competition ... " />
                    </th>

                    <th>
                    <BlogTile title="New Year, New Hobby" 
                            path="/Blog-1"
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
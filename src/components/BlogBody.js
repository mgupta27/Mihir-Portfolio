import './styles/BlogBody.css'
import BlogTile from '../components/BlogTile';

const BlogBody = () => {
  return (
    <center>
        <div className="blog-body">
            <table>
                <tr>
                <th>
                    <BlogTile title="Canadian Rockies" 
                            date="September 2nd, 2022"
                            path="/Blog-3" 
                            description="After a roller-coaster of a first year at Waterloo 
                            engineering, I was long due for a vacation. My family and I decided 
                            to take a trip to Alberta to explore the mountainous wonders of the 
                            Canadian Rockies. The sights were breathtaking to say the least. ... " />
                    </th>

                    <th>
                    <BlogTile title="3, 2, 1 Battlesnakes!" 
                            date="March 12th, 2022"
                            path="/Blog-2" 
                            description="For the past three weeks, I worked with a group of
                            interns to develop a Battlesnake to participate in a company-wide 
                            Battlesnake competition for interns. I am proud to present our 
                            Battlesnake for the competition ... " />
                    </th>
                </tr>
                <tr>
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
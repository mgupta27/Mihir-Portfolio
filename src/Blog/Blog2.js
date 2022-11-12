import Header from '../components/Header'
import BackButton from '../components/BackButton'
import './../components/styles/BlogTemplate.css'
import './../App.css'

const Blog2 = ( ) => {
  return (
    <div className="App">
      <Header />
      <div className="blog-post">
        <div className="blog-title">3, 2, 1 Battlesnakes!</div>
        <div className="blog-date">March 12th, 2022</div>
        <div className="blog-text">
          For the past three weeks, I worked with a group of interns to develop a Battlesnake 
          to participate in a company-wide Battlesnake competition for interns. I am proud to 
          present our Battlesnake (coded in Python and the Flask framework) that took first
          place in the competition: Slyth (yes, it's a reference to Slytherin).
        </div>

        <br />
        <center>
          <div className="image-1"> </div>
        </center>
        <br />

        <div className="blog-text">
          <u>
          Many of you must be wondering what is a Battlesnake and a Battlesnake competiton? Here 
          is a quick overview.
          </u>
        </div>

        <br />

        <div className="blog-text">
          A Battlesnake competition is a multiplayer programming game played by developers all over 
          the world. To participate in a competition, you need a Battlesnake account and a Battlesnake
          to enter in the competition. Below is a sample of what a Battlesnake competition looks like. 
        </div>

        <br />
        <center>
          <div className="image-2"> </div>
        </center>
        <br />

        <div className="blog-text">
          As you can see, multiple Battlesnakes traverse the board as they try to survive and eliminate
          other snakes. Battlesnakes must eat food (the red dots on the board) to keep their health
          up. If their health falls to 0, they are eliminated from the game. Eating food also increases
          the snakes length by 1 block. 
        </div>

        <br />

        <div className="blog-text">
          The Battlesnakes must also be experts in navigating the game board. If they accidentally crash 
          into the wall, their own body, or an opponents' body, they are removed from the game.
          Battlesnakes can also be eliminated in a head-to-head collision. In this case, the shortest snake 
          is knocked out from the match. 
        </div>

        <br />

        <div className="blog-text">
          The Battlesnake is actually a web server that the developer builds to interact with the Battlesnake 
          API. The Battlesnake API sends important information about the status of the game board to the server
          each turn. This information includes the height and width of the board, the location of your Battlesnake, 
          the location of other Battlesnakes, the location of food etc. 
        </div> 

        <br />

        <div className="blog-text">
          The web server is responsible for sending the next move back to the Battlesnake API. The developer 
          must program the logic in the web server to determine the optimal move for the snake in each turn. It is 
          important to make the logic in the web server efficient since it only has 500 milliseconds to send the move. 
          If it exceeds that time restriction, the API will automatically make the previous move again. 
        </div>

        <br />

        <div className="blog-text">
          <u>
            Now let's get into the process of builing our Battlesnake. 
          </u>
        </div>

        <br />

        <div className="blog-text">
          Starting out, my team brainstormed ideas and strategies for our snake. Collectively, we agreed that 
          our Battlesnake should play the game defensively and focus on spreading out its body across the board.
          Watching previous Battlesnake competitions, we noticed that agressive snakes tend to make poor moves 
          and put themselves in danger which leads to their demise. Moreover, many snakes tend to lose the match when
          their body becomes to large since it's easier to trap themselves. 
        </div>

        <br />

        <div className="blog-text">
          Before we implemented our strategy for our Battlesnake, we started off with simple algorithms for our snake to
          follow. We prevented our snake from crashing into walls and had the moves randomly picked. Our snake was now
          able to succesfully move around the board. We then coded functions to prevent the snake from crashing into its 
          own body and an opponents' body. We tested out our snake in an actual competition and found that our code was 
          working well. The last thing we added was a function to have our snake follow the closest piece of food on the 
          board. Thus far, the idea for our snake was to navigate the board safely and eat ask much food as possible. We 
          decided to place a limit on how much the snake should eat to prevent it from becoming too large and have trouble
          traversing the game board.  
        </div>

        <br />

        <div className="blog-text">
          Our snake was doing well in avoiding other snakes, however, we wanted to add algorithms to make our snake more 
          agressive. We noticed that there are key coordinates around the snakes head that could result in a head-to-head
          collision. Our idea was to check if another snakes head was located in those coordinates. If another snake was
          nearby, we would compare the other snakes length with ours. If our snake was longer, we would make the move to attack 
          the other snake. Otherwise, we would avoid the snake.    
        </div>

        <br />

        <div className="blog-text">
          The Battlesnake was coming together now. Our snake was playing defensivley by maintaing it's health and avoiding 
          obstacles, but attacked opponents when it was safe to do so. Our snake was starting to win matches
          and compete against other snakes. The only issue was that our snake made poor choices as its body grew and started
          to trap itself. To fix this issue, one of the team members suggested the flood-fill algorithm. 
        </div>

        <br />

        <div className="blog-text">
          The flood-fill algorithm is a popular algorithm used to traverse a grid and avoid obstacles to complete an action. A 
          visualization of the flood-fill algorithm can be seen below. In this case, the flood-fill algorithm is used to color
          an object orange within the boundaries. You might have encountered this algorithm when you use the paint function in 
          drawing software (e.g. Microsoft Paint). 
        </div>

        <br />
        <center>
          <div className="image-3"> </div>
        </center>
        <br />

        <div className="blog-text">
          In our case, we made a recursive algorithm that counts the number of free blocks in the grid for each direction. 
          This allowed us to analyze the amount of space we had for each move and prevented our snake from entering an 
          inescapable crevice in the game board. Our snake started to make smarter moves now. It was able to eat enough food 
          to become the largest snake on the board, make safe offensive moves to eliminate oponents, and play defensively by 
          avoiding other snakes and moving into more open space to prevent collisions. 
        </div>

        <br />

        <div className="blog-text">
          The final algorithm we added to Slyth is head chasing when the game is down to two snakes. We noticed that it would 
          be better for Slyth to chase the other snake while it has the size advantage to pressure the other snake into a wall
          and win the match quickly. This proved to be a very useful strategy in the competition matches.  
        </div>

        <br />

        <div className="blog-text">
          This marks the end of the three week period for building our Battlesnake. It was time for Slyth to particpate in 
          the tournament.
        </div>

        <br />

        <div className="blog-text">
          <u>
            Competition Results
          </u>
        </div>

        <br />

        <div className="blog-text">
          Personally, I was really nervous too see what would happen during the competition. At this point, our team could only
          hope that Slyth make's the right moves to win the match and advance. 
        </div>

        <br />

        <div className="blog-text">
          Slyth did very well in the quarter and semi finals, taking moves to eliminate other snakes and be the last one standing 
          on the board. We were lucky to advance to the finals of the competition. The competition rules dictate that the first 
          snake to win three matches is the winner of the tournament. It took several games to determine the winner, but I am glad
          Slyth came out victorious in the end! To watch the competition, you can view the recording <a href="https://www.twitch.tv/videos/1422521924?filter=all&sort=time">here</a>.
        </div>

        <br />

        <div className="blog-text">
          If any of you are looking for a hobby or ways to expand your technical skills, I highly suggest trying
          out <a href="https://play.battlesnake.com/">Battlesnakes</a>. It's a great way to learn new algorithms 
          and programming languages in a fun and engaging way. Have fun!
        </div>

        <BackButton />

      </div>
    </div>
  );
}

export default Blog2
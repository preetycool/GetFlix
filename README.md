Welcome to GetFlix - the one stop shop for checking out movies.
I have created a React Web Application that connects to the OMDBApi allowing users to search for a list of movies based off a search term they have provided. The user can then click the movie and will then be shown the details of that movie.

To run this app locally, first clone the repository. Open up your command prompt and have the current directory at the root of the folder.

- Type npm install first to install any dependencies
- Type npm start to start a local instance which connects directly to the OMDB Api. You can now query for movies!
- To run tests, type npm test to run them.

-Tested on Node 11.13 and 14.20.

Technologies used

- React
- Redux & Redux ToolKit
- Sass

Difficulties/Improvements

- I wanted to challenge myself to use Redux for this exercise (good refresher for me as well). In hindsight, to keep the application simple, I would have used local state. Redux added more complexities and would definitely be more suitable if this was a larger application with a lot of global state
- Unit test coverage can be improved. Would always love to aim for 100%!
- Using TypeScript - would have saved me from a lot of bugs :D
- Dynamic fetching is something I would have loved to introduce. I might do this outside of the exercise.

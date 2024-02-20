# React Netflix Clone with GPT Movie Suggestion

- Comprehensive Netflix clone React application!This project, developed using Create React App and meticulously configured with Tailwind CSS, delivers a rich user experience. Notably, it boasts a unique feature powered by OpenAI's GPT (Generative Pre-trained Transformer) for dynamic movie suggestions.


# Authentication with Google Firebase

Implementation Overview:
• Developed user authentication using Google Firebase.
• Configured robust email and password authentication, integrating regex validation for enhanced security.
• Employed useRef() hooks to efficiently manage references to password and email fields.
User Flow:
• Users can seamlessly sign in or sign up through a unified form on the /login route, showcasing a user-friendly design using the ternary operator.


# State Management with Redux

Redux Integration:
• Integrated Redux for streamlined state management.
• Established a Redux store and userSlice, housing essential actions and reducers.
• Implemented conditional sign-in and sign-out functionalities within the useEffect hook, interacting with Google Firebase's API.

User Navigation:
• Utilized the useNavigate() hook to ensure smooth redirection after successful sign-in or sign-out.
• Mitigated potential issues, preventing users from directly accessing the /browse page without a valid account.


# TMDB API Integration

API Integration:
• Registered and obtained an API key from "TMDB" for seamless integration.
• Dynamically fetched movie data from the "Now Playing" section using the TMDB API.
• Organized retrieved data into a Redux store, ensuring an efficient and centralized data management system.


# Custom Hooks and Components

Custom Hooks:
• Developed a custom hook, useNowPlayingMovies(), encapsulating the logic for fetching movies from the TMDB API.

Component Structure:
• Created essential components for the main browse page, including MainContainer and SecondaryContainer.
• Designed and integrated sub-components such as VideoBg, VideoTitle, and MovieList, optimizing the user interface for an immersive experience.

# GPT Movie Suggestions 

Implementation Details:
• Implemented GPT-powered movie suggestions utilizing OpenAI's GPT-3.5 technology.
• Introduced the GptSearch.jsx component, housing the GptSearchBar for user input and GptMovieSuggestions for displaying dynamic movie recommendations.

OpenAI API Integration:
• Utilized OpenAI's API key and the npm i openai package to interact seamlessly with the GPT-3.5 model.
• Configured the content field within the OpenAI function, incorporating a custom variable (gptQuery) to enhance search context.

# Multilingual Support and Responsiveness

Multilingual Features:
• Enriched user experience by hardcoding data for multilingual support.

Responsive Design:
• Ensured the application's responsiveness across a variety of devices, offering a consistent and visually appealing layout.


# Memoization and Environmental Configuration

Optimization Techniques:
• Implemented memoization techniques to optimize API calls, enhancing overall performance.

Environmental Configuration:
• Safeguarded sensitive data by utilizing an .env file to store crucial information, adhering to best practices for security.


























<!-- IN MORE PRECISE WAY

1) Created react application through cra & configured with tailwind, then created routes with {CreateRouteBrowser}.
Firstly we created /login route and created sign in/ sign up form on the same page by using ternary operator.

2) Then we used google firebase to create or make Authentication (used email, password auth of google firebase) then configured the sign up & sign up code in a button handler.

3) Also used regex for email and password so, it will have some conditions on both these fields. Also used useRef() hook to have reference with password and email field.

4) Downloaded 2 redux libraries, created store and then created userSlice and export all actions and reducers functions. Then, we wrote sign in and sign out case inside a if else condition by using again an api by google firebase . (Get the currently signed in user) All these we wrote it inside useEffect hook.

5) Also, we use { Navigate () } hook to navigate our user after sign in or sign out in login.jsx. We only provide navigate() in our AuthChangedApi. Also we fixed the bug we have inside our code so, our user won't go directly to /browse page without having an account.

6) Then, we created an account on "TMDB" and there we o into APi< API Reference < Movie list<  Now playing,  section. After the we created const = ALL_Options and saved header options in that. After that we created a function for fetching movies from the provided API by TMDB.

7) Then, we create slice for movies (moviesSlice) and add it into appStore of reducer and then used useDispatch(), to access data and passed our json.results in useDispatch so, the data come from api can get stored in redux store.
(Basically we fetched API from TMDB API and store it in our redux store)

8) After all we created our own custom hook, useNowPLayingMovies(); and shifts all the code and moved it in out custom hook to make it look clear.

9) Then we fetched a single movie trailer through youtube key we got through API and used that key in youtube embedded link.

10) Then we created our 2 main components that will be present in /Browse, which are: MainContainer and SecondaryContainer.
In MainContainer we create 2 more componenets the first is VideoBg and second is VideoTitle then we passed props of movie that we will be going to show on the front page and then we customize or used tailwind for UI.
In VideoTitle component we set the name and description of the main movie and used props  from out MainContainer and Same we did in VideoBg component.

11) Then we created secondart container component and in that we used component MovieList to displayed on secondary container component.
In MovieList, we fetched different different movies role from their respective api for example: popular movies, top rated, now playing etc. And then create custom hooks for each movie list and in MovieCard component, we designed the look of movie card and we used it in MovieList. Then, we add tailwind to enhance UI.

12) Then , we start working on out GPT feature.
We created a component named GptSearch.jsx in which we add 2 components, named: GptSearchBar and GptMovieSuggestions.
In GptSearchBar.jsx we created a search field and button. Then, we use a hook named: useRef() to get the value of the search field.
And the main feature: we used API_KEY from OpenAI platform and used the function provided by them and also installed "npm i openai" and then configured it and in the content field of the function we got from platform openai we used our own custom  const variable and name is: "gptQuerry".
(In the gptQuerry we add context by ourself so, if the used do not set prompt properly or accurately, it will still show accurate results and also we add the name we used in useRef hook  like this : (gptInputBox.current.value) so, the data user will type in search box will be noticed or notified by our openai configuration).

13) Then we store all our movies we get as result/output of our GptMovies, then we run map on gptMovies and run fetched with each element our map function has.
After this, we got array of promises and we converted it with Promise.all and in last we dispatch in "addGptMovieResult" and finally we reuse our component: <MovieList/> and showed on UI by the map function.

14) Then we perform some memoization to control unnecessary API calls and also made our app mulilingual (Multi language) by hardcoded data.
And in last we made our React application responsive and also we add .env file and save our crucial data in it.
 -->














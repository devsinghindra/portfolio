import todo from "./assets/images/todo.png";
import chatRoom from "./assets/images/chatRoom1.png";
import covid19 from "./assets/images/covid19.png";
import keeper from "./assets/images/keeper.png";
import secrets from "./assets/images/secrets1.png";
import flutterChat from "./assets/images/flutterChat1.jpg";
import flutterTodo from "./assets/images/flutterTodo.jpg";
import librarian from "./assets/images/librarian5.jpg";
import dashboard from "./assets/images/dashboard1.jpg";
import profilePic from "./assets/images/dreamPro.jpg";

const images = [

  {
    id: 0,
    src: dashboard,
    title: "Dashboard",
    link: "https://tourist-bot-hilapp.web.app/",
    gitLink: "https://github.com/devsinghindra/dashboard",
    description: `A visualization dashboard made for sentiment analysis of tweets of indians public during 3 months of covid19 pandemic.
                  Made using reactjs, chartjs used for charting and firebase as backened.`,
  },
  {
    id: 1,
    src: chatRoom,
    title: "Chat Room",
    link: "https://chat-rooms.netlify.app/",
    gitLink:"https://github.com/devsinghindra/chat-room-client",
    description: `A Client-side web app made using react.js for creating rooms for chats.
                 This app communicate with server-side app which handles all the backend stuffs like:
                 Adding user,
                 Removing user,
                 Creating rooms for chat.`,
  },
  {
    id: 2,
    src: todo,
    title: "Todo",
    link: "https://devsinghindra-todos.herokuapp.com/",
    gitLink:"https://github.com/devsinghindra/ToDo",
    description: "A multi page todo list app using node, express and ejs used mongoDB atlas as database. Deployed at heroku.",
  },
  // {
  //   id: 3,
  //   src: covid19,
  //   title: "Covid Tracker",
  //   link: "http://covid19tracer.herokuapp.com/",
  //   gitLink: "http://covid19tracer.herokuapp.com/",
  //   description: "A covid19 tracker web app made using reactjs for front-end and chartjs for plotting various charts and axios for api calls.",
  // },
  // {
  //   id: 4,
  //   src: keeper,
  //   title: "Keeper",
  //   link: "",
  //   gitLink: "https://github.com/devsinghindra/keeper",
  //   description: "A simple note taking web-app made using reactjs. You can add and delete notes.",
  // },
  // {
  //   id: 5,
  //   src: secrets,
  //   title: "Secrets",
  //   link: "",
  //   gitLink: "https://github.com/devsinghindra/Secrets",
  //   description: "A node app made for learning various level of authentication security wise. Applying various authentication methods lik bcrypt, passportjs, and OAuth2.",
  // },
  {
    id: 6,
    src: flutterChat,
    title: "Flutter Chat",
    link: "",
    gitLink: "https://github.com/devsinghindra/flutter-chat",
    description: "A realtime chat app using flutter and firebase. With feature of user authentication with email.",
  },
  {
    id: 7,
    src: flutterTodo,
    title: "Flutter Todo",
    link: "",
    gitLink: "https://github.com/devsinghindra/todo-flutter",
    description: "A todo app using flutter. Mark it completed when task done by checking checkbox. Delete the task when it is not required.",
  },
  {
    id: 8,
    src: librarian,
    title: "Librarian",
    link: "",
    gitLink: "https://github.com/devsinghindra/librarian",
    description: `A smart app for librarians for managing Library related transaction like adding book to database, and issue, reissue, return etc.
    Authenticated Sign In options for Librarian.
    Search book by scanning barcode, by isbn , by title and voice.
    Then add it to Library database maintained on Firebase. 
    Get information of registered student and books he/she has. 
    Books can be issued and reissued and returned by scanning isbn. 
    And automatically in realtime the change is reflected in Student app. 
    Get Instant search about availablity of books in library on the basis of title.`,
  }
];

export default images;
export { profilePic };
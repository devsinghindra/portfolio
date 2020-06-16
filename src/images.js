import todo from "./assets/todo.png";
import chatRoom from "./assets/chatRoom1.png";
import covid19 from "./assets/covid19.png";
import keeper from "./assets/keeper.png";
import secrets from "./assets/secrets1.png";
import flutterChat from "./assets/flutterChat1.jpg";
import flutterTodo from "./assets/flutterTodo.jpg";
import librarian from "./assets/librarian5.jpg";
import profilePic from "./assets/dreamPro.jpg";

let dummy =
  "Lorem ipsum dolor sit amet consectetur Animi consequuntur ad aspernatur! Quam sapiente quod adipisci excepturi accusantium aspernatur eius, culpa ipsa quasi dolorum deserunt, similique debitis necessitatibus facere rem!";

const images = [
  {
    id: 1,
    src: chatRoom,
    title: "Chat Room",
    link: "https://chat-rooms.netlify.app/",
    description: dummy,
  },
  {
    id: 2,
    src: todo,
    title: "Todo",
    link: "https://devsinghindra-todos.herokuapp.com/",
    description: dummy,
  },
  {
    id: 3,
    src: covid19,
    title: "Covid Tracker",
    link: "http://covid19tracer.herokuapp.com/",
    description: dummy,
  },
  {
    id: 4,
    src: keeper,
    title: "Keeper",
    description: dummy,
  },
  {
    id: 5,
    src: secrets,
    title: "Secrets",
    description: dummy,
  },
  {
    id: 6,
    src: flutterChat,
    title: "Flutter Chat",
    description: dummy,
  },
  {
    id: 7,
    src: flutterTodo,
    title: "Flutter Todo",
    description: dummy,
  },
  {
    id: 8,
    src: librarian,
    title: "Librarian",
    description: dummy,
  },
];

export default images;
export { profilePic };
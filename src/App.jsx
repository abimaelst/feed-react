import { Header } from "../src/components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/abimaelst.png",
      name: "Abimael Tavares",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hello guys!" },
      {
        type: "paragraph",
        content:
          "I come up my in profile a new project. This project have made with React Js and a use css modules to organized the styles.",
      },
      { type: "link", content: "abimaelst/feed  #newproject #reactjs" },
    ],
    publishedAt: new Date("2022-06-18 17:25:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/abimaelst.png",
      name: "Abimael Tavares",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hello guys!" },
      {
        type: "paragraph",
        content:
          "I come up my in profile a new project. This project have made with React Js and a use css modules to organized the styles.",
      },
      { type: "link", content: "abimaelst/feed" },
      { type: "link", content: " #newproject" },
      { type: "link", content: "#reactjs" },
    ],
    publishedAt: new Date("2022-06-17 17:25:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/abimaelst.png",
      name: "Abimael Tavares",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hello guys!" },
      {
        type: "paragraph",
        content:
          "I come up my in profile a new project. This project have made with React Js and a use css modules to organized the styles.",
      },
      { type: "link", content: "abimaelst/feed" },
      { type: "link", content: " #newproject" },
      { type: "link", content: "#reactjs" },
    ],
    publishedAt: new Date("2022-06-17 17:25:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

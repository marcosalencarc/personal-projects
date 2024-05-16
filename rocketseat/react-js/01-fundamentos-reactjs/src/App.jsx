import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Marcos de Alencar"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quae quis atque repellendus quos quas corporis ut eius velit, dolores natus sapiente porro reprehenderit similique est veritatis eum. Reiciendis, id."
          />
          <Post author="Paulo Pedro" content="Lorem ipsum dolor sit." />
        </main>
      </div>
    </>
  );
}

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/marcosalencarc.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos de Alencar</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:33">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Remover comnetário" href="#">
              <Trash size={20} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} /> Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

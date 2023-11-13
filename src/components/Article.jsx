import { GlobalContext } from "../context";
import { useContext } from "react";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- New !!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;

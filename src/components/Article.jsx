const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- New !!</span>;
};

// const NewArticle = () => {
//   return <span>-- NEW !! </span>;
// };

function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        <ArticleStatus isNew={props.isNew} />
        {/* {props.isNew && <NewArticle />} */}
      </small>
    </>
  );
}

export default Article;

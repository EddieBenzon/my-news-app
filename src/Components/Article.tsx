import FavoriteButton from "./FavoriteButton";
import { ArticleType } from "../reducer";

const Article = (props: ArticleType) => {
  return (
    <div
      className="article-card"
      style={{ backgroundImage: `url(${props.urlToImage})` }}
      key={props.articleID}
    >
      <FavoriteButton data={props} />
      <div className="info-wrapper">
        <p className="source-paragraph">{props.source.name.toUpperCase()}</p>
        <h3>{props.title}</h3>
        <p className="author-paragraph">
          {props.author ? props.author : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Article;

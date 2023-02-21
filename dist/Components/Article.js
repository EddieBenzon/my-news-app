"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FavoriteButton_1 = __importDefault(require("./FavoriteButton"));
const Article = (props) => {
    return (<div className="article-card" style={{ backgroundImage: `url(${props.urlToImage})` }} key={props.articleID}>
      <FavoriteButton_1.default data={props}/>
      <div className="info-wrapper">
        <p className="source-paragraph">{props.source.name.toUpperCase()}</p>
        <h3>{props.title}</h3>
        <p className="author-paragraph">
          {props.author ? props.author : "N/A"}
        </p>
      </div>
    </div>);
};
exports.default = Article;

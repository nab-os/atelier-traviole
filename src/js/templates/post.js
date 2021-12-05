import React from "react";
import format from "date-fns/format";

import Biography from "./components/biography";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div class="container">

      <div class="post post--detail">
        <section>
          <header>
            <span>{<time>{format(entry.getIn(["data", "date"]), "MMM D, YYYY")}</time>}</span>
            <h1>{entry.getIn(["data", "title"])}</h1>
            <h2>{entry.getIn(["data", "subtitle"])}</h2>
          </header>
          <p>{entry.getIn(["data", "description"])}</p>
          <ul>
            {(entry.getIn(["data", "tags"]) || []).map((tag, i) =>
                <li>{tag}</li>
            )}
          </ul>
        </section>
        <article>
          {widgetFor("content")}
        </article>
      </div>;
  }
}

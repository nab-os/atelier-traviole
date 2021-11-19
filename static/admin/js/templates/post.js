import React from "react";
import format from "date-fns/format";

import Biography from "./components/biography";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div class="container">
      <article>
        <header class="article-header">
          <div class="thumb">
            <div>
              <h1>{entry.getIn(["data", "title"])}</h1>
              <div class="post-meta">
                <div>
                  By Nabos | <time>{format(entry.getIn(["data", "date"]), "MMM D, YYYY")}</time> | X minutes
                </div>
                <div class="tags">
                  {(entry.getIn(["data", "tags"]) || []).map((tag, i) =>
                    <a href={"/tags/" + tag + "/"}>{tag}</a>)}
                </div>
              </div>
            </div>
          </div>
        </header>
      </article>
      <div class="article-post">
        {widgetFor("body")}
      </div>
    </div>;
  }
}

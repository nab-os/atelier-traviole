import React from "react";

export default class Biography extends React.Component {
  render() {
    const {biography, getAsset} = this.props;
    const name = biography.get("name");
    const picture = biography.get("picture");
    const description = biography.get("description");
    return <div class="biography">
      <h3 class="biography__name">{name}</h3>
      { picture && <img class="biography__picture" src={ getAsset(picture) } /> }
      <div class="biography__description">{ description }</div>
    </div>;
  }
}

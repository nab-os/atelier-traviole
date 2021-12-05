import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import PostPreview from "./templates/post";
import BiographyPreview from "./templates/components/biography";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("project", PostPreview);
console.log("test");
CMS.registerEditorComponent({
  id: "biography",
  label: "Biography",
  fields: [{
    name: "name",
    label: "Name",
    widget: "string"
  }, {
    name: "picture",
    label: "Picture",
    widget: "image"
  }, {
    name: "description",
    label: "Description",
    widget: "text"
  }],
  pattern: /^{{< biography ([a-zA-Z0-9]+) (.+?) (.+?) >}}/,
  fromBlock: function(match) {
    return {
      name: match[1],
      picture: match[2],
      description: match[3],
    };
  },
  toBlock: function(obj) {
    return `{{< biography ${obj.name} ${obj.picture} ${obj.description} >}}`;
  },
  toPreview: function(obj) {
    return new BiographyPreview(ojb);
  },
});
CMS.init();

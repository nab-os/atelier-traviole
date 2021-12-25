# Atelier Traviole website

## Content structure

### Portfolio:
```
content/portfolio/<line_ordering_number>/index.fr.md
content/portfolio/<line_ordering_number>/index.en.md
```

Lines are sorted by descending order (be sure to put the same number of digits for every line, by prepending with '0's for example).

Each line is defined as:

```
---
pieces:
  - title: <title>
    subtitle: <subtitle>
    aspect: <[a4, a3_horizontal, square, card]>
    image: <image_path>
    imageAlt: <image_description>

    description: <piece_description>

    links:
      - label: <link_label>
        link: <link_url>
---
```

### Blog
```
content/blog/<post_slug>/index.fr.md
content/blog/<post_slug>/index.en.md
```

Each post is defined as

```
---
title: <title>
subtitle: <subtitle>
slug: <slug>
date: <date YYYY-MM-DD>
tags:
  - { text: <tag_name>, color: <tag_color> }
image: <cover_path>
imageAlt: <cover_description>
description: <summary>
---
<content>
```

### Contact
```
content/contact/_index.fr.md
content/contact/_index.en.md
```

These files are defined as:

```
---
description: <description>
contact: <contact_text>
---
```

### Links
```
content/links/_index.fr.md
content/links/_index.en.md
```

These files are defined as:

```
---
links:
  - label: <link_label>
    link: <link_url>
---
```

## Shortcodes

List of custom shortcodes:
- row
- column
- md
- highlight

[List of built-in shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)

## Hugo

To start the developpement server:
```
hugo server -D
```
It will be available on http://localhost:1313

***Be sure that the changes you made compile before making a new commit !!!***

## Git

To list what is in "staging":
```
git status
```

To add something to the staging area:
```
git add <file>
```

To commit the staging modifications:
```
git commit -m "<message>"
```

To push new commits to the server:
```
git push origin main
```

To pull new commits from the server:
```
git pull
```

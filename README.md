# Static html generator with fields from json

Organizing fast translations for static websites with gulp and pug.

## Installation

Use the package manager npm to install.

```bash
npm i
```

## Usage
Fill in json data, where the key is the name of the translation folder.
```json
[{
    "ru": {
        "lang": "ru lang",
        "pretitle": "ru title"
    },

    "en": {
        "lang": "en lang",
        "pretitle": "en title"
    }  
}]
```
Insert fields from json into pug, if without a template engine, then translate html into pug and put fields.

```pug
p= lang
p= pretitle
```
## Assembly in html
```bash
gulp build
```
Folder will be created based on your json keys.

![folders example](https://i.imgur.com/5af6Thp.png)

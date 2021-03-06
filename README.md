# SML Client

The Simple Markup Language for clients

You also can get help in the german version inside the [@gelight/sml](https://github.com/GELight/sml/tree/master/src/doc/de) package.

## Releases

UMD runtime browser version available on Github in the [/releases](https://github.com/GELight/sml-client/tree/master/releases) directory.


## Installation

There are three primary ways of adding SML to a project:

1. Import it as a [CDN package](#cdn) on the page
2. Download the JavaScript file and [host them yourself](#download-and-self-host)
3. Install it using [npm](#npm)

## Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/@gelight/sml-client?style=for-the-badge)

Detailed release notes for each version are available on [GitHub](https://github.com/GELight/sml-client/blob/master/CHANGELOG.md).

## CDN

For using SML as runtime build in your browser you can use the latest version with:

```html
<script src="https://unpkg.com/@gelight/sml-client"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@gelight/sml-client"></script>
```

## Download and Self Host

If you want to avoid using build tools but can't use a CDN in production then you can download the relevant `.js` file and host it using your own web server. You can then include it using a `<script>` tag, just like with the CDN approach.

The files can be browsed and downloaded from a CDN such as [unpkg](https://unpkg.com/@gelight/sml-client) or [jsDelivr](https://cdn.jsdelivr.net/npm/@gelight/sml-client).

## NPM

NPM is the recommended installation method.

```
npm install @gelight/sml-client
```
```
yarn add @gelight/sml-client
```

## Examples

### Parse a simple SML document your node project

Parse your first simple SML Dokument
```js
import { SmlDocument } from "@gelight/sml";

const doc = SmlDocument.parse(`
Hello
  About
    Name My name is SML
    Description I am a Simple Markup Language
  End
  About This is "a simple" SML document
End
`);

// Get all attributes from SML document
const attrs = doc.getRoot().getElement("About").getAttributes();

console.log(values);
```

### A complete browser example by using per CDN import

>The complete example is also available as on [codepen.io](https://codepen.io/gelight/pen/YzpRgxL)

1. Create a index.html file on your local computer
2. Copy the sources below in your created html file and open it in your browser.
```html
<html>
    <head>
        <title>SML - Simple Markup Language</title>
        <style>
            html, body {
                width: 100%;
                height: 100%;
              }
              body {
                background: linear-gradient(161deg, #333a47 0%, #1c1d24 100%);
                color: #8ca0c5;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .output {
                padding: 1rem;
                background: #3b4d6e;
                background: linear-gradient(161deg, #333a47 0%, #1c1d24 100%);
                box-shadow: 0 0 1rem 0 rgba(0,0,0,.5);
                border: 1px dashed #8ca0c5;
                border-radius: .5rem;
                margin: auto;
                display: flex;
                flex-direction: column;
              }
              
              .attribute {
                display: flex;
                
              }
              
              .value {
                border: .2rem solid #90ef8d;
                background: #5f9467;
                color: #fff;
                margin: .2rem;
                padding: .5rem;
                border-radius: .5rem;
              }
        </style>
    </head>
    <body>
        <div class="output"></div>

        <script src="https://unpkg.com/@gelight/sml-client"></script>
        <script>
          const renderAttributes = (attrs) => {
            let v = document.querySelector(".output");
            for (const attr of attrs) {
              let attrElm = document.createElement("div");
              attrElm.className = "attribute";

              for (const value of attr.getValues()) {
                let valueElm = document.createElement("div");
                valueElm.className = "value";
                let valueText = document.createTextNode(value);
                valueElm.appendChild(valueText);
                attrElm.appendChild(valueElm);
              }

              v.append(attrElm);
            }
          }

          const doc = SML.SmlDocument.parse(`
          Hello
            About
              Name My name is SML
              Description I am a Simple Markup Language
            End
            About This is "a simple" SML document
          End
          `);

          // Get all attributes from SML document
          const attrs = doc.getRoot().getElement("About").getAttributes();

          console.log(attrs);

          // Show attrubutes from element "About" as HTML
          renderAttributes(attrs);
        </script>
    </body>
</html>

```

### Client to server requests with SmlRequest

>This client example use the new SmlRequest class which is in experimental state.

```html
<script src="https://unpkg.com/@gelight/sml-client"></script>
<script>
  const doc = await SML.SmlRequest.post("/peoples", SML.SmlDocument.parse(`
  MyBodyData
    FirstName William
    LastName Smith
    Age 37
  End
  `));

  /**
   * SmlRequest use the fatech api for requests and 
   * only expects a SmlDocument as a text/plain response from the server.
   * 
   * The SmlRequest class will parse the response for you and returns the 
   * response as an SmlDocument.
   * 
   * Available methods are GET, POST, PUT, PATCH and DELETE
   */
  const attrs = doc.getRoot().getAttributes();
</script>
```
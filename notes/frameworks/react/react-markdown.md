# React Markdown

[react-markdown](https://www.npmjs.com/package/react-markdown/)

> Markdown component for React using remark.

## Prior Art

* [How do I render Markdown from a React component?](https://stackoverflow.com/q/31875748/1366033)
* [How do I load a markdown file into a react component?](https://stackoverflow.com/q/42928530/1366033)

## Questions

* [How to avoid <p> tag #42](https://github.com/remarkjs/react-markdown/issues/42)

    <!-- {% raw %} -->

    ```js
    <Markdown
        source="Normally, this *sentence* would be wrapped in a paragraph."
        renderers={{paragraph: 'span'}}
    />
    ```

    <!-- {% endraw %} -->

* [Option for Setting target="_blank" on Links #12](https://github.com/remarkjs/react-markdown/issues/12)

    <!-- {% raw %} -->

    ```js
    <ReactMarkdown
        source="Click [here](https://espen.codes/) to visit external site"
        renderers={{Link: props => <a href={props.href} target="_blank">{props.children</a>}}
    />
    ```

    <!-- {% endraw %} -->

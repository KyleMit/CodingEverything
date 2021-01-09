# React Markdown


## Questions

* [How to avoid <p> tag #42](https://github.com/remarkjs/react-markdown/issues/42)

    ```js
    <Markdown
        source="Normally, this *sentence* would be wrapped in a paragraph."
        renderers={{paragraph: 'span'}}
    />
    ```

* [Option for Setting target="_blank" on Links #12](https://github.com/remarkjs/react-markdown/issues/12)


    ```js
    <ReactMarkdown
        source="Click [here](https://espen.codes/) to visit external site"
        renderers={{Link: props => <a href={props.href} target="_blank">{props.children</a>}}
    />
    ```

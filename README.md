# parse5-html-entities

A reproduction repo for handling HTML entities with parse5


## Setup

1. Clone the repo
1. Run `npm ci`

## Demo

### Greenwood / WCC

To see the issue at play, run `npm start` and Greenwood will build and serve the example page / markdown, and you will see the example is broken during a production build.  (literal HTML instead of escaped HTML)

So instead of getting something like this
```html
<app-ctc-block variant="snippet" heading="src/pages/users.js">
<pre><code class="language-js">export async function getBody(compilation, page, request) {
  const timestamp = new Date().getTime();

  return `
    &lt;h1&gt;Hello from the server rendered users page! 👋&lt;/h1&gt;
    &lt;table&gt;
      &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Image&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;h6&gt;Last Updated: ${timestamp}&lt;/h6&gt;
  `;
}
</code></pre>
</app-ctc-block>
```

We get
```html
<app-ctc-block variant="snippet" heading="src/pages/users.js">
<pre><code class="language-js">export async function getBody(compilation, page, request) {
  const timestamp = new Date().getTime();

  return `
    <h1>Hello from the server rendered users page! 👋</h1>
    <table>
      <tbody><tr>
        <th>Name</th>
        <th>Image</th>
      </tr>
    </tbody></table>
    <h6>Last Updated: ${timestamp}</h6>
  `;
}
</code></pre>
</app-ctc-block>
```

### parse5

To run the **parse5** demo, run `npm run demo`.  You will see that on its own, while **parse5** normalizes the entities, converting `&#x3C;` -> `&lt;`, this will still work at least in the context of something like markdown.
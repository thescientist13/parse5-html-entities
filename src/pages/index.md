# Server Rendering

<app-ctc-block variant="snippet" heading="src/pages/users.js">

  ```js
  export async function getBody(compilation, page, request) {
    const timestamp = new Date().getTime();

    return `
      <h1>Hello from the server rendered users page! 👋</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </table>
      <h6>Last Updated: ${timestamp}</h6>
    `;
  }
  ```

</app-ctc-block>
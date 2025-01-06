import { parse, parseFragment, serialize } from 'parse5';
import assert from 'node:assert';

const input = `
<app-ctc-block variant="snippet" heading="src/pages/users.js">
  <pre class="language-js"><code class="language-js"><span class="token comment">// eslint-disable-next-line no-unused-vars</span>
  <span class="token keyword module">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getBody</span><span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> page<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword control-flow">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &#x3C;h1>Hello from the server rendered users page! 👋&#x3C;/h1>
      &#x3C;table>
        &#x3C;tr>
          &#x3C;th>Name&#x3C;/th>
          &#x3C;th>Image&#x3C;/th>
        &#x3C;/tr>
      &#x3C;/table>
      &#x3C;h6>Last Updated: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#x3C;/h6>
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  </code></pre>
</app-ctc-block>
`;

const fragment = parseFragment(input);
const output = serialize(fragment);

console.log({ input, output });
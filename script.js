function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Visit my codepen profile](https://https://codepen.io/zer0fr0st93)

  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
// a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });

    });}
  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("h2", { className: "text-center m-4 text-white" }, "Convert your markdown"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("h6", { className: "text-center text-white" }, "Enter your markdown here:"),


      React.createElement("textarea", {
        className: "form-control",
        id: "editor",
        value: text,
        onChange: this.handleChange })),


      React.createElement("div", { className: "col-6" },
      React.createElement("h6", { className: "text-center text-white" }, "See the result:"),
      React.createElement("div", {
        className: "preview rounded",
        dangerouslySetInnerHTML: { __html: markdown },
        id: "preview" })))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
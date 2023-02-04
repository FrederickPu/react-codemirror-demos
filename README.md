# react-codemirror-demos

Common Errors:

- Forgeting to disable strict mode: Strict mode will cause a double editor error. See (source)[https://stackoverflow.com/questions/72464452/codemirror-editor-duplicating] for more details

```javascript
// <StrictMode>
  <App />
  // </StrictMode>
```

- Not importing _codemirror/lib/codemirror.css_: this will cause text to jump out off the editor whenever the Controlled/UnControlled editor componenet is placed in a div with multiple components.

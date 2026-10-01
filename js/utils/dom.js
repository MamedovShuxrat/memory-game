export function createElement(tag, options = {}, ...children) {
  console.log(options);

  const element = document.createElement(tag);
  if (options.className) {
    element.className = options.className;
  }

  if (options.text !== undefined) {
    element.textContent = options.text;
  }
  if (options.id) {
    element.setAttribute("id", options.id);
  }

  if (options.attrs) {
    for (const [name, value] of Object.entries(options.attrs)) {
      element.setAttribute(name, value);
    }
  }
  if (children.length > 0) element.append(...children);
  return element;
}

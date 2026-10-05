export function createElement(tag, options = {}, ...children) {
  const element = document.createElement(tag);

  if (options.className) {
    element.className = options.className;
  }

  if (options.text !== undefined) {
    element.textContent = options.text;
  }

  if (options.attrs) {
    for (const [name, value] of Object.entries(options.attrs)) {
      element.setAttribute(name, value);
    }
  }

  if (options.onClick) {
    element.addEventListener("click", options.onClick);
  }

  if (children.length > 0) element.append(...children);
  return element;
}

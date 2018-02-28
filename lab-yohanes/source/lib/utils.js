export const renderIf = (test, component) => test ? component : undefined;
export const classtoggler = options => //class togler allows us to put conditional classes on our componenets to apply in different styles
  Object.keys(options).filter(key => !!options[key]).join(' '); //!! evaluates if it's true or false than reciprocates that value (true = false, false = true), then flips it back
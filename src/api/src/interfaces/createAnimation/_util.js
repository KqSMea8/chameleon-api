export const stylePipe = (styles, descriptions, quene, ...args) => {
  let current = styles;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, descriptions, ...args]);
  });
  return current;
}

export const descriptionPipe = (descriptions, styles, quene, ...args) => {
  let current = descriptions;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, styles, ...args]);
  });
  return current;
}

export default {};

const formatStringToCamelCase = str => {
  const splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

export const getStyleObjectFromString = str => {
  const style = {};
  str.split(";").forEach(el => {
    const [property, value] = el.split(":");
    if (!property) return;

    const formattedProperty = formatStringToCamelCase(property.trim());
    style[formattedProperty] = value.trim();
  });

  return style;
}

/**
 * 递归查找DOM元素子元素中第一次遇到的children数组
 * @param {*} dom 
 * @returns Array
 */
export const searchListInDom = dom => {
  if(dom.children){
    if (dom.children.length > 1) {
      return dom.children;
    } else {
      return searchListInDom(dom.children[0])
    }
  }else{
    return [];
  }
}
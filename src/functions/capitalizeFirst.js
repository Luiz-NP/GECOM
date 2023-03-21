/********************************************************************************
DEPENDENCIES
********************************************************************************/

/********************************************************************************
CAPITALIZE FIRST receives a string, splits the string into words, iterates over
each word array using MAP to change its first letter to upper case and the rest
to lower case. Finally, it concatenates the manipulated words into a string again.
More info at https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/.
********************************************************************************/
export function capitalizeFirst(string) {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
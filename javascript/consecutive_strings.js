// You are given an array strarr of strings and an integer k.Your task is to
// return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) -- > "abigailtheta"

// n being the length of the string array,
// if n = 0 or k > n or k <= 0
// return "".

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

// Tests
// -------
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) //, "abigailtheta");
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) //, "oocccffuucccjjjkkkjyyyeehh");
// longestConsec([], 3) // , "");
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) //, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) // , "");
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) // , "ixoyx3452zzzzzzzzzzzz");
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) // , "");
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) // , "");


/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = () => {
//   document.querySelector("#domain-btn").addEventListener("click", () => {
//     document.querySelector("#the-domain").innerHTML = generateDomainNames(
//       pronoun,
//       adj
//     );
//   });
// };

window.onload = () => {
  document.getElementById("the-domain").innerHTML = bigArray3.join("<br>");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".edu", ".org"];

function combineArrays(array1, array2) {
  var combinationArray = array1.flatMap(d => array2.map(v => d + v));
  return combinationArray;
}
let bigArray1 = combineArrays(pronoun, adj);
let bigArray2 = combineArrays(bigArray1, noun);
let bigArray3 = combineArrays(bigArray2, ext);

// let ext = [".com", ".edu", ".org"];

// let domainList = [];

// for (let i = 0; i < pronoun.length; i++) {
//   domainList.push(pronoun[i] + adj[i] + noun[i] + ".com");
//   domainList.push(pronoun[i] + adj[i] + noun[i + 1] + ".com");
//   domainList.push(pronoun[i - 1] + adj[i] + noun[i] + ".com");
// }
// for (let i = 0; i < domainList.length; i++) {
//   var newArray = domainList.slice(0, 1);
// }
// return newArray;
// return domainList;

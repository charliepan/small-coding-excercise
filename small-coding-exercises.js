// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`It's been ${ms} ms`);
      return resolve;
    }, ms)
  );
}

const promise = delay(2000);

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  console.log("animate", el);
  el.style.transform = "translateX(100px)";
  el.style["transition-duration"] = "1s";
}

const myDiv = document.querySelector("div");
const myButton = document.querySelector("button");
myButton.addEventListener("click", () => animateRight(myDiv));

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  const newArray = [...new Set(xs)];
  return newArray;
}

const testArr = removeDuplicates([1, 1, "a", 2, 3, "a"]);

console.log(testArr);

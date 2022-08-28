// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`It's been ${ms} ms`);
      return resolve("Success");
    }, ms)
  );
}

// Wanted to get the result from the resolve
async function getDelay(ms) {
    const afterDelay = await delay(ms);
    console.log("Result: ", afterDelay);
}

getDelay(2000)

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  console.log("Animate this element: ", el);
  el.style.transform = "translateX(100px)";
  el.style["transition-duration"] = "1s";
}

// Here I select the div i have using the id I assigned to it but we can use another element or move everything in the div
// Also added a button so it only animates when the button is clicked
const myDiv = document.querySelector("#my-div");
const myButton = document.querySelector("button");
myButton.addEventListener("click", () => animateRight(myDiv));

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  // I wanted to use set as it creates a collection with unqiue values allowing us to make an array with unique values when converted.
  const newArray = [...new Set(xs)];
  return newArray;
}

const testArr = removeDuplicates([1, 1, "a", 2, 3, "a"]);

console.log(testArr);

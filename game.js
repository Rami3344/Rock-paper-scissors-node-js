const arr = ["S", "P", "R"];
const inpt = process.argv[2];
const selection = arr.indexOf(inpt);
function result() {
  const computerindx = Math.floor(Math.random() * 3);
  const computerSelect = arr[computerindx];
  if (selection === computerindx) {
    console.log("Try again, u choosed the same selection as the computer");
  } else if (inpt.toUpperCase() == "S" && computerSelect == "P") {
    console.log("You win !");
  } else if (inpt.toUpperCase() == "S" && computerSelect == "R") {
    console.log("Computer Won !");
  } else if (inpt.toUpperCase() == "P" && computerSelect == "R") {
    console.log("You Win !");
  } else if (inpt.toUpperCase() == "P" && computerSelect == "S") {
    console.log("Computer Won !");
  } else if (inpt.toUpperCase() == "R" && computerSelect == "P") {
    console.log("Computer Won !");
  } else if (inpt.toUpperCase() == "R" && computerSelect == "S") {
    console.log("You Win !");
  }
}
result();

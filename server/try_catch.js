// function test() {
//   try {
//     // Simulating an error for testing
//     throw new Error("An error occurred");
//   } catch (error) {
//     console.error("Caught error:", error.message);
//   }
// }
// test();

function test() {
  try {
    console.log(`This runs fine`);
  } catch (error) {
    console.log("Error happened: (", error.message);
  }
}

test();

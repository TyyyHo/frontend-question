// enum is a feature to define constants. The member of enum must have initializer.
// I rarely use enum. The scenario I use most often is for defining the response of fetch.

enum ResponseStatus {
  success = 200,
  badRequest = 400,
}

function fakeFetch() {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 3000);
  });
}

async function handleResponse() {
  const response = await fakeFetch();

  if (response === ResponseStatus.success) {
    console.log("Fetch sueccess");
  } else if (response === ResponseStatus.badRequest) {
    console.log("Fetch failed");
  }
}

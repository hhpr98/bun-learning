class FooRequest extends Request {
  get method() {
    return "POST";
  }
}

const data = await fetch(new FooRequest("https://meowfacts.herokuapp.com/"));
// This will be POST request
console.log(await data.text());

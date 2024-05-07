var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (const name of names) {
  if (name[0].toLocaleLowerCase() === 'j') {
    console.log(`Good Bye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

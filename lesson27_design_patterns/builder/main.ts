const query = new QueryBuilder()
  .select(["name", "age"])
  .from("users")
  .where("age > 18")
  .orderBy("age", "DESC")
  .limit(10)
  .build();

console.log(query);

// SELECT name, age FROM users WHERE age > 18 ORDER BY age DESC LIMIT 10;

function findUser(shouldBeAbove18: boolean, order: "DESC" | "ASC"): string {
  const query = new QueryBuilder()
    .select(["name", "age"])
    .from("users")
    .orderBy("age", order)
    .limit(10);

  if (shouldBeAbove18) {
    query.where("age > 18");
  }
  return query.build();
}

function findUserNoBuilder(
  shouldBeAbove18: boolean,
  order: "DESC" | "ASC"
): string {
  let query = "";
  if (shouldBeAbove18) {
    if (order === "ASC") {
      query =
        "SELECT name, age FROM users WHERE age > 18 ORDER BY age ASC LIMIT 10";
    } else {
      query =
        "SELECT name, age FROM users WHERE age > 18 ORDER BY age DESC LIMIT 10";
    }
  } else {
    query = "SELECT name, age FROM users ORDER BY age DESC LIMIT 10";
  }
  return query;
}

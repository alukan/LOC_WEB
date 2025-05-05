/*
const query = {
    table: 'users',
    data: {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    }
}

const sqlQuery = INSERT INTO users (id, name, email) VALUES (1, 'John Doe', 'john@example.com');
*/

class ObjectQuery {
  table: string;
  data: object;
  constructor(table: string, data: object) {
    this.table = table;
    this.data = data;
  }
}

class SqlQuery {
  sql: string;
  constructor(sql: string) {
    this.sql = sql;
  }
}

class Adapter {
  // adaptee:ObjectQuery
  // constructor(adaptee:ObjectQuery){
  //     this.adaptee = adaptee
  // }

  toSqlQuery(objectQuery: ObjectQuery): SqlQuery {
    const { table, data } = objectQuery;

    const columns = Object.keys(data).join(", ");
    const values = Object.values(data).join(", ");
    console.log(values);
    const sql = `INSERT INTO ${table} (${columns}) VALUES (${values})`;
    return new SqlQuery(sql);
  }
}

const objQuery = new ObjectQuery("users", {
  id: 1,
  name: "John Doe",
});

const adapter = new Adapter();

const sqlQuery1 = adapter.toSqlQuery(objQuery);

console.log(sqlQuery1);

const objQuery2 = new ObjectQuery("orders", {
  id: 1,
  type: "order",
  amount: 100,
  price: 1000,
});

const sqlQuery2 = adapter.toSqlQuery(objQuery2);

console.log(sqlQuery2);

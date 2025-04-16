class QueryBuilder {
  private _select: string = "*";
  private _from: string = "";
  private _where: string = "";
  private _orderBy: string = "";
  private _limit: number | null = null;

  select(fields: string[]) {
    this._select = fields.join(", ");
    return this;
  }

  from(table: string) {
    this._from = table;
    return this;
  }

  where(condition: string) {
    this._where = condition;
    return this;
  }

  orderBy(field: string, type: "DESC" | "ASC") {
    // this._orderBy = field + " " + type;
    this._orderBy = `${field} ${type}`;
    return this;
  }

  limit(number: number | null) {
    this._limit = number;
    return this;
  }

  build() {
    if (!this._from) {
      throw new Error("from is empty");
    }

    let query = `SELECT ${this._select} FROM ${this._from}`;
    if (this._where) query += ` WHERE ${this._where}`;
    if (this._orderBy) query += `ORDER BY ${this._orderBy}`;
    if (this._limit) query += `LIMIT ${this._limit}`;
    return (query += ";");
  }
}

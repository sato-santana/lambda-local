import { Client } from "pg";

const client = new Client({
  user: "postgres",
  password: "password",
  //localで実行の場合はこっち
  // host: "localhost",
  //Docker内のlambdaから実行の場合はこっち
  host: "host.docker.internal",
  database: "postgres",
  port: 5432,
});

export const dbConnect = async () => {
  let returnValue: string = "initial value";

  try {
    await client.connect();
    console.log("接続完了");
    const res = await client.query("SELECT now()");
    console.log(res.rows[0]);
    returnValue = JSON.stringify(res.rows[0]["now"]);
  } catch (e) {
    console.log("接続失敗");
    console.log(e);
    returnValue = "接続失敗です";
  } finally {
    await client.end();
    console.log("接続終了");
  }

  return returnValue;
};

import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import { dbConnect } from "./dbOpe";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  const result = await dbConnect();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world!!!!!",
      DBresult: result,
    }),
  };
};

//localで実行の場合はこっち
// const localExecute = async () => {
//   const result = await dbConnect();
//   console.log("return value:" + result);
// };

// localExecute();

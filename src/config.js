const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "game-player-photos",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://d3a01vedbk.execute-api.eu-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_Vv93K1PeQ",
    APP_CLIENT_ID: "5t307t7sskdie4rrtonkouplhk",
    IDENTITY_POOL_ID: "eu-west-2:9d2ef321-2f89-4dfb-958d-0be234094669",
  },
};

export default config;

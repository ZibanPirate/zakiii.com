import { Environment } from "../types";

const apiPort = 7070;
const dataPort = 9090;
const frontendPort = 8080;

export const fsConfig = (env: Environment, extra?: Record<string, unknown>) => {
  const hostname = extra?.hostname || "localhost";
  const e = ["development", "staging", "production"].indexOf(env);
  return {
    data: {
      port: dataPort,
      url: [
        `http://${hostname}:${dataPort}`,
        "https://data.stage.zakiii.com",
        "https://data.zakiii.com",
      ][e],
    },
    frontend: {
      port: frontendPort,
      url: [
        `http://${hostname}:${frontendPort}`,
        "https://stage.zakiii.com",
        "https://www.zakiii.com",
      ][e],
    },
  };
};

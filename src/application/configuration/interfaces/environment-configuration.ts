export type Config = {
  cors: {
    origin: string;
  };
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
};

export interface EnvironmentConfiguration {
  getConfig(): Promise<Config>;
}

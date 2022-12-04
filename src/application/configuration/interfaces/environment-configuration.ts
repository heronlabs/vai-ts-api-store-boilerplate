export interface EnvironmentConfiguration {
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
}

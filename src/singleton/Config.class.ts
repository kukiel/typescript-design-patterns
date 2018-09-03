export class Config {
  private static instance: Config;
  private config: any;

  private constructor() {
    this.config = {};
  }

  public static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }

    return Config.instance;
  }

  public getConfig(): any {
    return this.config;
  }

  public setConfig(key: string, value: any): void {
    this.config[key] = value;
  }
}

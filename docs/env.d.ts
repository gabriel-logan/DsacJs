declare module "vitepress-carbon/config" {
  import type { UserConfig } from "vitepress";
  const config: () => Promise<UserConfig>;
  export default config;
}

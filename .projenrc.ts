import { awscdk, javascript } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.145.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "20.11.1",
  name: "cdk-aws-lambda-dynamic-provisioned-concurrency",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.2.0",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@middy/core",
    "@middy/http-error-handler",
    "@aws-lambda-powertools/logger",
  ],
});
project.synth();

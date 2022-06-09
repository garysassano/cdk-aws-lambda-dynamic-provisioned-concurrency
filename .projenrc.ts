import { awscdk, javascript } from "projen";

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.173.4",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "22.12.0",
  name: "cdk-aws-lambda-dynamic-provisioned-concurrency",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@middy/core",
    "@middy/http-error-handler",
    "@aws-lambda-powertools/logger",
  ],
});

project.synth();

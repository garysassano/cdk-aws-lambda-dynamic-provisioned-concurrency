import { awscdk, javascript } from "projen";
import { IndentStyle } from "projen/lib/javascript/biome/biome-config";

const project = new awscdk.AwsCdkTypeScriptApp({
  name: "cdk-aws-lambda-dynamic-provisioned-concurrency",

  // Base
  context: { "cli-telemetry": false },
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  gitignore: ["cdk.context.json"],
  projenrcTs: true,

  // Toolchain
  biome: true,
  biomeOptions: {
    biomeConfig: {
      assist: {
        enabled: true,
        actions: {
          source: {
            organizeImports: {
              level: "on",
              options: {
                identifierOrder: "lexicographic",
              },
            },
          },
        },
      },
      formatter: {
        enabled: true,
        indentStyle: IndentStyle.SPACE,
        indentWidth: 2,
        lineWidth: 100,
      },
      linter: {
        enabled: true,
        rules: {
          recommended: true,
          suspicious: {
            noShadowRestrictedNames: "off",
          },
        },
      },
    },
  },
  cdkVersion: "2.241.0",
  minNodeVersion: "24.14.0",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "10",

  // Deps
  deps: ["@aws-lambda-powertools/logger", "@middy/core@6", "@middy/http-error-handler@6"],
});

project.synth();

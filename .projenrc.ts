import { awscdk, javascript } from "projen";
import { IndentStyle, JsonTrailingCommas } from "projen/lib/javascript/biome/biome-config";

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
      json: {
        formatter: {
          enabled: true,
          trailingCommas: JsonTrailingCommas.NONE,
        },
        parser: {
          allowTrailingCommas: true,
        },
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
  cdkVersion: "2.245.0",
  minNodeVersion: "24.14.1",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "10",

  // Deps
  deps: ["@aws-lambda-powertools/logger", "@middy/core", "@middy/http-error-handler"],
});

project.synth();

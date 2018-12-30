```shell
usage: ng build <project> [options]

arguments:
  project
    The name of the project to build. Can be an app or a library.

options:
  --aot
    Build using Ahead of Time compilation.
  --base-href
    Base url for the application being built.
  --build-optimizer
    Enables '@angular-devkit/build-optimizer' optimizations when using the 'aot' option.
  --common-chunk
    Use a separate bundle containing code used across multiple bundles.
  --configuration (-c)
    A named build target, as specified in the "configurations" section of angular.json.
    Each named target is accompanied by a configuration of option defaults for that target.
  --delete-output-path
    Delete the output path before building.
  --deploy-url
    URL where files will be deployed.
  --eval-source-map
    Output in-file eval sourcemaps.
  --extract-css
    Extract css from global styles into css files instead of js ones.
  --extract-licenses
    Extract all licenses in a separate file.
  --fork-type-checker
    Run the TypeScript type checker in a forked process.
  --help
    Shows a help message for this command in the console.
  --i18n-file
    Localization file to use for i18n.
  --i18n-format
    Format of the localization file specified with --i18n-file.
  --i18n-locale
    Locale to use for i18n.
  --i18n-missing-translation
    How to handle missing translations for i18n.
  --index
    The name of the index HTML file.
  --lazy-modules
    List of additional NgModule files that will be lazy loaded. Lazy router modules will be discovered automatically.
  --main
    The full path for the main entry point to the app, relative to the current workspace.
  --named-chunks
    Use file name for lazy loaded chunks.
  --ngsw-config-path
    Path to ngsw-config.json.
  --optimization
    When true, uses optimization for the app build.
  --output-hashing
    Define the output filename cache-busting hashing mode.
  --output-path
    The full path for the new output directory, relative to the current workspace.

    By default, writes output to a folder named dist/ in the current project.
  --poll
    Enable and define the file watching poll time period in milliseconds.
  --polyfills
    The full path for the polyfills file, relative to the current workspace.
  --preserve-symlinks
    Do not use the real path when resolving modules.
  --prod
    When true, sets the build configuration to the production target.
    All builds make use of bundling and limited tree-shaking. A production build also runs limited dead code elimination.
  --profile
    Output profile events for Chrome profiler.
  --progress
    Log progress to the console while building.
  --service-worker
    Generates a service worker config for production builds.
  --show-circular-dependencies
    Show circular dependency warnings on builds.
  --skip-app-shell
    Flag to prevent building an app shell.
  --source-map
    Output sourcemaps.
  --stats-json
    Generates a 'stats.json' file which can be analyzed using tools such as: 'webpack-bundle-analyzer' or https://webpack.github.io/analyse.
  --subresource-integrity
    Enables the use of subresource integrity validation.
  --ts-config
    The full path for the TypeScript configuration file, relative to the current workspace.
  --vendor-chunk
    Use a separate bundle containing only vendor libraries.
  --vendor-source-map
    Resolve vendor packages sourcemaps.
  --verbose
    Adds more details to output logging.
  --watch
    Run build when files change.
```

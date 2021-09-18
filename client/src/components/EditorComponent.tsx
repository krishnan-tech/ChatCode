import React from "react";
import dynamic from "next/dynamic";

const languages = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css",
];

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal",
];

const EditorComp = dynamic(
  async () => {
    const ace = await require("react-ace");
    languages.forEach((lang) => {
      require(`ace-builds/src-noconflict/mode-${lang}`);
      require(`ace-builds/src-noconflict/snippets/${lang}`);
      require("ace-builds/src-min-noconflict/ext-language_tools");
      require("ace-builds/src-min-noconflict/ext-searchbox");
    });
    themes.forEach((theme) =>
      require(`ace-builds/src-noconflict/theme-${theme}`)
    );
    return ace;
  },
  {
    loading: () => <p>Loading</p>,
    ssr: false,
  }
);

export function Editor(props) {
  return <EditorComp {...props} />;
}
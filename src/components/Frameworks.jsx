import { OrbitingCircles } from "./OrbitingCircles";
import auth0Icon from "../assets/assets/logos/auth0.svg";
import blazorIcon from "../assets/assets/logos/blazor.svg";
import cplusplusIcon from "../assets/assets/logos/cplusplus.svg";
import csharpIcon from "../assets/assets/logos/csharp.svg";
import css3Icon from "../assets/assets/logos/css3.svg";
import dotnetIcon from "../assets/assets/logos/dotnet.svg";
import dotnetcoreIcon from "../assets/assets/logos/dotnetcore.svg";
import gitIcon from "../assets/assets/logos/git.svg";
import html5Icon from "../assets/assets/logos/html5.svg";
import javascriptIcon from "../assets/assets/logos/javascript.svg";
import microsoftIcon from "../assets/assets/logos/microsoft.svg";
import reactIcon from "../assets/assets/logos/react.svg";
import sqliteIcon from "../assets/assets/logos/sqlite.svg";
import tailwindcssIcon from "../assets/assets/logos/tailwindcss.svg";
import vitejsIcon from "../assets/assets/logos/vitejs.svg";
import wordpressIcon from "../assets/assets/logos/wordpress.svg";
import angularIcon from "../assets/assets/logos/angular.svg";
import azureIcon from "../assets/assets/logos/azure.svg";
import githubIcon from "../assets/assets/logos/github.svg";
import mssqlIcon from "../assets/assets/logos/microsoftsqlserver.svg";
import threejsIcon from "../assets/assets/logos/threejs.svg";
import vscodeIcon from "../assets/assets/logos/visualstudiocode.svg";

const icons = {
  auth0: auth0Icon,
  blazor: blazorIcon,
  cplusplus: cplusplusIcon,
  csharp: csharpIcon,
  css3: css3Icon,
  dotnet: dotnetIcon,
  dotnetcore: dotnetcoreIcon,
  git: gitIcon,
  html5: html5Icon,
  javascript: javascriptIcon,
  microsoft: microsoftIcon,
  react: reactIcon,
  sqlite: sqliteIcon,
  tailwindcss: tailwindcssIcon,
  vitejs: vitejsIcon,
  wordpress: wordpressIcon,
  angular: angularIcon,
  azure: azureIcon,
  github: githubIcon,
  mssql: mssqlIcon,
  threejs: threejsIcon,
  vscode: vscodeIcon,
};

export function Frameworks() {
  const skills = Object.keys(icons);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={icons[skill]} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={icons[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

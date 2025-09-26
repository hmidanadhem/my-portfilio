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
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} className="hidden sm:block">
        {skills.map((skill, index) => (
          <Icon key={index} src={icons[skill]} className="w-10 h-10 sm:w-12 sm:h-12" />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2} className="hidden sm:block">
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={icons[skill]} className="w-6 h-6 sm:w-8 sm:h-8" />
        ))}
      </OrbitingCircles>
      
      {/* Version mobile - Affichage en grille statique */}
      <div className="sm:hidden grid grid-cols-4 gap-4 p-4 w-full h-full overflow-y-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img 
              src={icons[skill]} 
              alt={skill} 
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const Icon = ({ src, className = '' }) => (
  <img 
    src={src} 
    className={`duration-200 rounded-sm hover:scale-110 ${className}`} 
    alt=""
  />
);

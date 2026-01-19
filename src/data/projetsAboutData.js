import crossWord from "../assets/img-projects/crossWord.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";

export const proyectos = [
  {
    titulo: "Generador de Sopa de Letras",
    imagen: crossWord.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://it-mty.ddns.net/sopa/",
    codigo: "https://github.com/pbarrera813/Word-Search-Puzzle",
  },
  {
    titulo: "Recreacion juego Pacman",
    imagen: pacmanGame.src,
    tecnologias: ["Cpp"],
    demo: "https://github.com/pbarrera813/Pacman-Game/releases",
    codigo: "https://github.com/pbarrera813/Pacman-Game/",
  },
  {
    titulo: "Servidor NAS",
    imagen: nasCloud.src,
    tecnologias: ["Docker", "Linux"],
    demo: "https://it-mty.ddns.net/cloud/",
    codigo: "https://filebrowser.org/index.html",
  },
];

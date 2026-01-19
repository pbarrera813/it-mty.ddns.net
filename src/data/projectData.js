import crossWord from "../assets/img-projects/crossWord.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import snakeGame from "../assets/img-projects/snakeGame.png";

export const proyectos = [
  {
    titulo: "Sopa de letras",
    descripcion:
      "Generador moderno y responsivo de sopa de letras con modo oscuro/claro integrado, con cualquier serie de palabras que ingrese el usuario el programa genera la sopa de letras, se puede imprimir, resolver, o contestar dentro de la misma pagina.",
    imagen: crossWord.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://it-mty.ddns.net/sopa/",
    codigo: "https://github.com/pbarrera813/Word-Search-Puzzle",
    categoria: "Frontend",
  },
  {
    titulo: "Recreacion Pac-man Arcade",
    descripcion:
      "Recreación juego Pac-man con la meta de una fidelidad a la version arcade, haciendo uso de sonidos y sprites mediante libreria SDL2 para la obtención de estas funciones, con el fin de una fidelidad completa a la version arcade.",
    imagen: pacmanGame.src,
    tecnologias: ["Cpp"],
    demo: "https://github.com/pbarrera813/Pacman-Game/releases",
    codigo: "https://github.com/pbarrera813/Pacman-Game/",
    categoria: "Programacion",
  },
  {
    titulo: "Servidor NAS",
    descripcion:
      "Servidor NAS hosteado en subpath del servidor para usuarios con carpetas personalizadas y vista previa de archivos, sin necesidad de convivir con otros archivos, usuarios o sus carpetas, unicamente los asignados a los respectivos usuarios.",
    imagen: nasCloud.src,
    tecnologias: ["Linux", "Docker"],
    demo: "https:/it-mty.ddns.net/cloud/",
    codigo: "https://filebrowser.org/index.html",
    categoria: "Backend",
  },
  {
    titulo: "Recreacion juego Snake",
    descripcion:
      "Recreación de juego Snake clásico hecho con HTML, CSS Y JavaScript, compatible con computadora mediante las flechas del teclado, y mediante dispositivos moviles manejable mediante los botones en la interfaz de la página, igualmente botones de navegacion para volver a la pantalla inicial o al otro juego disponible.",
    imagen: snakeGame.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https:/it-mty.ddns.net/snake/",
    codigo: "https://github.com/pbarrera813/Snake-Game/tree/main",
    categoria: "Frontend",
  },
 ];

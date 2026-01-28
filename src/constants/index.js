import foto from "../assets/foto3.png";
import diff from '../assets/lorentz.jpeg';
import water from '../assets/waterquality.png';
import tracking from '../assets/article.png';
import air from '../assets/iot.jpg';
import ipb from '../assets/ipb.png'; 
import utfpr from '../assets/utfpr.png'; 
import iff from '../assets/iff.png'; 

export const RESOURCES = {
  pt: {
    navbar: {
      items: [
        { label: "Sobre", href: "#about" },
        { label: "Projetos", href: "#projects" },
        { label: "Acadêmico", href: "#academics" },
        { label: "Hobbies", href: "#hobbies" },
        { label: "Contato", href: "#contact" },
      ]
    },
    hero: {
      titles: [
        "Engenheiro Eletrônico",
        "Pesquisador em Sistemas Embarcados",
        "Desenvolvedor de Soluções IoT"
      ],
      description: "Engenheiro Eletrônico e Desenvolvedor Full Stack apaixonado por criar soluções que conectam o mundo físico ao digital. Com experiência sólida em IoT, Cidades Inteligentes e desenvolvimento de software robusto, busco sempre inovação e eficiência."
    },
    about: {
      title: "Sobre Mim",
      description: "Sou um desenvolvedor versátil com experiência tanto em hardware quanto em software. Minha jornada inclui o desenvolvimento de soluções resilientes para Cidades Inteligentes usando LoRaWAN, sistemas de monitoramento ambiental e arquitetura de software Full Stack para gestão corporativa. Tenho expertise em criar desde firmwares para microcontroladores até plataformas web complexas e aplicativos móveis."
    },
    projects: {
      title: "Projetos",
      list: [
        {
          title: "Osciloscópio Digital em FPGA",
          description: "Osciloscópio digital em tempo real desenvolvido em uma FPGA Intel DE10-Lite. Captura sinais analógicos e exibe a forma de onda via saída VGA 640x480.",
          technologies: ["VHDL", "FPGA", "Digital Electronics", "VGA"],
          github: "https://github.com/ricsrdocasro/FPGA-Oscilloscope"
        },
        {
          title: "ESP32 IR Universal Remote",
          description: "Um sistema que permite ao ESP32 capturar e replicar sinais infravermelhos de vários controles remotos, integrando uma interface de usuário em display OLED.",
          technologies: ["C++", "ESP32", "Arduino-IRremote", "OLED"],
          github: "https://github.com/ricsrdocasro/ESP32-Universal-IR-Controller"
        },
        {
          title: "selection_marquee",
          description: "Pacote Flutter altamente personalizável que fornece um retângulo de seleção (marquee) com suporte a rolagem automática e estilos personalizados.",
          technologies: ["Dart", "Flutter", "Package Development"],
          github: "https://github.com/ricsrdocasro/selection_marquee",
          pubdev: "https://pub.dev/packages/selection_marquee",
          demo: "https://ricsrdocasro.github.io/selection_marquee/"
        },
        {
          title: "C.R.I.S",
          description: "Inteligência Artificial baseada em RAG para responder perguntas sobre o universo de Ordem Paranormal, utilizando a Wiki oficial como base de conhecimento.",
          technologies: ["Python", "AI", "RAG", "LLM"],
          github: "https://github.com/ricsrdocasro/C.R.I.S",
          demo: "https://ricsrdocasro.github.io/C.R.I.S/"
        },
        {
          title: "FoddaciTron",
          description: "IA baseada em RAG com foco no canal JogandoFoddaci, extraindo informações da wiki oficial do canal.",
          technologies: ["Python", "AI", "RAG"],
          github: "https://github.com/ricsrdocasro/FoddaciTron-Frontend",
          demo: "https://ricsrdocasro.github.io/FoddaciTron-Frontend/"
        }
      ]
    },
    experience: {
        title: "Experiência Profissional",
        list: [
            {
                role: "Desenvolvedor Full Stack & Arquiteto de Software",
                description: "Responsável pela arquitetura e desenvolvimento de múltiplos sistemas internos, incluindo Sistema de Gerenciamento de Orçamentos, Software de Cálculo de Folha de Pagamento e Plataformas IoT.",
                technologies: ["Node.js", "Flutter", "PostgreSQL", "Google Cloud", "IoT"]
            }
        ]
    },
    academics: {
      title: "Jornada Acadêmica",
      sections: [
        {
            title: "Formação",
            items: [
                {
                    title: "Mestrado em Engenharia Eletrotécnica e de Computadores",
                    institution: "Instituto Politécnico de Bragança (IPB)",
                    location: "Bragança, Portugal",
                    description: "Foco em sistemas embarcados avançados e computação aplicada. Início previsto para Fev/2026.",
                    image: ipb,
                    period: "2026 - Presente"
                },
                {
                    title: "Bacharelado em Engenharia Eletrônica",
                    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
                    location: "Toledo, PR, Brasil",
                    description: "Formação sólida em projetos de hardware, sistemas digitais e eletrônica de potência. Ênfase em soluções para IoT e automação.",
                    image: utfpr,
                    period: "2021 - 2025"
                },
                {
                    title: "Técnico em Automação Industrial",
                    institution: "Instituto Federal Farroupilha (IFF)",
                    location: "Panambi, RS, Brasil",
                    description: "Desenvolvimento de competências em eletrônica, instalações elétricas e programação (C/Arduino). Foco em trabalho em equipe através de projetos integradores (PPIs) e desenho técnico (SolidEdge/Inventor).",
                    image: iff,
                    period: "2018 - 2021"
                }
            ]
        },
        {
          title: "Publicações",
          items: [
            {
              title: "Algoritmo de Rastreamento Baseado em Posição Angular",
              description: "Publicado no IEEExplore. Colaborei no desenvolvimento e na redação de um algoritmo inovador que utiliza fusão de sensores inerciais para reduzir em 30% a transmissão de dados em redes IoT veiculares.",
              image: tracking,
              link: "https://ieeexplore.ieee.org/document/10771930"
            }
          ]
        },
        {
          title: "Iniciação Científica",
          items: [
            {
              title: "IoT e Cidades Inteligentes (LoRaWAN)",
              description: "Auxiliei no desenvolvimento do firmware de rastreadores veiculares resilientes e tolerantes a falhas, utilizando redes LoRaWAN para conectividade de longo alcance em aplicações de Cidades Inteligentes.",
              image: air
            },
            {
              title: "Sistemas Embarcados para Monitoramento Hídrico",
              description: "Otimizei o consumo energético de uma estação de monitoramento de qualidade da água, implementando técnicas avançadas de 'deep sleep' para maximizar a autonomia em campo.",
              image: water,
              link: "https://ricsrdocasro.github.io/IoT-Water-Quality-Usina-do-Conhecimento/"
            }
          ]
        },
        {
            title: "Docência",
            items: [
                {
                    title: "Monitoria de EDO",
                    description: "Atuei como monitor bolsista, facilitando o aprendizado de Equações Diferenciais Ordinárias e auxiliando estudantes na modelagem matemática de sistemas físicos.",
                    image: diff
                }
            ]
        }
      ]
    },
    hobbies: {
      title: "Hobbies",
      description: "Meus principais hobbies são a música e o café.",
      albumsText: "Abaixo estão os álbuns e EPs que produzi sob o nome de 'Pluck'",
      socialText: "Você pode me encontrar também no Soundcloud e no Bandcamp"
    },
    contact: {
      title: "Contato",
      address: "Toledo, Paraná, Brasil", // Assuming location based on text
      email: "rcastropaula02@gmail.com", // Placeholder
      phoneNo: "+55 45 99996-2146" // Placeholder
    },
    ui: {
        viewProject: "Ver Projeto",
        viewCode: "Ver Código / Projeto",
        viewDemo: "Ver Demo",
        readArticle: "Ler Artigo",
        watchVideo: "Assistir Vídeo",
        closePlayer: "Fechar Player",
        listen: "Ouvir",
        nowPlaying: "Tocando Agora",
        send: "ENVIAR",
        processing: "PROCESSANDO DADOS...",
        waitingInput: "Aguardando input...",
        typeMe: "Xingue o bot...",
        saveFiles: "ARQUIVOS SALVOS",
        resetRun: "+ RESETAR RUN",
        terminalOnline: "TERMINAL_ONLINE",
        newProtocol: "[+] NOVO PROTOCOLO",
        closeMenu: "FECHAR MENU",
        files: "/// ARQUIVOS ///"
    }
  },
  en: {
    navbar: {
      items: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Academics", href: "#academics" },
        { label: "Hobbies", href: "#hobbies" },
        { label: "Contact", href: "#contact" },
      ]
    },
    hero: {
      titles: [
        "Electronics Engineer",
        "Embedded Systems Researcher",
        "IoT Solutions Developer"
      ],
      description: "Electronics Engineer and Full Stack Developer passionate about creating solutions that connect the physical world to the digital. With solid experience in IoT, Smart Cities, and robust software development, I always strive for innovation and efficiency."
    },
    about: {
      title: "About Me",
      description: "I am a versatile developer with experience in both hardware and software. My journey includes developing resilient solutions for Smart Cities using LoRaWAN, environmental monitoring systems, and Full Stack software architecture for corporate management. I have expertise in creating everything from microcontroller firmware to complex web platforms and mobile apps."
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "FPGA-Based Digital Oscilloscope",
          description: "Real-time digital oscilloscope developed on an Intel DE10-Lite FPGA. Captures analog signals and displays the waveform via 640x480 VGA output.",
          technologies: ["VHDL", "FPGA", "Digital Electronics", "VGA"],
          github: "https://github.com/ricsrdocasro/FPGA-Oscilloscope"
        },
        {
          title: "ESP32 IR Universal Remote",
          description: "A system that enables an ESP32 to capture and replicate IR signals from various remotes, integrating an OLED display user interface.",
          technologies: ["C++", "ESP32", "Arduino-IRremote", "OLED"],
          github: "https://github.com/ricsrdocasro/ESP32-Universal-IR-Controller"
        },
        {
          title: "selection_marquee",
          description: "Highly customizable Flutter package that provides a drag-to-select marquee with auto-scrolling support and custom styling.",
          technologies: ["Dart", "Flutter", "Package Development"],
          github: "https://github.com/ricsrdocasro/selection_marquee",
          pubdev: "https://pub.dev/packages/selection_marquee",
          demo: "https://ricsrdocasro.github.io/selection_marquee/"
        },
        {
          title: "C.R.I.S",
          description: "RAG-based Artificial Intelligence to answer questions about the Ordem Paranormal universe, using the official Wiki as a knowledge base.",
          technologies: ["Python", "AI", "RAG", "LLM"],
          github: "https://github.com/ricsrdocasro/C.R.I.S",
          demo: "https://ricsrdocasro.github.io/C.R.I.S/"
        },
        {
          title: "FoddaciTron",
          description: "RAG-based AI focused on the JogandoFoddaci channel, extracting info from the official wiki.",
          technologies: ["Python", "AI", "RAG"],
          github: "https://github.com/ricsrdocasro/FoddaciTron-Frontend",
          demo: "https://ricsrdocasro.github.io/FoddaciTron-Frontend/"
        }
      ]
    },
    experience: {
        title: "Professional Experience",
        list: [
            {
                role: "Full Stack Developer & Software Architect",
                description: "Responsible for the architecture and development of multiple internal systems, including Budget Management System, Payroll Software, and IoT Platforms.",
                technologies: ["Node.js", "Flutter", "PostgreSQL", "Google Cloud", "IoT"]
            }
        ]
    },
    academics: {
      title: "Academic Journey",
      sections: [
        {
            title: "Education",
            items: [
                {
                    title: "MSc in Electrical and Computer Engineering",
                    institution: "Polytechnic Institute of Bragança (IPB)",
                    location: "Bragança, Portugal",
                    description: "Focusing on advanced embedded systems and applied computing. Starting Feb/2026.",
                    image: ipb,
                    period: "2026 - Present"
                },
                {
                    title: "BSc in Electronic Engineering",
                    institution: "Federal University of Technology - Paraná (UTFPR)",
                    location: "Toledo, PR, Brazil",
                    description: "Solid foundation in hardware design, digital systems, and power electronics. Emphasis on IoT solutions and automation.",
                    image: utfpr,
                    period: "2021 - 2025"
                },
                {
                    title: "Technician in Industrial Automation",
                    institution: "Instituto Federal Farroupilha (IFF)",
                    location: "Panambi, RS, Brazil",
                    description: "Development of core skills in electronics, electrical installations, and programming (C/Arduino). Emphasis on teamwork through integrated projects (PPIs) and technical drawing (SolidEdge/Inventor).",
                    image: iff,
                    period: "2018 - 2021"
                }
            ]
        },
        {
          title: "Publications",
          items: [
            {
              title: "An Angular Position-Based Tracking Algorithm for Geolocation in Smart Cities Applications",
              description: "Article published in IEEExplore. Collaborated on the development and writing of an innovative algorithm fusing inertial sensors to reduce data transmission in vehicular IoT networks by 30%.",
              image: tracking,
              link: "https://ieeexplore.ieee.org/document/10771930"
            }
          ]
        },
        {
          title: "Scientific Initiation",
          items: [
            {
              title: "IoT and Smart Cities (LoRaWAN)",
              description: "Helped develop the firmware for resilient and fault-tolerant vehicle trackers, utilizing LoRaWAN networks for long-range connectivity in Smart City applications.",
              image: air
            },
            {
              title: "Embedded Systems for Water Monitoring",
              description: "Optimized the energy consumption of a water quality monitoring station by implementing advanced sleep techniques to maximize field autonomy.",
              image: water,
              link: "https://ricsrdocasro.github.io/IoT-Water-Quality-Usina-do-Conhecimento/"
            }
          ]
        },
        {
            title: "Teaching",
            items: [
                {
                    title: "ODE Teaching Assistant",
                    description: "Served as a scholarship teaching assistant, facilitating learning in Ordinary Differential Equations and helping students model physical systems mathematically.",
                    image: diff
                }
            ]
        }
      ]
    },
    hobbies: {
      title: "Hobbies",
      description: "My main hobbies are music and coffee.",
      albumsText: "Below are the albums and EPs I produced under the alias 'Pluck'",
      socialText: "You can also find me on Soundcloud and Bandcamp"
    },
        contact: {
          title: "Contact",
          address: "Toledo, Paraná, Brazil",
          email: "rcastropaula02@gmail.com",
          phoneNo: "+55 45 99996-2146"
        },
        ui: {
                    viewProject: "View Project",
                    viewCode: "View Code / Project",
                    viewDemo: "View Demo",
                    readArticle: "Read Article",
            
            watchVideo: "Watch Video",
            closePlayer: "Close Player",
            listen: "Listen",
            nowPlaying: "Now Playing",
            send: "SEND",
            processing: "PROCESSING DATA...",
            waitingInput: "Waiting for input...",
            typeMe: "Roast the bot...",
            saveFiles: "SAVE FILES",
            resetRun: "+ RESET RUN",
            terminalOnline: "TERMINAL_ONLINE",
            newProtocol: "[+] NEW PROTOCOL",
            closeMenu: "CLOSE MENU",
            files: "/// FILES ///"
        }
      }
    };
    
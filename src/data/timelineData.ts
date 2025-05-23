export interface TimelineItemData {
  year: string;
  title: string;
  description: string;
  image?: string;
  animationEffect: string;
  technologies: string[];
}

export const timelineData: TimelineItemData[] = [
  {
    year: '2008',
    title: 'O Começo',
    description: 'Nasci em 26 de fevereiro de 2008. O início da minha jornada neste mundo, com possibilidades infinitas pela frente. Mal sabia eu sobre a revolução tecnológica que eu testemunharia e da qual me tornaria parte.',
    image: '/img/IMG/FOTO PERFIL.png',
    animationEffect: 'fade-right',
    technologies: ['Vida', 'Novos Começos']
  },
  {
    year: '2014',
    title: 'Entrada no SESI',
    description: 'Ingressei na escola SESI, marcando o início da minha jornada na educação formal. Este foi um passo crucial que estabeleceria a base para minhas futuras conquistas acadêmicas e interesse em tecnologia.',
    image: '/img/IMG/sesi-logo.png',
    animationEffect: 'fade-left',
    technologies: ['Educação', 'Aprendizado', 'Crescimento']
  },
  {
    year: '2015',
    title: 'Primeira Experiência com Computador',
    description: 'Minha primeira interação com um computador, abrindo as portas para um mundo digital cheio de maravilhas. Este momento despertou minha curiosidade sobre como essas máquinas funcionam e o que elas poderiam fazer.',
    image: '/img/IMG/notebook sem fundo.png',
    animationEffect: 'zoom-in',
    technologies: ['Computador', 'Windows', 'Mundo Digital']
  },
  {
    year: '2016',
    title: 'Descoberta dos Games',
    description: 'Primeiro contato com jogos online como Rocket League. Os games me apresentaram a comunidades virtuais e às possibilidades empolgantes de experiências digitais interativas. Foi quando comecei a apreciar a criatividade e habilidade técnica por trás do desenvolvimento de jogos.',
    image: '/img/IMG/ROCKET LEAGUE.png',
    animationEffect: 'flip-up',
    technologies: ['Rocket League', 'Jogos Online', 'Multiplayer']
  },
  {
    year: '2020',
    title: 'Introdução à Programação',
    description: 'Descobri a programação através de tutoriais no YouTube. Esta jornada de aprendizado autodidata abriu meus olhos para o poder do código e como ele molda nosso mundo digital. Comecei a ver a tecnologia não apenas como uma ferramenta, mas como um meio criativo.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    animationEffect: 'fade-up-right',
    technologies: ['Aprendizado no YouTube', 'Programação', 'Autodidata']
  },
  {
    year: '2024',
    title: 'Início da Jornada no SENAI SP',
    description: 'Me matriculei no SENAI SP para estudar formalmente tecnologia e programação. Levando minha paixão ao nível profissional com educação estruturada em desenvolvimento de software e inovação digital. Isso marca o início da minha carreira em tecnologia.',
    image: '/img/IMG/LOGO SENAI.jpg',
    animationEffect: 'fade-up-left',
    technologies: ['Educação Profissional', 'Desenvolvimento de Software', 'Carreira']
  }
];
/**
 * KONDA ACADEMY - BANCO DE DADOS ESTÁTICO (data.js)
 * * Estrutura de Cursos:
 * - price: 0 (Gratuito, mostra badge do YouTube) | acima de 0 (Mostra valor em USD)
 * - provider: 'youtube', 'udemy', 'coursera', 'hotmart', 'solidtecn' (Controla a logo/badge do card)
 * * Estrutura de Livros/Materiais:
 * - tipo: "pasta" (Abre o diretório do Drive em nova aba) | "arquivo" (Força o download invisível do PDF)
 */

const KONDA_DATA = {
  cursos: [
    // --- CURSOS GRATUITOS (YOUTUBE) ---
    {
      id: "cg1",
      title: "Python POO (Programação Orientada a Objetos) - Mundo 4",
      instructor: "Gustavo Guanabara",
      category: "Programação",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLHz_AreHm4dn_RXXoa3Ameh77f95Hgwv3&si=-cb37JRZfTFwDZuA", 
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg2",
      title: "Curso de Java para Iniciantes",
      instructor: "Fernanda Kipper",
      category: "Programação",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLNCSWIsR6ADI_wMAx9F-Iu8Hs9HHxj4sb&si=Co_2uGWfBde_L7Oe", 
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg3",
      title: "Programação em Python - Mundo 3",
      instructor: "Gustavo Guanabara",
      category: "Programação",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH&si=nljVmiIiKemB3tZa", 
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg4",
      title: "Programação em Python - Mundo 2",
      instructor: "Gustavo Guanabara",
      category: "Programação",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye&si=ydLc8NNwwwSaPMK7", 
      thumbnail: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg5",
      title: "Programação em Python - Mundo 1",
      instructor: "Gustavo Guanabara",
      category: "Programação",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6&si=vcyqxEjBdlNNrqx2", 
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg6",
      title: "Segurança da Informação - Módulo 1",
      instructor: "Gustavo Guanabara",
      category: "Cibersegurança",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLHz_AreHm4dkYS6J9KeYgCCVpo5OXkvgE&si=TROnL3jRu6UWtMrI", 
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg7",
      title: "Introdução ao Desenvolvimento iOS (Mobile)",
      instructor: "Atekita Dev",
      category: "Mobile",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLprgbdnzrDkGKa8lWByDwMJffz6i-lv-P&si=HQkGJlJYs9meDCmD", 
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg8",
      title: "Introdução ao Pentest & Segurança Ofensiva",
      instructor: "Solid Offensive Security",
      category: "Cibersegurança",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLp95aw034Wn8M910YSGLh3zvmq1xI7LbD&si=yFdupf56OMgCkXn2", 
      thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cg9",
      title: "Guia Completo de Carreira em TI",
      instructor: "Código Fonte TV",
      category: "Carreira",
      price: 0, 
      provider: "youtube",
      link: "https://youtube.com/playlist?list=PLVc5bWuiFQ8Ge8kSF754u-5YqVDu_Dmcv&si=xQLMWAULk2YsvAjY", 
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80"
    },

    // --- CURSOS PAGOS (PLATAFORMAS PARCEIRAS) ---
    {
      id: "cp1",
      title: "Formações Especializadas em Tecnologia e Negócios",
      instructor: "Herbert Carnaúba",
      category: "Certificações",
      price: 19, 
      provider: "solidtecn",
      link: "https://www.herbertcarnauba.com.br/?utm_source=youtube&utm_medium=video_junho&utm_campaign=tiktok_gol&utm_content=descricao_video", 
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cp2",
      title: "Habilidades Profissionais e Inteligência Artificial",
      instructor: "Udemy Marketplace",
      category: "Parceiros",
      price: 12,
      provider: "udemy",
      link: "https://www.udemy.com/pt/", 
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cp3",
      title: "Certificados Profissionais e Graus Académicos Online",
      instructor: "Coursera Global",
      category: "Parceiros",
      price: 39,
      provider: "coursera",
      link: "https://www.coursera.org", 
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cp4",
      title: "Mercado Digital e Especializações de Infoprodutos",
      instructor: "Hotmart Hub",
      category: "Parceiros",
      price: 25,
      provider: "hotmart",
      link: "https://hotmart.com/pt-br", 
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    }
  ],
  livros: [
    {
      id: "l1",
      title: "Curso Completo: Do Portugol até Python",
      author: "Konda Academy",
      category: "Programação",
      tipo: "pasta", // Comportamento: Vai abrir o diretório completo no Drive
      driveId: "1tvlCZgKOusqe57FWRuEJV0Yiyl9mEH1i", // Teu link real de pasta
      cover: "assets/images/covers/portugol-python.webp" // Mapeado para sua pasta de imagens IA
    },
    {
      id: "l2",
      title: "Lógica de Programação Descomplicada",
      author: "Mário Antunes",
      category: "Programação",
      tipo: "arquivo", // Comportamento: Vai baixar o arquivo PDF direto e oculto
      driveId: "ID_FALSO_SUBSTITUA_PELO_ID_DO_ARQUIVO_PDF", 
      cover: "assets/images/covers/logica.webp"
    }
  ]
};

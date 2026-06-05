/**
 * KONDA ACADEMY - MOTOR DE ATIVOS E DOWNLOADS (download.js)
 * * Este arquivo processa os cliques dos botões de materiais de forma inteligente,
 * distinguindo se o destino é uma pasta do Drive ou um arquivo PDF individual.
 */

function processarAtivoDrive(driveId, tituloAtivo, tipoAtivo) {
    // Validação preventiva de segurança
    if (!driveId || driveId.trim() === "") {
        console.error("Erro Crítico: ID do Google Drive inválido ou ausente.");
        alert("Este material está temporariamente indisponível para download.");
        return;
    }

    if (tipoAtivo === "pasta") {
        /**
         * CENÁRIO A: O ativo é uma pasta de materiais do Google Drive
         * Ação: Abre o diretório diretamente no Google Drive em modo público
         */
        const urlPastaDrive = `https://drive.google.com/drive/folders/${driveId}`;
        
        // Abre em nova aba protegendo contra vulnerabilidades de redirecionamento de aba pai
        window.open(urlPastaDrive, "_blank", "noopener,noreferrer");
        console.log(`[Direcionamento] Aluno redirecionado para a pasta: ${tituloAtivo}`);

    } else {
        /**
         * CENÁRIO B: O ativo é um arquivo PDF individual
         * Ação: Executa a requisição silenciosa que força o download imediato
         */
        const urlDownloadDireto = `https://drive.google.com/uc?export=download&id=${driveId}`;
        
        // Formata o título do livro para servir de nome de arquivo seguro (Ex: "guia-de-ti.pdf")
        const nomeArquivoLimpo = tituloAtivo
            .toLowerCase()
            .normalize("NFD") // Separa caracteres de seus acentos
            .replace(/[\u0300-\u036f]/g, "") // Remove os acentos graficamente
            .replace(/[^a-z0-9]/g, "-") // Substitui espaços e símbolos por hifens
            .replace(/-+/g, "-") // Remove hifens duplicados (Ex: "---" vira "-")
            .concat(".pdf");

        // Engenharia de Injeção DOM: Cria um gatilho de download virtual oculto na memória
        const gatilhoDownload = document.createElement("a");
        gatilhoDownload.href = urlDownloadDireto;
        gatilhoDownload.setAttribute("download", nomeArquivoLimpo);
        gatilhoDownload.style.display = "none"; // Garante invisibilidade total na tela
        
        // Injeta temporariamente o gatilho, clica nele programaticamente e destrói o elemento
        document.body.appendChild(gatilhoDownload);
        gatilhoDownload.click();
        document.body.removeChild(gatilhoDownload);
        
        console.log(`[Download Iniciado] Arquivo binário processado como: ${nomeArquivoLimpo}`);
    }
}

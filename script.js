document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Impede o scroll do body quando o menu está aberto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 2. Lógica Dinâmica do WhatsApp
    // Número base
    const waNumber = "5511976874383";
    const waButtons = document.querySelectorAll('.wa-btn');

    waButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Previne ação padrão caso seja link âncora
            
            // Pega o texto customizado do atributo data-wa-text
            const customText = btn.getAttribute('data-wa-text') || 'Olá, vim pelo site e gostaria de falar com a equipe.';
            
            // Codifica o texto para URL
            const encodedText = encodeURIComponent(customText);
            
            // Tenta abrir no aplicativo nativo primeiro, com fallback para o Web
            const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
            
            // Abre em nova aba
            window.open(waUrl, '_blank');
        });
    });

    // 3. Efeito Header no Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 15, 20, 0.9)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(11, 15, 20, 0.7)';
            header.style.boxShadow = 'none';
            header.style.padding = '16px 0';
        }
    });

    // 4. Efeito Reveal simples nos elementos (Scroll Animation)
    // Opcional: Adicionando uma classe 'reveal' via JS se quisermos depois.
    // Como a instrução pedia foco no que foi solicitado sem complexidade excessiva, mantemos rápido.
});

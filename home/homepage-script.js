// JavaScript para a página principal do Mental Care

document.addEventListener('DOMContentLoaded', function() {
    // navegação suave
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // só previne o comportamento padrão se o link for âncora (#)
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // remove classe ativa de todos os links
                navLinks.forEach(nav => nav.classList.remove('ativo'));
                
                // adiciona classe ativa ao link clicado
                this.classList.add('ativo');
                
                // simula navegação
                const linkText = this.textContent;
                console.log(`Navegando para: ${linkText}`);
            }
            // se não for âncora, deixa o link funcionar normalmente
        });
    });

    // botões de ação
    const btnPrincipal = document.querySelector('.btn-principal');
    const btnSecundario = document.querySelector('.btn-secundario');
    
    btnPrincipal.addEventListener('click', function() {
        // animação de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // simula redirecionamento para busca de psicólogos
        alert('Redirecionando para busca de psicólogos...');
    });
    
    btnSecundario.addEventListener('click', function() {
        // animação de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // scroll suave para seção "Como funciona"
        const comoFunciona = document.querySelector('.como-funciona');
        comoFunciona.scrollIntoView({ behavior: 'smooth' });
    });

    // botão de acesso para psicólogos
    const btnAcessoPsicologo = document.querySelector('.btn-acesso-psicologo');
    
    btnAcessoPsicologo.addEventListener('click', function() {
        // animação de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // simula redirecionamento para área do psicólogo
        alert('Redirecionando para área do psicólogo...');
    });

    // efeito de hover nos cards de temas
    const cardsTema = document.querySelectorAll('.card-tema');
    
    cardsTema.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // clique no card
        card.addEventListener('click', function() {
            const tema = this.querySelector('h3').textContent;
            alert(`Buscando psicólogos especializados em: ${tema}`);
        });
    });

    // efeito de hover nos passos
    const passos = document.querySelectorAll('.passo');
    
    passos.forEach(passo => {
        passo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.15)';
        });
        
        passo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // observa elementos para animação
    const elementosAnimacao = document.querySelectorAll('.passo, .card-tema');
    
    elementosAnimacao.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(elemento);
    });

    // contador animado para número de psicólogos
    function animarContador(elemento, valorFinal, duracao = 2000) {
        let valorAtual = 0;
        const incremento = valorFinal / (duracao / 16);
        
        const timer = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valorFinal) {
                valorAtual = valorFinal;
                clearInterval(timer);
            }
            elemento.textContent = `+${Math.floor(valorAtual)}+ psicólogos disponíveis`;
        }, 16);
    }

    // inicia animação do contador quando a seção hero estiver visível
    const heroSection = document.querySelector('.hero-section');
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numeroPsicologos = document.querySelector('.numero-psicologos');
                animarContador(numeroPsicologos, 500);
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(heroSection);

    // efeito parallax suave no scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImagem = document.querySelector('.imagem-container');
        
        if (heroImagem) {
            heroImagem.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    console.log('Mental Care - Página principal carregada com sucesso!');
});

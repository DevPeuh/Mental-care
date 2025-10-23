document.addEventListener('DOMContentLoaded', function() {
    // barra de pesquisa
    const searchInput = document.querySelector('.barra-pesquisa input');
    const groupCards = document.querySelectorAll('.card-grupo');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        groupCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // botões de filtro
    const filterButtons = document.querySelectorAll('.botao-filtro');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // remove classe ativa de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // adiciona classe ativa ao botão clicado
            this.classList.add('active');
            
            // filtra os cards baseado no filtro selecionado
            const filterType = this.classList[1]; // Pega a segunda classe (ansiedade, bem-estar e etc)
            
            groupCards.forEach(card => {
                if (filterType === 'all' || card.classList.contains(filterType)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // botões PARTICIPAR
    const participateButtons = document.querySelectorAll('.botao-participar');
    
    participateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card-grupo');
            const groupName = card.querySelector('h2').textContent;
            
            // animação de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // simula participação no grupo
            alert(`Você se inscreveu no grupo: ${groupName}`);
            
            // muda o texto do botão temporariamente
            const originalText = this.textContent;
            this.textContent = 'INSCRITO!';
            this.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '#5CB85C';
            }, 2000);
        });
    });

    // navegação lateral
    const navItems = document.querySelectorAll('.item-nav');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // remove classe ativa de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // adicionaclasse ativa ao item clicado
            this.classList.add('active');
            
            // Simula navegação
            const navText = this.querySelector('span').textContent;
            console.log(`Navegando para: ${navText}`);
        });
    });

    // hover nos cards
    groupCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // classes CSS para botões
    const style = document.createElement('style');
    style.textContent = `
        .botao-filtro.active {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            opacity: 0.9;
        }
        
        .card-grupo {
            transition: all 0.3s ease;
        }
        
        .botao-participar {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // resetar filtros
    function resetFilters() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        groupCards.forEach(card => card.style.display = 'flex');
        searchInput.value = '';
    }

    // botão de reset
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Limpar Filtros';
    resetButton.className = 'reset-btn';
    resetButton.style.cssText = `
        background-color: #6c757d;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        margin-left: 10px;
        font-size: 12px;
    `;
    
    resetButton.addEventListener('click', resetFilters);
    
    // botão de reset
    const filterContainer = document.querySelector('.botoes-filtro');
    filterContainer.appendChild(resetButton);

    // efeito de loading nos botões
    participateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'CARREGANDO...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    });

    console.log('Mental Care - Grupos de Apoio carregado com sucesso!');
});

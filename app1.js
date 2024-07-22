//adicionando a varinha ao ter o hover no nivel do desafio -->

const niveis = document.querySelectorAll('.nivel-div');
const varinhas = document.querySelectorAll('.varinha');

const nomeclaturas = [
    document.querySelector('.easy'),
    document.querySelector('.medium'),
    document.querySelector('.hard')
]

niveis.forEach((nivel, index) => {
    const varinha = varinhas[index];

    const nomeclatura = nomeclaturas[index];
    
    nivel.addEventListener('mouseenter', () => {
        
        
        requestAnimationFrame(() => {
            varinha.style.display = 'flex';
            varinha.style.opacity = '1';

            if(index === 0) {
                nomeclatura.style = 'text-shadow: 0px 0px 20px green'
            } else if(index === 1) {
                nomeclatura.style = 'text-shadow: 0px 0px 20px yellow'
            } else {
                nomeclatura.style = 'text-shadow: 0px 0px 20px red'
            }
            
        });
    });

    nivel.addEventListener('mouseleave', () => {
        
        varinha.style.opacity = '0';
        
        varinha.addEventListener('transitionend', function hide() {
            varinha.style.display = 'none';
            varinha.removeEventListener('transitionend', hide);
            
        });

        nomeclatura.style = 'text-shadow: none'
    });
});




/*Função faz com que o scroll para a âncora que seleccionámos de uma forma mais suave*/
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetPosition = targetElement.offsetTop - 80; // posição em que vai parar o scroll para vermos os dados

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        });
    });
});

/*Função que alterna a visibilidade*/
function toggleList(element) {
    const list = element.nextElementSibling.querySelector('ul');
    list.classList.toggle('visible');
}
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-proximo');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const nextChapterId = this.getAttribute('data-proximo');
            document.querySelectorAll('.chapter').forEach(chapter => {
                chapter.classList.remove('chapter-active');
            });
            document.querySelector(`#capitulo-${nextChapterId}`).classList.add('chapter-active');
        });
    });
});

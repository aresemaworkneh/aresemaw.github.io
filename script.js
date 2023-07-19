document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('.grid-item h3');
    headings.forEach((heading) => {
      heading.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.classList.toggle('show');
      });
    });
  });
  
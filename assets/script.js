document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.article-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.2s';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 400 + i * 100);
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.article-card').forEach(card => {
        const topics = card.dataset.topics || '';
        const show = topic === 'all' || topics.split(' ').includes(topic);
        card.style.display = show ? 'block' : 'none';
      });
    });
  });
});

const navigation = document.getElementById('mainNavigation');
for (const link of navigation.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    if (navigation.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(navigation).hide();
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

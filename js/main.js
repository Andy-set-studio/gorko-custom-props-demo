const button = document.querySelector('button');

const state = {
  status: 'default'
};

button.addEventListener('click', () => {
  if (state.status === 'switched') {
    document.documentElement.style.removeProperty('--color-dark');
    document.documentElement.style.removeProperty('--color-light');
    state.status = 'default';
  } else {
    document.documentElement.style.setProperty('--color-dark', 'pink');
    document.documentElement.style.setProperty('--color-light', 'teal');
    state.status = 'switched';
  }
});

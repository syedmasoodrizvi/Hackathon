const toggleSkillsButton = document.getElementById('toggleSkills')!;
const skillsSection = document.getElementById('skills')!;

toggleSkillsButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show Skills';
  }
});

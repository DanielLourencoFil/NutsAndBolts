export function renderCurrentYear() {
  const currentYear = new Date().getFullYear()
  const yearFooter = document.getElementById('current-year')
  yearFooter.textContent = currentYear
}

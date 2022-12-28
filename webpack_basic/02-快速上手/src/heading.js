export default () => {
  const element = document.createElement('h2')

  element.textContent = 'Hello Wrold'
  element.addEventListener('click', () => {
    alert("Hello webpack")
  })

  return element
}
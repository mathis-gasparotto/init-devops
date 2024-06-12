const queryParams = new URLSearchParams(window.location.search)
const seach = queryParams.get('search')

const el = document.getElementById('text')
const searchTag = seach || 'No search query'
el.innerText = searchTag

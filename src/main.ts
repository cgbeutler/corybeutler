import './app.css'
import App from './App.svelte'
import { mount } from 'svelte'
import { pathname } from './pathnameStore'

const app = mount(App, {
  target: document.getElementById('app')!,
})

// Subscribe to path and store it
const observePathChange = () => {
  let oldPathname = window.location.pathname
  const body = document.querySelector('body')
  const observer = new MutationObserver(mutations => {
    mutations.forEach(() => {
      if (oldPathname !== document.location.pathname) {
        oldPathname = document.location.pathname
        pathname.set(oldPathname)
      }
    })
  })
  observer.observe(body, { childList: true, subtree: true })
}

// Listen for popstate events (browser back/forward)
window.addEventListener('popstate', () => {
  pathname.set(window.location.pathname)
})

window.onload = observePathChange

export default app

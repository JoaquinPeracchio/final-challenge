import React from 'react'
import "./ScrollToTopPage.css"

const ScrollToTopPage = () => {

  function backToTop(){
    window.scrollTo(0,0)
  }

  return (
      <div onClick={backToTop} className='botonScrollTop botonScroll'>
        <img className="backTopImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASZJREFUSEu9leFRAjEQhb+rBKwAqMAWtALsQKwErACtQO2AEqQDqQTmORdmCXvZHDdHZvIrm/dtNpuXhpFHM7I+NYAX4BGYt1M5/bbzG/gpJVkCPAFrYBqc8g94AwS7Gl2ADfDas3zaI9DF8AC3iCfRd2BlCTlAZfnqmXke/mzLlQNUz0kB8AnsgG0hRhoPad0C1C2ljRJXjEYUez6FBXwAy47MrHgKKUHO8Rag3p45AE88gkhroSALOPYUjyD/2hGgq629ZNzYmhJ5bR0B9slWai8577oI4F5yzSNLCUUAt02VZfTQagAHa5B3twqdYlSzS5d5C+TKSfN3kPexLl2gkvlpj2oui+714ViYQJr6MpOVqM9lBxJ1hT03HfgN+NtrPv1B4BO1PDsZW0m2EwAAAABJRU5ErkJggg=="/>
      </div>
  )
}

export default ScrollToTopPage
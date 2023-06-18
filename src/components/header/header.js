export default function Header() {
    const header = document.createElement('header');

    header.innerHTML = `
    <img src="./assets/images/requestLogo.svg" alt="Logotipo requestEasy" class="headerLogo">
    <div class="search">
      <label for="search" class="label__search">
        <input type="search" name="" id="search" class="input__search" placeholder="Buscar produtos...">
      </label>
      <button class="btn__search btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19 19L14.65 14.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>              
      </button>
    </div>
    <div class="filter">
      <button class="filter__btn btn active">todos</button>
      <button class="filter__btn btn">hortifrut</button>
      <button class="filter__btn btn">secos</button>
      <button class="filter__btn btn">frios</button>
    </div>
    
    
    `

    header.setAttribute("class", "container")

    return header;

}





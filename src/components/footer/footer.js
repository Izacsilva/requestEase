export default function Footer() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
    <ul class="container navigation">
    <li class="nav__item">
      <a href="#home" class="nav__link">
        <svg 
        width="43" 
        height="34" 
        viewBox="0 0 43 34" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        class="nav__icon home">
          <path d="M12.5 9.5L21.5 2.5L30.5 9.5V20.5C30.5 21.0304 30.2893 21.5391 29.9142 21.9142C29.5391 22.2893 29.0304 22.5 28.5 22.5H14.5C13.9696 22.5 13.4609 22.2893 13.0858 21.9142C12.7107 21.5391 12.5 21.0304 12.5 20.5V9.5Z" stroke="#1E6732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5 22.5V12.5H24.5V22.5" stroke="#1E6732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="29.5" width="42" height="4" rx="2" fill="#FAB443"/>
        </svg>
          
      </a>
    </li>
    <li class="nav__item">
      <a href="#favorite" class="nav__link">
        <svg 
        width="43" 
        height="34" 
        viewBox="0 0 43 34" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" class="nav__icon favorite">
          <path d="M21.5 2.5L24.59 8.76L31.5 9.77L26.5 14.64L27.68 21.52L21.5 18.27L15.32 21.52L16.5 14.64L11.5 9.77L18.41 8.76L21.5 2.5Z" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="29.5" width="42" height="4" rx="2" fill="#A0A3A1"/>
        </svg>
          
      </a>
    </li>
    <li class="nav__item">
      <a href="#add" class="nav__link">
        <svg 
        width="43" 
        height="44" 
        viewBox="0 0 43 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" class="nav__icon add">
          <path d="M21.5 42C32.5457 42 41.5 33.0457 41.5 22C41.5 10.9543 32.5457 2 21.5 2C10.4543 2 1.5 10.9543 1.5 22C1.5 33.0457 10.4543 42 21.5 42Z" stroke="#1E6732" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.5 14V30" stroke="#1E6732" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.5 22H29.5" stroke="#1E6732" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          
      </a>
    </li>
    <li class="nav__item">
      <a href="#cart" class="nav__link">
        <svg 
        width="43" 
        height="33" 
        viewBox="0 0 43 33" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" class="nav__icon cart">
          <path d="M16.5 22C17.0523 22 17.5 21.5523 17.5 21C17.5 20.4477 17.0523 20 16.5 20C15.9477 20 15.5 20.4477 15.5 21C15.5 21.5523 15.9477 22 16.5 22Z" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.5 22C28.0523 22 28.5 21.5523 28.5 21C28.5 20.4477 28.0523 20 27.5 20C26.9477 20 26.5 20.4477 26.5 21C26.5 21.5523 26.9477 22 27.5 22Z" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 1H12.5L15.18 14.39C15.2714 14.8504 15.5219 15.264 15.8875 15.5583C16.2532 15.8526 16.7107 16.009 17.18 16H26.9C27.3693 16.009 27.8268 15.8526 28.1925 15.5583C28.5581 15.264 28.8086 14.8504 28.9 14.39L30.5 6H13.5" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="29" width="42" height="4" rx="2" fill="#A0A3A1"/>
        </svg>
          
      </a>
    </li>
    <li class="nav__item">
      <a href="#profile" class="nav__link">
        <svg 
        width="43" 
        height="34" 
        viewBox="0 0 43 34" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" class="nav__icon profile">
          <path d="M29.5 21.5V19.5C29.5 18.4391 29.0786 17.4217 28.3284 16.6716C27.5783 15.9214 26.5609 15.5 25.5 15.5H17.5C16.4391 15.5 15.4217 15.9214 14.6716 16.6716C13.9214 17.4217 13.5 18.4391 13.5 19.5V21.5" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.5 11.5C23.7091 11.5 25.5 9.70914 25.5 7.5C25.5 5.29086 23.7091 3.5 21.5 3.5C19.2909 3.5 17.5 5.29086 17.5 7.5C17.5 9.70914 19.2909 11.5 21.5 11.5Z" stroke="#A0A3A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="29.5" width="42" height="4" rx="2" fill="#A0A3A1"/>
        </svg>
          
      </a>
    </li>
  </ul>
    `

    footer.setAttribute('class', 'menu')

    return footer;

}
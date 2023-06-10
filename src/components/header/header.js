export default function Header() {
    const header = document.createElement('header');
    
    header.style.width = "50px"
    header.style.height = "50px"
    header.style.backgroundColor = 'red';

    header.innerHTML = `
        <h1>Hello App!</h1>
    
    
    `

    return header;

}



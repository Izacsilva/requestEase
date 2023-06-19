import ModalRequest from "./modal-request/modalRequest";

export default function Main() {
    const main = document.createElement('main');


    const item = `
    
        <li class="product">
            <div class="product__info">
            <img src="./assets/images/alcatra.webp" alt="Fotografia de uma peça de alcatra, sobre uma tábua de corte de madeira" class="product__img">
            <div class="product__text">
                <h3 class="product__name">Alcatra</h3>
                <p class="product__id">5258469</p>
            </div>
            </div>
            <div class="product__icon">
            <img src="./assets/images/star__stroke.svg" alt="" class="icon__star star stroke">
            <img src="./assets/images/trash.svg" alt="" class="icon__trash trash stroke">
            </div>
        </li>
    
    `

    main.innerHTML = `

        <ul class="listProduct">
        ${item}
        ${item}
        </ul>
    
    
    `
    main.append(ModalRequest())
main.setAttribute("class", "container")

    return main;

}
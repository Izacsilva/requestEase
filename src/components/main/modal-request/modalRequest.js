export default function ModalRequest() {

    const modal = document.createElement('div')

    modal.innerHTML = `
    <h2>Coxa e Sobrecoxa</h2>
    <span>5468469</span>
    <figure class="modal__imgBox">
      <img src="../assets/images/coxa-sobrecoxa.jpg" alt="" class=".product__img">
    </figure>
    <form action="">
      <div class="selectQuantity">
        <input type="number" class="selectQuantity__setNumber">
        <button class="selectQuantity__btn minus btn">&#x002D</button>
        <button class="selectQuantity__btn plus btn">&#x002B</button>
      </div>
      <div class="confirmQuantity">
        <button class="confirmQuantity__btn btn">confirmar</button>
      </div>
    </form>
    `

    modal.setAttribute('class', 'modal')

    return modal
}
function CardRazasPerros({nombreRaza, imagen}) {
    return(
      <li class="breedCard">
              <div class="contenedorImagen">
                <img src={imagen} alt="Border Collie" />
              </div>
              <span class="breedTitle">{nombreRaza}</span>
            </li>
    )
}

export default CardRazasPerros;
import { Link } from "react-router-dom";

function CardRazasPerros({nombreRaza, imagen}) {
    return(
      <li class="breedCard">
          <Link to="/rhodesian">
            <div class="contenedorImagen">
                <img src={imagen} alt="Border Collie" />
            </div>
            </Link>
        <span class="breedTitle">{nombreRaza}</span>
    </li>
    )
}

export default CardRazasPerros;
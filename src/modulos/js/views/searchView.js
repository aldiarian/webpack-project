import {elements} from './base_elements';

export const getInput = () => elements.searchInput.value;

const rederRecipe = recipe =>{
    const markup = `
        <li>
            <p>Nombre</p>
            <p>Listo en : xxxx minutos</p>
            <p>Para 6 personas</p>
            <img class="receta-img" src="xx" alt="">
        </li>
        `;
}

export const rederResults = recipes => {
    recipes.forEach(renderRecipe);
}
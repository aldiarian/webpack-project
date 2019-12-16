require("babel-polyfill");

/* css */
import '../src/scss/estilos.scss'

// JS
import Search from './modulos/js/models/search';
import {elements} from './modulos/js/views/base_elements';
import * as searchView from './modulos/js/views/searchView';

/** Estado Global de la aplicación
    - objeto buscar
    - objeto receta actual
    - objeto lista de la compra
    - objeto recetas con liks
**/
const state = {

}

const controlSearch = async ()=>{
    // 1) Tomar la búsqueda de la vista
    const query = searchView.getInput();
    
    if(query){
        // 2) Nueva búsqueda y añadirla en el estado
        state.search = new Search(query);

        // 3) Preparar la UI para los resultados

        // 4) Buscar recetas
        await state.search.getResult(); // la búsqueda es asíncrona

        // 5) Renderizar los resultados 
        console.log(state.search.results);
        
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    
})



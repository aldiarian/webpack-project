import axios from 'axios';
import 'babel-polyfill';

export default class Search {
    constructor (query){
        this.query = query;
    }

    async getResult(){
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '49beb74770dd473b83f4edad01c59dfb';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?query=${this.query}&number=12&apiKey=${key}`);
            this.results = res.data.results;
           
        } catch (error) {
            alert(error);
        }
    }

}
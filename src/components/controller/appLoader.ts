import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '6ada2a06577644a7ad815c5b796e3107', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

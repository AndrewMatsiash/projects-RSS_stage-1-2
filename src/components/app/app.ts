import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IResponceEverything, IResponceSources } from '../../types';

class App {
    private controller = new AppController();
    private view = new AppView();
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesElement: HTMLElement = document.querySelector('.sources') as HTMLElement;
        sourcesElement.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as IResponceEverything)));
        this.controller.getSources((data) => this.view.drawSources(data as IResponceSources));
    }
}

export default App;

import News from './news/news';
import Sources from './sources/sources';
import { IResponceEverything, IResponceSources, ISourcesSource, IArticles } from '../../types/';
export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IResponceEverything): void {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IResponceSources): void {
        const values: ISourcesSource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

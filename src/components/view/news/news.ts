import './news.css';
import { IArticles } from '../../../types/';

class News {
    draw(data: IArticles[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx: number): void => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem: HTMLElement = newsClone.querySelector('.news__item') as HTMLElement
                newsItem.classList.add('alt');
            }

            const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsAutor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const newsDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const newsTittle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const newsSourses = newsClone.querySelector('.news__description-source') as HTMLElement;
            const newsContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const newsMore = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;

            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsAutor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsTittle.textContent = item.title;
            newsSourses.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newContainer = document.querySelector(".news") as HTMLElement;
        newContainer.innerHTML = '';
        newContainer.appendChild(fragment);
    }
}

export default News;
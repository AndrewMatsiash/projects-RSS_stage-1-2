import './sources.css';
import { ISourcesSource } from "../../../types/"

class Sources {
    draw(data: ISourcesSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: ISourcesSource): void => {

            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName: HTMLElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
            const sourceItem: HTMLElement = sourceClone.querySelector('.source__item') as HTMLElement;

            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;

        sources.append(fragment);
    }
}

export default Sources;

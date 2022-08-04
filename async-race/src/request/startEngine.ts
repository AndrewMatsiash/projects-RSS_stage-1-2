import { engine } from './rootRequest';

const startEngine = async (id:number) => (await fetch(`${engine}?id=${id}$status=started`)).json();

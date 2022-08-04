import { engine } from './rootRequest';

const stopEngine = async (id:number) => (await fetch(`${engine}?id=${id}$status=stopped`)).json();

export interface ICar {
  name?: string,
  color?: string | undefined,
  id?: number
}

export interface Iwinner {
  id: number,
  wins: number,
  time: number
}

export type State = {
  id?: number;
  success?:boolean;
  time?:number
};

export interface Ianimation {
  id?: Iid;
  [key: string]: any;
}

export interface Iid {
  id?: number;
}

export interface IglobalState {
  garagePage: number;
  cars: ICar[];
  carsCount: string | null;
  winnersPage: number;
  animation: Ianimation;
  winners: Iwinner[];
  winnersCount: string | null;
}

export interface ICar {
  name?: string,
  color?: string | undefined,
  id?: number
}

export type State = {
  id?: number;
  success?: boolean;
  time?: number
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
  winners: IWinners[];
  winnersCount: string | null;
  order:string;
  sort:string;
}

export interface IWinners {
  id: number,
    car: {
    name: string,
    color: string
  },
  wins: number,
  time: number,
}
export interface IWinner {
  id: number,
  wins: number,
  time: number,
}

export interface IGetWinners {
  page: number,
  limit?: number,
  sort?: string | undefined,
  order?: string | undefined
}

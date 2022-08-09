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
  id?:number
};

// export interface IglobalState {
//   garagePage: number,
//   cars:ICar[],
//   carsCount:number,
//   winnersPage: number,
//   animation: Ianimation,
//   winners:Iwinner[],
//   winnersCount:number,
// }

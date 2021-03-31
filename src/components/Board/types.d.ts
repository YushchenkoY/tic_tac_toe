export type BoardItem = string | null;

export type HistoryItem = BoardItem[];

export interface IScoreState {
  [key: string]: number;
}

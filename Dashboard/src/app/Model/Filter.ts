export interface Filter {
  name: string;
  min: number | null;
  max: number | null;
}

export interface HighlightInfo {
  name: string;
  isCheapest: boolean;
}

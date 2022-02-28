export type InitialStateType = {
  theme: ThemeAction
  change: (theme: ThemeAction) => void
}

export enum ThemeAction { 
  DARK = 'dark',
  LIGHT = 'light'
}

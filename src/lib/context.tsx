import { createContext, Dispatch } from "react";

export type ActionType =
  | "SET_INITIAL"
  | "SET_INITIAL_DARK"
  | "SET_INITIAL_LIGHT"
  | "SET_MODE_TOGGLE";

interface Theme {
  primary: string;
  success: string;
  black: string;
  medium: string;
  white: string;
  link: string;
  warning: string;
  error: string;
  light: string;
  dark: string;
}

interface HomeLayout {
  expanded?: boolean;
  openKeys?: string[];
}

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export interface InitialState {
  theme?: Theme | null;
  mode?: boolean;
}

export const themeDark = {
  primary: "#23E884",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#ffd534",
  error: "#ff4961",
  black: "#000000",
  medium: "#989aa2",
  white: "#ffffff",
  light: "#222428",
  dark: "#f4f5f8",
};

export const theme = {
  primary: "#1EC470",
  link: "#3498ff",
  success: "#4CD964",
  warning: "#FF9500",
  error: "#eb445a",
  black: "#000000",
  medium: "#92949c",
  white: "#ffffff",
  light: "#f4f5f8",
  dark: "#222428",
};

export const initialState: InitialState = {
  theme,
  mode: false,
};

export interface IContext {
  state: InitialState | null;
  dispatch: Dispatch<Action>;
}

export const Context = createContext<IContext>(null);

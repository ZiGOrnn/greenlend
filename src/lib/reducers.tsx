import {
  Action,
  initialState,
  InitialState,
  theme,
  themeDark,
} from "./context";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_INITIAL":
      return initialState;
    case "SET_INITIAL_DARK":
      document.body.classList.add("dark");
      return {
        ...state,
        mode: true,
        theme: themeDark,
      };
    case "SET_INITIAL_LIGHT":
      document.body.classList.remove("dark");
      return {
        ...state,
        mode: false,
        theme: theme,
      };
    case "SET_MODE_TOGGLE":
      return state;
    default:
      return state;
  }
};

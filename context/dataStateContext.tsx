import { createContext, Dispatch, SetStateAction, useState, useContext } from "react";
// import Cookies from 'js-cookie'

export interface GlobalStateInterface {
  modal: string
}

const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setState] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };



// let reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "modal":
//       Cookies.set('modal', JSON.stringify(action.state))
//       return { ...state, modal: action.state }
//     default:
//       console.error('action.type: "' + action.type + '" is not implemented')
//       return state
//   }
// };

// const initialState: AppContextInterface = {
//   modal: Cookies.get('modal') ? JSON.parse(Cookies.get('modal') as string) : [],
// }

// export { DataStateContext, DataProvider };

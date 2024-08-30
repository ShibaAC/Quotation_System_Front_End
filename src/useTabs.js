import { useReducer, useCallback } from 'react';

const initValue = {
  currentTab: null,
  storedTabs: [],
};

function tabsReducer(state, action) {
  const { type, payload } = action;

  switch (type.toUpperCase()) {
    case 'ADD': {
      if (state.storedTabs.some((tab) => tab.id === payload.id)) {
        return {
          ...state,
          currentTab: payload.id,
        };
      }

      return {
        ...state,
        currentTab: payload.id,
        storedTabs: [...state.storedTabs, payload],
      };
    }
    case 'REMOVE': {
      const newStoredTabs = state.storedTabs.filter((tab) => tab.id !== payload);

      return {
        ...state,
        currentTab: newStoredTabs.at(-1)?.id || null,
        storedTabs: newStoredTabs,
      };
    }
    case 'NAVIGATE': {
      return {
        ...state,
        currentTab: payload,
      };
    }
    default: {
      throw new Error('[useTabs] dispatch received an invalid action type');
    }
  }
}

function useTabs() {
  const [state, dispatch] = useReducer(tabsReducer, initValue);

  const tabDispatch = useCallback(
    (type, payload) => dispatch({ type, payload }),
    []
  );
  return [state, tabDispatch];
}



export default useTabs;

import Cookies from 'js-cookie';
import { atom } from 'nanostores';

export const FREE_GENERATIONS_LIMIT = 3;

const FREE_GENERATIONS_KEY = 'freeGenerations';

interface SessionStore {
  freeGenerations: number;
  isAuthenticated: boolean;
}

const initialState: SessionStore = {
  freeGenerations: parseInt(Cookies.get(FREE_GENERATIONS_KEY) || '0', 10),
  isAuthenticated: false,
};

export const sessionStore = atom<SessionStore>(initialState);

export function incrementFreeGenerations() {
  const currentState = sessionStore.get();
  return sessionStore.set({
    ...currentState,
    freeGenerations: currentState.freeGenerations + 1,
  });
}

export function hasRemainingFreeGenerations() {
  const currentState = sessionStore.get();
  return currentState.freeGenerations < FREE_GENERATIONS_LIMIT;
}

export function setAuthenticated(isAuthenticated: boolean) {
  const currentState = sessionStore.get();
  return sessionStore.set({
    ...currentState,
    isAuthenticated,
  });
}

export function logout() {
  const currentState = sessionStore.get();
  return sessionStore.set({
    ...currentState,
    isAuthenticated: false,
  });
} 
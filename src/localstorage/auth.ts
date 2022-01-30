const Token = '@Shopy:auth';

export const getToken = (): string | null => localStorage.getItem(Token);

export const setToken = (value: string): void =>
  localStorage.setItem(Token, value);

export const deleteToken = (): void => localStorage.removeItem(Token);

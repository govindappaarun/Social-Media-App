export type User = {
  _id: string;
  firtName: string;
  lastName: string;
  email: string;
  username: string;
};

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

type Action =
  | { type: "DO_LOGIN"; payload: Record<string, any> }
  | { type: "DO_LOGOUT"; payload?: null };

export const authReducer = (state: AuthState, { type, payload }: Action) => {
  switch (type) {
    case "DO_LOGIN":
      const { firstName, lastName, email, username, _id } = payload;
      return {
        ...state,
        isLoggedIn: true,
        user: { firstName, lastName, email, username, _id },
      };

    case "DO_LOGOUT":
      return initialState;

    default:
      throw new Error(`Invalid action type ${type}`);
  }
};

import { createStore, applyMiddleware, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { combinedReducer } from "redux/combinedReducer";
import { rootSaga } from "redux/sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export type TState = ReturnType<typeof combinedReducer>;

const reducer = (
  state: TState = {
    auth: { error: "", loading: false, user: null },
    cart: { cart: [], total: 0 },
  },
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const saga = createSagaMiddleware();

export const makeStore = (context: Context) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(saga))
  );

  saga.run(rootSaga);

  return store;
};
type Store = ReturnType<typeof makeStore>;

export type RootStateType = ReturnType<Store["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store["dispatch"];

export const wrapper = createWrapper<Store>(makeStore, {
  debug: true,
});

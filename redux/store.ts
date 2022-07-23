import { createStore, applyMiddleware, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/rootReducer";
import { rootSaga } from "redux/sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

const reducer = (
  state: ReturnType<typeof rootReducer> = {
    auth: { error: "", loading: false, user: null },
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
    return rootReducer(state, action);
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

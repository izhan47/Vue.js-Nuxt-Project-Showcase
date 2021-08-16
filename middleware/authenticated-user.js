export default async ({ store, redirect }) => {
  if (store.state.USER.isAuthenticated) {
    return redirect("/");
  }
};

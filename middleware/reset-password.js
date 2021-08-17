export default async ({ query, redirect }) => {
    if(!query.token){
        return redirect("/");
    }
  };
  
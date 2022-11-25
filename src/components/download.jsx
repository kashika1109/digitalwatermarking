import useFetch from "./useFetch";
const Download = () => {
    const {data: images,isPending,error} =useFetch('http://localhost:8000/images'); //naming data as blogs  u cant write data also but do chnge the name at line 11
    return (
        <div className="homepage">
            {error && <div class="w-32 m-5 px-4 py-2 text-2xl text-center hover:bg-transparent  text-fuchsia-200 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded shadow-xl">ERROR</div>}
            {isPending && <div>Loading....</div> }
            {!isPending && !error && <div><button class="m-5 px-4 py-2 text-2xl text-center hover:bg-transparent  text-fuchsia-200 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded shadow-xl">
                    Download
                  </button></div>}
        </div>
      );
}
 
export default Download;

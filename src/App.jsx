import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./Actions/PostsActions.js";
import Posts from "./Posts/Posts.jsx";


const App = ()=>{
    const posts = useSelector(state=>state)
    const dispatch = useDispatch()
    const Charger =()=>{
        dispatch(fetchPosts())
    }
    return <>
      <button onClick={()=>Charger()}>Charger Posts</button>
        {posts.loading && <h1>Chergement</h1>}
        {(!posts.loading&&!posts.error) && <div>
            <h3>Nombre de Posts :
                {posts.data.length}
            </h3>
            <Posts/>
        </div>}
        {(!posts.loading&&posts.error)&&<h3>Erreur {posts.error}</h3>}
    </>
}
export default App ;
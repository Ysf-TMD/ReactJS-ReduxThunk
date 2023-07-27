import {useSelector} from "react-redux";

 const  Posts=()=>{
    const posts = useSelector(state =>state.data)
    console.log(posts)
    return <>
        {posts.map((p , key )=><ul key={key}>
            <li>
                {p.id} : {p.title}
            </li>
        </ul> )}
    </>
}
export default Posts
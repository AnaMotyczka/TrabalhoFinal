import axios from 'axios';
// import styles from '../styles/Home.module.css';

    function Products({produto = {}}){
        return(
            <div>
                <p>Id do produto: {produto.id}</p>
                <p>{produto.title}</p>
                <p>R${produto.price}</p>
                <img src={produto.image} alt={produto.description} />
            </div>
        )
    }

    export async function getStaticProps(context) {
        const response = await axios.get(
            'https://fakestoreapi.com/products/' + context.params.id
            // {params: {id:context.params.id}}
        );

        const produto = await response.data;
        return {
          props: {produto} // will be passed to the page component as props
        }
      }

    export async function getStaticPaths(){
        const response = await axios.get(
            'https://fakestoreapi.com/products',
        );
        const products = await response.data;
        const paths = products.map((produto)=>{
            return {params:{id:String(produto.id)}};
        });
        return{
            paths,
            fallback: true,
        }
    }

export default Products;




// function Profile({user = {}}){
//     return(
//         <div>
//             <p>{user.id}</p>
//             <p>{user.name}</p>
//             <p>{user.username}</p>
//         </div>
//     )
// }

// export async function getStaticProps(context) {
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users',
//         {params: {id:context.params.id}}
//     );

//     const user = await response.data[0];
//     return {
//       props: {user}, // will be passed to the page component as props
//     }
//   }

// export async function getStaticPaths(){
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users',
//     );
//     const users = await response.data;
//     const paths = users.map((user)=>{
//         return {params:{id:String(user.id)}};
//     })
//     return{
//         paths,
//         fallback: true,
//     };
// }

// export default Profile;
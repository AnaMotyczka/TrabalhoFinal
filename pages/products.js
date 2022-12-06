import axios from 'axios';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Products({products}){
    return(
        <div className={styles.sombra}>
             <h3 className={styles.title}>Nossos produtos!</h3>
        <div className={styles.itens}>
            {products.map((produto) =>(
                <div className={styles.objeto}>
                    <Link href='/products/[id]' as={`/products/${produto.id}`}>
                        <div className={styles.imagens} ><img src={produto.image} alt={produto.description} /></div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;

    return{
        props: {products:data}
    }
}
export default Products;

// export default function Produtos(){
//     return(
//         <div>
//             <h1>Nossos produtos!</h1>
//             <h2>Perucas de cabelos sintéticos </h2>
//         <div className={styles.perucas}>
//             <div className={styles.item}>
//                 <img src="https://a-static.mlcdn.com.br/800x560/peruca-sintetica-curta-ondulada-30cm-lynx-producoes-artistica/produtosdemaquiagem/5355-2491/42a8d79de6def5ec7cc003157c5e5ff5.jpeg" alt=""></img>
//             </div>
//             <div className={styles.item}>
//                 <img src="https://www.newhairmodegringa.com.br/wp-content/uploads/2021/07/02.png" alt=""></img>
//             </div>
//             <div className={styles.item}>
//                 <img src="https://http2.mlstatic.com/D_NQ_NP_780770-CBT50778231118_072022-W.jpg" alt=""></img>
//             </div>
            
//         </div>
//             <h2>Perucas de cabelo humano</h2>
//             <h2>Perucas de fantasia</h2>
//         </div>
//     )

// }
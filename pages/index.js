import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    // Promisse
    const conect = () => {
      return fetch(
        `https://arianevasques-api.herokuapp.com/api/home?populate=*`
      );
    };
    // Tenta fazer isso
    try {
      const resultado = await conect();
      const dados = await resultado.json();
      // console.log(">>> product: ", dados.data);
      setData(dados.data);
    } catch (error) {
      // Se der erro faz isso
      console.log(">>> Erro: ", error);
    }
  };
  // roda toda vez q o componente renderiza
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.infos}>
        <div className={styles.avatar}>
          <img
            className={styles.imagemPerfil}
            src={data?.attributes?.Image?.data?.attributes?.url}
            width={data?.attributes?.Image?.data?.attributes?.width}
            height={data?.attributes?.Image?.data?.attributes?.height}
            alt={"teste"}
          />
        </div>
        <h1 className={styles.mainTitle}>{data?.attributes?.title}</h1>
        <div className={styles.description}>
          {data?.attributes?.description}
        </div>
        <div className={styles.socialLinks}>
          <ul>
            
            {/* INICIO DO .map()  */}
            {/* <li>
              <a href={data?.attributes?.socialLinks[0]?.url}>LinkedIn</a>
            </li>
            <li>
              <a href={data?.attributes?.socialLinks[1]?.url}>Instagram</a>
            </li>
            <li>
              <a href={data?.attributes?.socialLinks[2]?.url}>GitHub</a>
            </li> */}
            {data?.attributes?.socialLinks.map((item, index, array) => {
              return (
                <li key={item?.id}>
                  <a href={item?.url}>{item.social}</a>
                </li>
              );
            })}
            {/* FIM DO .map()  */}

          </ul>
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <div className={styles.homeInfos}>
//       <div className={styles.homeIllustration}>
//         <img src="./imagem-site.jpeg" />
//       </div>
//       <div className={styles.infos}>
//         <div className={styles.avatar}>
//           <img
//             className={styles.imagemPerfil}
//             src="https://github.com/arianevasques.png"
//           />
//         </div>
//         <h1 className={styles.mainTitle}>Ariane Vasques</h1>
//         <div className={styles.description}>
//           <p>
//             Olá!
//             <br />
//             Tudo bem!? Sou a Ariane :))
//           </p>
//           <p>
//             Formada em Publicidade e Propaganda, sempre atuei com o setor
//             comercial.
//             <br />
//             Em 2021 iniciei meus estudos como Desenvolvedora de Softwares
//             Front-End, decidida a migrar de area e mergulhar no mundo da
//             tecnologia de cabeça. Dedico meio período dos meus dias (todos os
//             dias) para os estudos, para assim conseguir atingir meu objetivo de
//             conquistar meu espaço nesse ramo.
//             <br />
//             No outro período, atuo como Assistente Comercial da Tyar, empresa de
//             tecnologia que desenvolve soluções corporativas para TI e
//             Infraestrutura. Trabalhamos com customização de Workstation, Render
//             Farm CPU ou GPU, Servidores, Storage e Media Server Watchout, de
//             acordo com a necessidade de cada cliente.
//           </p>
//           <p>
//             Adoro desafios e aprender coisas novas, procurando sempre absorver o
//             máximo de minhas experiências!
//           </p>
//           <p>Seja Bem-vindx! :)</p>
//         </div>
//         <div className={styles.socialLinks}>
//           <ul>
//             <li>
//               <a href="https://www.linkedin.com/in/ariane-vasques-a892a1183/" target="_blank" rel="noopener noreferrer">
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/arianevqs/"target="_blank" rel="noopener noreferrer">Instagram</a>
//             </li>
//             <li>
//               <a href="https://github.com/arianevasques/" target="_blank" rel="noopener noreferrer">GitHub</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

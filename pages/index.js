import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

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
      <div className={styles.homeInfos}>
        <div className={styles.homeIllustration}>
          <img src="./imagem-site.jpeg" />
        </div>
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
      </div>
    </>
  );
}

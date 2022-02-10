import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeInfos}>
      <div className={styles.homeImage}>
        <img src='./imagem-site.jpeg'/>
      </div>
      <div className={styles.infos}>
        <div className={styles.avatar}>
          <img className={styles.imagemPerfil} src='https://github.com/arianevasques.png' />
        </div>
        <h1 className={styles.mainTitle}>Ariane Vasques</h1>
        <div className={styles.description}>
          <p>
            Olá! 
            <br/>Tudo bem!? Sou a Ariane :))
          </p>
          <p>
            Formada em Publicidade e Propaganda, sempre atuei com o setor comercial.
            <br/>
            Em 2021 iniciei meus estudos como Desenvolvedora de Softwares Front-End, decidida a migrar de area e mergulhar no mundo da tecnologia de cabeça. Dedico meio período dos meus dias (todos os dias) para os estudos, para assim conseguir atingir meu objetivo de conquistar meu espaço nesse ramo.
            <br/>
            No outro período, atuo como Assistente Comercial da Tyar, empresa de tecnologia que desenvolve soluções corporativas para TI e Infraestrutura. Trabalhamos com customização de Workstation, Render Farm CPU ou GPU, Servidores, Storage e Media Server Watchout, de acordo com a necessidade de cada cliente.
          </p>
          <p>
            Adoro desafios e aprender coisas novas, procurando sempre absorver o máximo de minhas experiências!
          </p>
          <p>
            Seja Bem-vindx! :)
          </p>
        </div>
        <div className={styles.socialLinks}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ariane-vasques-a892a1183/">LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/arianevqs/">Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/arianevasques/">GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

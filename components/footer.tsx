import type { NextPage } from "next";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="/logo7@2x.png" />
            </div>
            <div className={styles.navigation}>
              <div className={styles.contact}>
                <div className={styles.button}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                    <div className={styles.text}>Contato</div>
                    <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase1}>
                    <div className={styles.iconLeft1}>
                      <img
                        className={styles.mapLIcon}
                        alt=""
                        src="/map-l2.svg"
                      />
                    </div>
                    <div className={styles.text1}>
                      <p className={styles.ruaJooBettega}>
                        Rua João Bettega, 1919 - Portão
                      </p>
                      <p className={styles.ruaJooBettega}>
                        Curitiba, PR, 81350-274
                      </p>
                    </div>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase1}>
                    <div className={styles.iconLeft2}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/phone-l2.svg"
                      />
                    </div>
                    <div className={styles.text1}>
                      (41) 3082-1413 | (41) 9 9966-0360
                    </div>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase1}>
                    <div className={styles.iconLeft2}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/email-l.svg"
                      />
                    </div>
                    <div className={styles.text1}>
                      contato@amigadossonhos.com.br
                    </div>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.about}>
                <div className={styles.button4}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                    <div className={styles.text}>Amiga dos Sonhos</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <div className={styles.text1}>Sobre</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <div className={styles.text1}>Parcerias</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase}>
                    <div className={styles.iconLeft1}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                    <div className={styles.text1}>Empresarial</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase}>
                    <div className={styles.iconLeft1}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                    <div className={styles.text1}>Voluntariado</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <div className={styles.text1}>Loja dos Sonhos</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.phoneLIcon}
                        alt=""
                        src="/arrow-2-right-l1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.text}>Siga-nos</div>
            <div className={styles.content1}>
              <img className={styles.phoneLIcon} alt="" src="/facebook.svg" />
              <img className={styles.phoneLIcon} alt="" src="/instagram.svg" />
              <img className={styles.phoneLIcon} alt="" src="/linkedin.svg" />
              <img className={styles.phoneLIcon} alt="" src="/youtube.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

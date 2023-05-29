import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import styles from "./index.module.css";
const InitialPage: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/donation-page1");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/donation-page2");
  }, [router]);

  return (
    <div className={styles.initialPage}>
      <div className={styles.headerSections}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.logo} onClick={onLogoContainerClick}>
                <img className={styles.logoIcon} alt="" src="/logo6@2x.png" />
              </div>
              <div className={styles.navigation}>
                <div className={styles.sobre}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <a
                      className={styles.text}
                      href="https://www.amigadossonhos.com.br/sobre/"
                      target="_blank"
                    >
                      Sobre
                    </a>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className={styles.sobre}>
                  <div className={styles.buttonBase}>
                    <div className={styles.icon}>
                      <img
                        className={styles.arrowRightL}
                        alt=""
                        src="/arrow-right-l.svg"
                      />
                    </div>
                    <a
                      className={styles.text}
                      href="https://www.amigadossonhos.com.br/parcerias/"
                      target="_blank"
                    >
                      Como Ajudar?
                    </a>
                    <div className={styles.icon}>
                      <img
                        className={styles.arrowRightL}
                        alt=""
                        src="/arrow-right-l.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.sobre}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <a
                      className={styles.text}
                      href="https://www.amigadossonhos.com.br/blog/"
                      target="_blank"
                    >
                      Blog
                    </a>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className={styles.sonhos}>
                  <div className={styles.buttonBase}>
                    <div className={styles.icon}>
                      <img
                        className={styles.arrowRightL}
                        alt=""
                        src="/arrow-right-l.svg"
                      />
                    </div>
                    <div className={styles.number}>Sonhos</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.arrowRightL}
                        alt=""
                        src="/arrow-right-l.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.sobre}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <a
                      className={styles.text}
                      href="https://www.amigadossonhos.com.br/contato/"
                      target="_blank"
                    >
                      Contato
                    </a>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className={styles.sobre}>
                  <div className={styles.buttonBase}>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    <a
                      className={styles.text}
                      href="https://www.amigadossonhos.com.br/loja/"
                      target="_blank"
                    >
                      Loja Beneficiente
                    </a>
                    <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.notification}>
                <div className={styles.notification1}>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <div className={styles.notification}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/bell-l.svg"
                        />
                      </div>
                      <div className={styles.number}>Notificações</div>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.icon2}>
                    <div className={styles.number}>3</div>
                  </div>
                </div>
              </div>
              <div className={styles.profile}>
                <div className={styles.profile1}>
                  <div className={styles.content2}>
                    <div className={styles.sobre}>
                      <div className={styles.notification}>
                        <div className={styles.notification}>
                          <img
                            className={styles.arrowRightL}
                            alt=""
                            src="/arrow-right-l.svg"
                          />
                        </div>
                        <div className={styles.text7}>Bem-Vindo João!</div>
                        <div className={styles.icon3}>
                          <img
                            className={styles.arrowRightL}
                            alt=""
                            src="/arrow-right-l.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.sobre}>
                      <div className={styles.profileWrapper}>
                        <img
                          className={styles.profileIcon}
                          alt=""
                          src="/profile@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.apresentationTitle}>
          <div className={styles.content3}>
            <div className={styles.sonhosQuePrecisamContainer}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Sonhos que precisam</p>
              <p className={styles.blankLine}>ser realizados ou que</p>
              <p className={styles.blankLine}>já foram realizados</p>
            </div>
            <div className={styles.counter}>
              <div className={styles.content4}>
                <div className={styles.number}>Já realizamos</div>
              </div>
              <div className={styles.content5}>
                <div className={styles.number}>12.804 Sonhos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.donations}>
        <div className={styles.donation1Parent}>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho a realizar</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button2} onClick={onButtonContainer2Click}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  <b className={styles.text10}>Sonho de Gabriela Santos</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text10}>
                Gabriela é uma recém mãe que precisa de ajuda para arrecadar
                produtos para bebê para cuidar de sua filha.
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 27/05/2023</div>
            </div>
          </div>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image11@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho realizado</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button2} onClick={onButtonContainer3Click}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  <b className={styles.text10}>Sonho de Paulo Costa</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text10}>
                <p className={styles.pauloFoiUm}>
                  Paulo foi um morador de rua, mas com sua ajuda conseguimos
                </p>
                <p className={styles.blankLine}>
                  ajudá-lo à superar essa situação terrível.
                </p>
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 16/05/2023</div>
            </div>
          </div>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image21@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho a realizar</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button4}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon.svg" />
                  <b className={styles.text10}>Campanha de Sonhos</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text10}>
                Participe da nossa campanha de doações e ajude-nos a realizar
                sonhos dessas pessoas!
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 07/05/2023</div>
            </div>
          </div>
        </div>
        <div className={styles.donation4Parent}>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image31@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho a realizar</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button4}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                  <b className={styles.text10}>Sonho</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description6}>
              <div className={styles.text10}>
                Maria é uma dona de casa que cuida dos seus 2 filhos sozinha,
                ela precisa de ajuda para conseguir eletrodomésticos para possar
                dar comida aos seus filhos.
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 01/05/2023</div>
            </div>
          </div>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image41@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho a realizar</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button4}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                  <b className={styles.text10}>Sonho</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text10}>
                Gabriela é uma recém mãe que precisa de ajuda para arrecadar
                produtos para bebê para cuidar de sua filha.
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 23/04/2023</div>
            </div>
          </div>
          <div className={styles.donation1}>
            <div className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/image51@2x.png" />
            </div>
            <div className={styles.category}>
              <div className={styles.number}>Sonho a realizar</div>
            </div>
            <div className={styles.title}>
              <div className={styles.button4}>
                <div className={styles.buttonBase8}>
                  <img className={styles.iconLeft} alt="" src="/icon2.svg" />
                  <b className={styles.text10}>Sonho</b>
                  <div className={styles.iconRight5}>
                    <img
                      className={styles.bellLIcon}
                      alt=""
                      src="/frame-31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text10}>
                Estamos realizando mais uma campanha de doações, pedimos a sua
                ajuda para realizar mais sonhos.
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.date1}>Publicado em 01/04/2023</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.copyright}>
        <div className={styles.text7}>© 2023 Instituto Amiga dos Sonhos</div>
      </div>
    </div>
  );
};

export default InitialPage;

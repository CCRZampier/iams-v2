import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./donation-page1.module.css";
const DonationPage1: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSonhosContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/donation-page2");
  }, [router]);

  return (
    <div className={styles.donationPage1}>
      <div className={styles.headerSections}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.logo} onClick={onLogoContainerClick}>
                <img className={styles.logoIcon} alt="" src="/logo4@2x.png" />
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
                <div className={styles.sonhos} onClick={onSonhosContainerClick}>
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
          <div className={styles.categoryDate}>
            <div className={styles.number}>Sonho a realizar</div>
            <div className={styles.date}>Publicado em 27/05/2023</div>
          </div>
          <div className={styles.titleImage}>
            <div className={styles.title}>Sonho de Gabriela Santos</div>
            <img
              className={styles.titleImageChild}
              alt=""
              src="/rectangle-12@2x.png"
            />
          </div>
          <div className={styles.description}>
            <div className={styles.gabrielaUmaContainer}>
              <p className={styles.gabrielaUma}>
                Gabriela é uma recém mãe que precisa de ajuda para arrecadar
                produtos para bebê para cuidar de sua filha.
              </p>
              <p className={styles.vejaALista}>
                Veja a lista abaixo de itens que você pode doar para ajudar
                Gabriela.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.donation}>
        <div className={styles.donationType1}>
          <div className={styles.container1}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon4} alt="" src="/icon1.svg" />
            </div>
            <div className={styles.content3}>
              <div className={styles.title1}>
                <div className={styles.title2}>
                  Este sonho aceita os seguintes itens:
                </div>
              </div>
              <div className={styles.itens}>
                <div className={styles.sobre}>
                  <div className={styles.content1}>
                    <div className={styles.iconLeft8}>
                      <img
                        className={styles.bellLIcon}
                        alt=""
                        src="/square-l.svg"
                      />
                    </div>
                    <div className={styles.text7}>Pacote de fraldas</div>
                    <img
                      className={styles.iconLeft}
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className={styles.sobre}>
                  <div className={styles.content1}>
                    <div className={styles.iconLeft8}>
                      <img
                        className={styles.bellLIcon}
                        alt=""
                        src="/square-l.svg"
                      />
                    </div>
                    <div className={styles.text7}>Roupinhas</div>
                    <img
                      className={styles.iconLeft}
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className={styles.checkbox2}>
                  <div className={styles.buttonBase10}>
                    <img
                      className={styles.iconLeft10}
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className={styles.text10}>Berço</div>
                    <img
                      className={styles.iconLeft}
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
                <div className={styles.checkbox3}>
                  <div className={styles.content1}>
                    <img
                      className={styles.iconLeft10}
                      alt=""
                      src="/icon-left.svg"
                    />
                    <div className={styles.text7}>Carrinho de bebê</div>
                    <img
                      className={styles.iconLeft}
                      alt=""
                      src="/icon-right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description1}>
            <div className={styles.text12}>
              Se você possui qualquer item que estiver na lista e queira doar,
              venha para nossa sede:
            </div>
            <div className={styles.icon5}>
              <div className={styles.iconLeft12}>
                <img className={styles.mapXlIcon} alt="" src="/map-xl.svg" />
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.content1}>
                <div className={styles.icon3}>
                  <img className={styles.arrowRightL} alt="" src="/map-l.svg" />
                </div>
                <div className={styles.text13}>
                  <p className={styles.gabrielaUma}>
                    Rua João Bettega, 1919 - Portão
                  </p>
                  <p className={styles.vejaALista}>Curitiba, PR, 81350-274</p>
                </div>
                <img className={styles.iconLeft} alt="" src="/icon2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.donationType1}>
          <div className={styles.container1}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon4} alt="" src="/icon6.svg" />
            </div>
            <div className={styles.title3}>
              <div className={styles.title4}>
                Você também pode fazer uma doação financeira.
              </div>
              <div className={styles.title5}>
                Qualquer valor que você poder doar já será de grande ajuda!
              </div>
            </div>
            <img className={styles.qrCodeIcon} alt="" src="/qr-code1@2x.png" />
          </div>
          <div className={styles.description1}>
            <div className={styles.text12}>
              Verifique as informações antes de realizar a doação:
            </div>
            <div className={styles.icon5}>
              <img className={styles.icon4} alt="" src="/icon-left4.svg" />
            </div>
            <div className={styles.button2}>
              <div className={styles.content1}>
                <div className={styles.icon3}>
                  <img
                    className={styles.arrowRightL}
                    alt=""
                    src="/map-l1.svg"
                  />
                </div>
                <div className={styles.text13}>
                  <p className={styles.gabrielaUma}>
                    Instituto Amiga dos Sonhos
                  </p>
                  <p className={styles.vejaALista}>15.160.607/0001-06</p>
                </div>
                <img className={styles.iconLeft} alt="" src="/icon11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nextPrevious}>
        <div className={styles.nextPrevious1}>
          <div className={styles.leftContainer}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
          <div className={styles.container3}>
            <div className={styles.number}>Próximo Sonho</div>
            <div className={styles.button4}>
              <div className={styles.buttonBase}>
                <img className={styles.iconLeft} alt="" src="/icon5.svg" />
                <b className={styles.text13}>Nome do sonho</b>
                <div className={styles.iconLeft8}>
                  <img
                    className={styles.bellLIcon}
                    alt=""
                    src="/arrow-up-right-l1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          </div>
        </div>
        <div className={styles.nextPrevious3}>
          <div className={styles.rightContainer}>
            <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          </div>
          <div className={styles.container4}>
            <div className={styles.number}>Sonho anterior</div>
            <div className={styles.button5} onClick={onButtonContainer5Click}>
              <div className={styles.buttonBase}>
                <img className={styles.iconLeft} alt="" src="/icon-left3.svg" />
                <b className={styles.text13}>Sonho de Paulo Costa</b>
                <div className={styles.iconLeft8}>
                  <img
                    className={styles.bellLIcon}
                    alt=""
                    src="/arrow-up-right-l.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.leftContainer}>
            <img className={styles.imageIcon3} alt="" src="/image3@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.container5}>
            <div className={styles.content4}>
              <div className={styles.logo1}>
                <img className={styles.logoIcon} alt="" src="/logo5@2x.png" />
              </div>
              <div className={styles.navigation1}>
                <div className={styles.contact}>
                  <div className={styles.button6}>
                    <div className={styles.buttonBase}>
                      <img
                        className={styles.iconLeft}
                        alt=""
                        src="/icon2.svg"
                      />
                      <div className={styles.number}>Contato</div>
                      <img
                        className={styles.iconLeft}
                        alt=""
                        src="/icon2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.content1}>
                      <div className={styles.notification}>
                        <img
                          className={styles.arrowRightL}
                          alt=""
                          src="/map-l2.svg"
                        />
                      </div>
                      <div className={styles.text13}>
                        <p className={styles.vejaALista}>
                          Rua João Bettega, 1919 - Portão
                        </p>
                        <p className={styles.vejaALista}>
                          Curitiba, PR, 81350-274
                        </p>
                      </div>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.content1}>
                      <div className={styles.iconLeft8}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/phone-l.svg"
                        />
                      </div>
                      <div className={styles.text13}>
                        (41) 3082-1413 | (41) 9 9966-0360
                      </div>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.content1}>
                      <div className={styles.iconLeft8}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/email-l.svg"
                        />
                      </div>
                      <div className={styles.text13}>
                        contato@amigadossonhos.com.br
                      </div>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.about}>
                  <div className={styles.button10}>
                    <div className={styles.buttonBase}>
                      <img
                        className={styles.iconLeft}
                        alt=""
                        src="/icon2.svg"
                      />
                      <div className={styles.number}>Amiga dos Sonhos</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                      <div className={styles.text13}>Sobre</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                      <div className={styles.text13}>Parcerias</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <div className={styles.notification}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                      <div className={styles.text13}>Empresarial</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <div className={styles.notification}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                      <div className={styles.text13}>Voluntariado</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
                          alt=""
                          src="/arrow-2-right-l1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.sobre}>
                    <div className={styles.buttonBase}>
                      <img className={styles.iconLeft} alt="" src="/icon.svg" />
                      <div className={styles.text13}>Loja dos Sonhos</div>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bellLIcon}
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
              <div className={styles.number}>Siga-nos</div>
              <div className={styles.content5}>
                <img className={styles.bellLIcon} alt="" src="/facebook.svg" />
                <img
                  className={styles.bellLIcon}
                  alt=""
                  src="/instagram1.svg"
                />
                <img className={styles.bellLIcon} alt="" src="/linkedin.svg" />
                <img className={styles.bellLIcon} alt="" src="/youtube1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.text7}>© 2023 Instituto Amiga dos Sonhos</div>
      </div>
    </div>
  );
};

export default DonationPage1;

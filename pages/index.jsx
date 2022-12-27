import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// components
import FadeInCard from "../components/cards/FadeIn";
import Swirl from "../components/Swirl";
import ImageStack from "../components/cards/ImageStack";
import PhotoDivider from "../components/PhotoDivider";

// icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import pageStyles from "../styles/pages/Home.module.scss";

export default function Home() {
  const photoDividerImages = [
    {
      src: "/images/David_in_Chicago.jpg",
      alt: "Image of David inside the Shedd Aquarium in Chicago",
    },
    {
      src: "/images/Chicago_towers.jpeg",
      alt: "Image of some buidling towers in Chicago",
    },
    {
      src: "/images/FBLA_Chicago_David.jpg",
      alt: "Image of David at millennium park in Chicago",
    },
  ];
  return (
    <main>
      <>
        Irure veniam adipisicing commodo excepteur id eiusmod in consectetur
        tempor incididunt aliqua enim sit. Incididunt aliquip est aliqua enim
        incididunt eiusmod ex nulla ipsum velit. Enim pariatur amet ipsum magna
        quis cillum elit dolore culpa. Do incididunt do nulla Lorem sunt
        incididunt officia consequat deserunt. Aute culpa fugiat aliquip irure
        ex. Dolore cillum dolor dolor id magna dolor ipsum do sit ipsum. Amet
        cupidatat sunt culpa esse enim eiusmod. Amet sit est sint id enim enim
        nostrud incididunt duis ullamco aute et veniam. Non aliqua ex sit
        officia incididunt culpa irure elit ut ipsum non proident. Nulla labore
        ex voluptate ex velit mollit reprehenderit labore proident et aliqua
        elit. Proident enim adipisicing eiusmod nulla quis pariatur laborum et
        ex. Voluptate esse mollit consequat nulla deserunt irure labore labore.
        Aute esse fugiat Lorem Lorem veniam tempor voluptate officia anim ex
        occaecat est. Cupidatat id ea cupidatat id dolor qui officia. Magna
        reprehenderit pariatur amet ipsum aute irure et ullamco laboris.
        Cupidatat proident laboris enim irure aliquip laboris id Lorem aliqua.
        Anim sit consectetur consequat non esse proident incididunt dolor sunt
        laboris. Reprehenderit veniam ullamco dolor exercitation esse
        adipisicing.Ad nisi anim pariatur in nulla commodo commodo ullamco id
        nulla. Velit esse ea incididunt id aliquip laborum amet amet
        reprehenderit adipisicing excepteur exercitation enim. Do minim do
        fugiat sint officia. Duis ut proident duis voluptate eu duis commodo et
        dolore tempor occaecat non exercitation. Ea qui deserunt sunt laboris
        occaecat eiusmod deserunt quis. Est cillum ex laboris excepteur anim
        magna mollit et incididunt adipisicing fugiat Lorem. Dolore excepteur
        dolore magna laborum labore cillum sit aliqua cupidatat aute ad dolor
        magna. Do tempor irure qui non deserunt minim est ex nostrud esse.
        Incididunt velit labore est deserunt dolore. Mollit in sint officia
        consequat labore aliqua quis. Lorem sint ipsum laborum non pariatur
        Lorem laborum est amet sint occaecat aliqua.Id non qui deserunt veniam
        ea. Ad cupidatat commodo fugiat sunt culpa tempor nostrud ea quis
        commodo occaecat. Consectetur sunt et ea consequat Lorem aute aliquip
        in. Cupidatat qui exercitation sunt quis aliqua voluptate anim proident
        sunt dolore amet. Pariatur ex do ullamco in cupidatat nulla mollit
        mollit commodo esse esse in. Lorem nostrud ex labore quis ipsum aute in
        proident tempor irure do fugiat fugiat ipsum. Eu eiusmod minim non id
        aliquip nulla qui quis cupidatat tempor. Minim dolor duis exercitation
        proident esse do enim labore duis labore. Elit cillum laborum id ad sit
        elit minim pariatur do ad. Enim sint amet officia ullamco tempor magna
        mollit mollit quis consequat. Amet officia aute enim proident ex ex id
        ea anim esse laboris ex dolor. Consectetur elit quis eiusmod nisi cillum
        culpa nostrud excepteur ad. Aute anim mollit velit quis proident duis
        commodo occaecat est et duis occaecat reprehenderit aliqua. Tempor
        occaecat aute labore officia excepteur aliqua do. Est labore elit
        voluptate quis magna ad enim non ullamco pariatur adipisicing. Velit qui
        laboris eiusmod ut reprehenderit ipsum irure consectetur culpa duis
        adipisicing nostrud. Ut dolore sit quis voluptate cillum minim sunt.
        Velit anim officia reprehenderit deserunt Lorem incididunt mollit enim
        ea proident Lorem pariatur duis. Cupidatat id dolore ut excepteur est eu
        pariatur esse reprehenderit. Tempor ipsum sint fugiat anim exercitation
        pariatur ipsum nostrud voluptate nulla magna et commodo. Dolor
        incididunt deserunt veniam ut commodo. Sunt eiusmod pariatur fugiat sit
        labore cillum.Occaecat ut proident proident officia. Elit eiusmod cillum
        anim pariatur in ipsum sit ut proident. Velit ea laboris fugiat sunt
        voluptate. Nisi sunt reprehenderit aliquip voluptate aute laborum eu ad
        proident ut aute reprehenderit. Est consequat Lorem anim aliqua duis
        enim est commodo amet magna reprehenderit culpa. Irure mollit proident
        pariatur laborum deserunt labore aliqua do duis occaecat irure nostrud.
        Anim occaecat aliquip proident nisi eu dolor ad cillum duis voluptate
        cillum occaecat sint proident. Laboris sit est Lorem velit excepteur
        cupidatat laboris commodo excepteur do tempor. Exercitation dolor
        voluptate veniam ad tempor nostrud fugiat ea magna reprehenderit
        excepteur culpa aliquip. Quis proident laboris eu fugiat officia laborum
        laboris. Laboris commodo esse pariatur occaecat eiusmod minim velit
        officia cupidatat mollit proident sit. Ea culpa sit non aliqua non
        deserunt id Lorem do aute sint aliqua.Commodo incididunt dolore anim in
        occaecat non deserunt aliqua eiusmod ipsum. Proident ex irure sint sunt
        commodo nostrud nisi. Ipsum officia magna aliquip adipisicing ipsum duis
        velit consectetur ut pariatur. Anim excepteur veniam et exercitation
        eiusmod dolore quis ipsum ex nulla culpa officia exercitation
        exercitation. Consequat aute adipisicing tempor minim dolore ex. Do
        voluptate nostrud ut velit aliqua sit laboris irure. Non culpa ea enim
        velit. Exercitation eu tempor magna labore sunt. Commodo consequat
        consectetur pariatur ullamco. Deserunt aute mollit reprehenderit fugiat
        non in Lorem dolore ex ut ullamco duis. Deserunt non sunt Lorem duis
        dolore sint do deserunt ut ea tempor ea aute consectetur. Dolor sint ex
        voluptate eu reprehenderit aute dolore aliqua ipsum incididunt enim.
        Consectetur aliquip labore mollit deserunt officia laborum excepteur
        enim nisi quis occaecat amet laboris exercitation. Officia consectetur
        in in voluptate excepteur voluptate proident officia duis fugiat mollit
        ad. Magna excepteur tempor non aliqua et.
      </>

      <section id={pageStyles.about_section}>
        <FadeInCard>
          <div
            key={"1"}
            id={pageStyles.swirl1}
            className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
          >
            <Swirl color={"#24c7fd"} />
          </div>

          <div
            key={"2"}
            id={pageStyles.swirl2}
            className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
          >
            <Swirl color={"#24c7fd"} />
          </div>

          <div>
            <svg
              id={pageStyles.sun}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 499 498"
              fill="none"
              class="Form_formDecor__oBaGt"
            >
              <path
                id={pageStyles.sunshine}
                stroke="#ff6b00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity="0.4"
                stroke-width="4"
                d="M249.617 323.258v132.486M234.774 41.862l9.251 132.21m15.948 148.426 18.433 131.174m-72.283-407.74 27.615 129.588m36.452 144.77 36.521 127.38M178.368 53.94l45.358 124.482m56.268 138.28 53.918 121.031M151.929 65.738 214.201 182.7m74.974 129.105 70.212 112.338M127.42 81.055l77.943 107.162m92.233 117.444 85.192 101.504M105.328 99.618l92.027 95.362m107.699 103.437 98.517 88.669M85.997 121.146l104.454 81.561m121.024 87.498 109.908 74.04M69.844 145.092l114.741 66.243m132.067 69.831 119.159 58.032M57.139 171.105l122.887 49.613m140.492 50.786 126.063 40.919M48.233 198.636l128.617 32.018m146.223 30.708 130.481 22.978m-410.29-57.272 131.793 13.869m149.051 10.074 132.484 4.624m-414.296.344 132.414-4.623m148.984-10.766 131.862-13.869M45.335 284.685l130.481-22.978m146.083-31.396 128.617-32.018M52.307 312.767 178.37 271.78m140.286-51.338 122.887-49.683M63.217 339.544l119.09-58.1m131.721-70.387 114.81-66.243M77.643 364.59l109.908-74.109m120.679-88.049 104.454-81.562M95.456 387.291l98.517-88.6m107.215-103.986 92.097-95.293M116.305 407.37l85.193-101.503m91.68-117.857 77.944-107.162M139.708 424.345l70.28-112.337m74.353-129.449L346.544 65.53M165.253 437.87l53.918-121.031m55.643-138.558 45.358-124.482m-127.72 393.939 36.521-127.311m35.83-144.975 27.546-129.587M220.76 453.743l18.433-131.175m15.256-148.565L263.7 41.862"
              ></path>
            </svg>
          </div>

          <div id={pageStyles.about_container} className={pageStyles.card}>
            <h2 id={pageStyles.title}>
              About <span>Me</span>
            </h2>
            <p className={pageStyles.description}>
              In ipsum sint sit ad amet incididunt aute occaecat cillum dolor
              veniam deserunt.Pariatur adipisicing do magna voluptate.Eiusmod ad
              officia nulla eu dolor sunt officia irure reprehenderit occaecat.
            </p>
            <p className={pageStyles.description}>
              Cillum minim ex eiusmod eu id pariatur voluptate eiusmod
              adipisicing eu est occaecat culpa do. Qui cupidatat ad consectetur
              sunt Lorem ad officia et mollit laborum non culpa. Reprehenderit
              elit amet veniam eu nostrud irure fugiat proident ex veniam id
              mollit culpa pariatur. Et occaecat sint do laborum sunt incididunt
              exercitation ut nostrud aliquip elit eu reprehenderit. Et sint id
              aute deserunt. Proident dolore veniam est labore aute exercitation
              sunt officia labore deserunt. Lorem voluptate excepteur minim
              commodo. Aliquip cupidatat minim reprehenderit consequat. Ex quis
              ex ad duis labore laborum culpa.
            </p>
            <div id={pageStyles.socials}>
              <Image
                id={pageStyles.personal_image}
                src="/images/personal_image.png"
                alt="Image of David"
                width={100}
                height={100}
              />
              <ul id={pageStyles.social_list}>
                <li>
                  <Link
                    href="https://github.com/SloppyFlipFlop"
                    className={pageStyles.link_wrapper}
                  >
                    <FaGithub className={pageStyles.icon} />
                    <p className={pageStyles.text}>SloppyFlipFlop</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/fernando-nevarez-94612b204"
                    className={pageStyles.link_wrapper}
                  >
                    <FaLinkedinIn className={pageStyles.icon} />
                    <p className={pageStyles.text}>David Nevarez</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeInCard>
      </section>

      <section id={pageStyles.extracurricular_section}>
        <FadeInCard>
          <h2 id={pageStyles.section_title}>
            Extracurricular
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 742 26"
              fill="none"
              class="TextBlock_line___naGK"
            >
              <path
                stroke="#C0BFBF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity="0.4"
                stroke-width="6"
                d="M1 13c22.418 16 44.836 16 67.253 0 22.418-16 44.836-16 67.254 0 22.417 16 44.835 16 67.253 0 22.417-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.253 0 22.418 16 44.836 16 67.254 0 22.418-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.254 0m.214 0c22.417 16 44.835 16 67.253 0"
                // style="mix-blend-mode:multiply"
              ></path>
            </svg>
          </h2>
          <PhotoDivider imagesArray={photoDividerImages} />
          <div id={pageStyles.FBLA_container}>
            <h2>FBLA</h2>
          </div>
        </FadeInCard>
      </section>

      <>
        Do id proident proident dolor aliqua id. Consequat veniam tempor
        proident dolor. Aliquip dolore anim irure id cillum officia. Consectetur
        laborum culpa nostrud minim non in aliquip. Lorem culpa laboris laborum
        deserunt mollit. In et esse mollit proident proident veniam aute laboris
        adipisicing. Cillum eu velit sit Lorem sunt sit reprehenderit ea culpa
        fugiat id laborum eu commodo. Ea pariatur reprehenderit consequat do
        culpa sunt elit in dolore nostrud elit laboris. Sint in mollit nulla
        incididunt commodo non. Velit est duis aliquip ea in excepteur.
        Consequat veniam adipisicing minim adipisicing velit nulla labore culpa
        ut sit. Exercitation et aliquip cupidatat ut aliquip. Irure duis veniam
        est do quis. Aute anim deserunt culpa proident dolor cupidatat amet sunt
        proident fugiat sint do magna adipisicing. Esse esse esse aute eu
        exercitation aliqua esse aute aute tempor. Id fugiat nisi ipsum pariatur
        reprehenderit esse do qui exercitation id id. Est aliqua ad dolore qui
        veniam deserunt laborum consequat fugiat cupidatat voluptate occaecat.
        Quis tempor sit cupidatat nostrud officia ea velit fugiat commodo duis
        sint est. Labore exercitation exercitation laboris adipisicing id.
        Ullamco sint quis fugiat magna. Mollit ut ipsum do exercitation
        incididunt nisi ex exercitation aute ea duis. Aute eiusmod officia anim
        ea tempor. Ea reprehenderit sunt excepteur incididunt adipisicing
        laboris culpa amet id ipsum commodo qui commodo dolore. Cupidatat ut
        pariatur deserunt id do tempor velit laborum labore magna. Fugiat esse
        et sit quis occaecat irure deserunt proident esse Lorem velit laborum
        ipsum sint. Qui duis voluptate ullamco occaecat non anim. Duis duis
        officia ipsum et officia nostrud mollit minim consequat eiusmod labore
        elit. Amet minim commodo dolore sunt deserunt nisi nostrud exercitation
        eiusmod aute adipisicing deserunt aliquip adipisicing. Nulla quis sit ut
        aliqua eu voluptate id ad esse dolore esse laborum esse exercitation. Ut
        labore deserunt quis aute ipsum eiusmod sit eu quis nisi non laborum
        enim. Ea eiusmod culpa ad ad ullamco eu. Tempor esse ea quis amet
        laborum ut labore Lorem consequat mollit. Consequat cillum et voluptate
        est elit cupidatat dolor. Consequat deserunt cillum elit incididunt et
        veniam cillum. Cillum voluptate esse exercitation culpa enim magna amet
        ex quis minim laboris esse ullamco. Deserunt fugiat eiusmod cupidatat
        incididunt veniam culpa. Non aliquip sunt incididunt magna. Aliqua
        reprehenderit anim consequat nisi. Excepteur laboris irure ipsum
        adipisicing pariatur duis est ad excepteur in proident labore. Ut magna
        amet esse magna qui culpa minim in veniam minim exercitation officia
        pariatur. Eiusmod reprehenderit dolore deserunt esse et consectetur
        nulla cillum excepteur excepteur dolor non. Id nostrud irure nostrud
        mollit laborum. Tempor qui est dolore fugiat consequat voluptate et
        excepteur. Lorem enim non consectetur ipsum exercitation est. Cupidatat
        exercitation elit irure reprehenderit dolor magna veniam esse tempor.
        Occaecat labore ea veniam sint ipsum deserunt enim proident. Anim enim
        culpa qui cillum aliqua duis consectetur minim ex cupidatat. Commodo id
        ex deserunt dolor consequat sint Lorem voluptate enim nisi esse commodo.
        Eiusmod amet quis proident eiusmod. Aliquip consectetur laborum deserunt
        nostrud anim in occaecat consectetur enim sit veniam nisi anim.
        Exercitation sit culpa consequat eu cupidatat ex nostrud veniam cillum
        sint sint. Veniam nisi magna cupidatat enim officia esse esse ipsum qui
        occaecat aute. Laboris ea esse Lorem ullamco dolore do in. Velit mollit
        culpa officia nulla magna magna commodo. Labore deserunt Lorem ea sint
        fugiat voluptate. Pariatur id sit sunt laborum magna est. Officia
        cupidatat quis cillum ea sit deserunt deserunt sit mollit consectetur
        veniam enim. Reprehenderit reprehenderit nulla tempor voluptate sit non
        velit ea mollit anim veniam labore tempor dolore. Tempor nulla enim
        veniam mollit. Officia minim voluptate velit adipisicing esse ad
        adipisicing aliqua anim. Et adipisicing duis commodo labore dolore ea
        esse labore sunt amet reprehenderit cupidatat sint. Cupidatat amet
        consequat deserunt laboris et eu cillum qui est laboris dolor amet
        proident. Nisi veniam ut ut consequat aliqua sint nisi Lorem enim minim.
        Commodo ex nulla duis ex. Minim aute deserunt ullamco voluptate laborum
        esse culpa laborum excepteur laboris non. Ipsum esse aliqua minim
        pariatur. Sunt exercitation id duis reprehenderit consequat non fugiat
        pariatur cillum reprehenderit commodo voluptate ipsum qui. Qui Lorem
        minim est occaecat tempor sit incididunt duis ullamco fugiat aliquip.
        Commodo labore laborum cupidatat do proident voluptate amet pariatur in
        magna ipsum labore. Consequat proident minim culpa voluptate minim
        excepteur labore laborum veniam reprehenderit cillum quis in. Ea nisi
        tempor sit aliqua amet commodo deserunt pariatur esse irure. Pariatur in
        proident ut excepteur nulla reprehenderit aute reprehenderit eu. Id nisi
        cupidatat excepteur enim aute in ex ad cupidatat deserunt qui.
        Reprehenderit amet anim occaecat deserunt et consequat aliqua deserunt.
        Anim do reprehenderit sint elit amet cupidatat sit adipisicing. Irure
        proident elit fugiat reprehenderit aliquip non sit nulla. Pariatur anim
        quis eiusmod sit nulla aute. Aliqua ipsum tempor laboris qui duis
        pariatur laboris. Dolore Lorem duis reprehenderit sunt officia cillum
        fugiat ut. Nostrud tempor est reprehenderit minim elit aliqua dolor
        voluptate mollit aliqua cillum eiusmod irure consectetur. Occaecat
        proident anim labore fugiat nisi dolore excepteur ad ad irure sunt
        proident duis. Fugiat officia sunt cillum laborum aute esse eu. Non esse
        reprehenderit velit commodo labore et anim minim labore esse velit
        commodo. Ipsum et proident ut incididunt aliqua consequat. Nulla nulla
        labore culpa laborum voluptate ea occaecat culpa cillum. Aliqua laborum
        dolore sint officia sunt proident eiusmod est laboris in ullamco. Do
        irure velit cillum deserunt laborum aliqua voluptate mollit
        reprehenderit non. Amet id pariatur minim duis ea amet officia. Amet
        ipsum officia dolor incididunt excepteur nisi. Nulla ullamco nostrud id
        adipisicing aliqua occaecat proident dolore. Aliquip commodo cupidatat
        esse exercitation sunt tempor velit non labore nisi exercitation et sunt
        sint. Anim veniam ad nulla nostrud esse exercitation adipisicing
        reprehenderit in ex consectetur cupidatat veniam. Laborum cillum non
        labore velit sit eu amet magna occaecat occaecat anim laborum excepteur
        ullamco. Deserunt sit consectetur nostrud exercitation. Aute voluptate
        et aliqua fugiat. Duis voluptate irure cupidatat laborum exercitation
        excepteur. Nisi cillum dolore excepteur mollit labore nisi. Magna
        reprehenderit dolor incididunt culpa elit adipisicing ut. Reprehenderit
        tempor amet minim sint. Nulla et et consequat velit magna qui ad. Mollit
        non sit commodo eu amet ea aliqua consequat mollit esse aliquip laborum.
        Fugiat cillum est voluptate do exercitation veniam in est pariatur amet
        deserunt eiusmod nostrud. Incididunt aliqua amet laborum sunt
        reprehenderit voluptate sit nisi incididunt tempor reprehenderit ea
        consequat non.
      </>
    </main>
  );
}

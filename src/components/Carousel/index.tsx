import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';

import styles from './carousel.module.scss';
import Link from "next/link";

SwiperCore.use([EffectFlip, Pagination, Navigation]);

export const Carousel = () => {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        className={styles.my_swiper}
        slideNextClass={styles.my_next_swiper}
        slidePrevClass={styles.my_prev_swiper}
      >
        <SwiperSlide>
          <Link href="/continent" passHref>
            <img src="/continents/europe.svg" />
          </Link>
          <p className={styles.swiper_text}>
            <strong>Europa</strong>
            <br />
            O continente mais antigo.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/continents/america.jpg" />
          <p className={styles.swiper_text}>
            <strong>América</strong>
            <br />
            Grandes três divisões.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/continents/asia.jpg" />
          <p className={styles.swiper_text}>
            <strong>Ásia</strong>
            <br />
            O maior continente.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/continents/africa.jpg" />
          <p className={styles.swiper_text}>
            <strong>África</strong>
            <br />
            O terceiro maior continente.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/continents/oceania.jpg" />
          <p className={styles.swiper_text}>
            <strong>Oceania</strong>
            <br />
            Entre os grandes oceanos.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/continents/antartida.jpg" />
          <p className={styles.swiper_text}>
            <strong>Antártida</strong>
            <br />
            O segundo menor continente.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
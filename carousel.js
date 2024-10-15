
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const Carousel = {
  data: {
    pageData: {}
  },
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper'))
    this.renderCarousel()
  },
  renderCarousel() {
    this.carousel = new Swiper('.swiper', {
      // loop: true,
      spaceBetween: 24,
      allowTouchMove: true,
      slidesPerView: 1,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-100%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init: () => {
          const buttonNextPage = document.querySelectorAll('.tsw-next-page')
          buttonNextPage.forEach((b) => {
            b.addEventListener("click", this.nextPage.bind(this))
          })
        },
        reachEnd: () => {
          console.log("Done", this.data)
        }
      }
    })
  },
  nextPage() {
    console.log(this.carouselEle[0]['swiper'].slideNext())
  }
}


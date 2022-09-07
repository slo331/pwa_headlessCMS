<template lang="pug">
#app
  header
    Header(
      :headerTitle='imgLogoTitle'
      :siteNav='siteNav'
    )
  
  main(
    :style='siteBg'
  )
    .site-wrapper
      router-view(
        :key='$route.fullPath'
      )
  
  footer
    Footer(
      :footerTitle='imgLogoTitle'
      :siteNav='siteNav'
    )
</template>

<script>
import { ref, onMounted } from 'vue';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default {
  name: 'App',
  components: { Header, Footer },
  setup() {
    const siteBg = ref({
      backgroundImage: `url(${require('@/assets/images/background_gray.jpg')})`
    })
    const imgLogoTitle = ref('Ambit Logo')
    const siteNav = ref('/api/siteNav.json')

    return { siteBg, imgLogoTitle, siteNav }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

html {
  font-size: $base-fontsize;
}

body {
  width: 100%;
  font-family: $primaryFont;
  font-weight: 300;
  color: $blck;
  line-height: $base-lineheight;
  margin: 0;
  padding: 0;

  header {
    position: relative;
    z-index: 5;
  }
  
  main {
    background-size: cover;
    display: block;
    height: 100%;
    width: 100%;
    padding: 70px 0 0;

    @include desktop {
      background-size: cover;
      padding: 90px 0 0;
    }

    .site-wrapper {
      padding: 0 0 2rem;
    }

    .section {
      &-container {
        padding: 1rem 0;

        @include desktop {
          padding: 1.5rem 0;
        }
      }

      &-wrap {
        width: 100%;
        margin: 0 auto;
  
        @include desktop {
          width: 95%;
        }

        @include lgDesktop {
          width: 80%;
        }

        &.w-full {
          width: 100%;
        }
      }
    }

    .box {
      background: $white;
      border-radius: 2.5rem;
      padding: 20px;
      
      @include mobile {
        border-radius: 2rem;
        padding: 20px;
      }

      &-wrap {
        @include mobile {
          padding: 0;
        }

        .box-content {
          position: relative;
          justify-content: space-around;
          height: 100%;
          z-index: 2;

          @include mobile {
            padding: 0;
          }

          .title {
            font-size: calc-em(40px);
            font-weight: 500;
            line-height: 1.1;
            color: $blck;
    
            @include mobile {
              font-size: calc-em(34px);
            }
          }

          .content, .subcontent {
            font-size: calc-em(20px);
    
            @include mobile {
              font-size: calc-em(18px);
            }
          }
        }

        .box-img-clip {
          img {
            transition: all 2s ease-in-out;
          }
        }

        .call-to-action {
          .btn--cta {
            margin: 0;
          }
        }
      }

      &:hover {
        .box-wrap {
          .box-img-clip {
            img {
              transform: scale(1.15);
            }
          }
        }
      }

      // Colors
      &.red {
        .title {
          color: $red;
        }

        .rte {
          h1, h2, h3, h4, strong {
            color: $red;
          }
          
          ul {
            li {
              &:before { 
                color: $red;
              }
            }
          }
        }
      }

      &.orange {
        .title {
          color: $orange;
        }

        .rte {
          h1, h2, h3, h4, strong {
            color: $orange;
          }

          ul {
            li {
              &:before { 
                color: $orange;
              }
            }
          }
        }
      }

      &.green {
        .title {
          color: $green;
        }

        .rte {
          h1, h2, h3, h4, strong {
            color: $green;
          }

          ul {
            li {
              &:before { 
                color: $green;
              }
            }
          }
        }
      }

      &.blue {
        .title {
          color: $blue;
        }

        .rte {
          h1, h2, h3, h4, strong {
            color: $blue;
          }

          ul {
            li {
              &:before { 
                color: $blue;
              }
            }
          }
        }
      }
    }

    .rte {
      a {
        color: $red;
        transition: all .2s ease-in-out;

        &:hover {
          color: $blue;
        }
      }

      ul {
        li {
          padding: 0 0 0 35px;
          position: relative;
    
          &:before {
            display: block;
            margin: 0 10px 0 0;
            line-height: 1.4;
            font-size: 24px;
            position: absolute;
            left: 0;
            top: -3px;
          }
        }
      }
    }

    .svg-defs {
      position: absolute;
      width: 0;
      height: 0;
    }
  }

  p {
    margin: 1rem 0;

    &:first-child {
      margin: 0 0 1rem;
    }

    &:last-child {
      margin: 1rem 0 0;
    }
  }

  strong {
    font-weight: $bold;
  }

  ul, ol {
    margin: 1.5rem 0;
    padding: 0;

    &.half-column {
      column-count: 2;

      @include mobile {
        column-count: 1;
      }
    }

    li {
      margin: 0 0 0.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 500;
  }

  h1 {
    font-size: calc-em(62px);

    @include desktop {
      font-size: calc-em(72px);
    }
  }

  h2 {
    font-size: calc-em(52px);

    @include desktop {
      font-size: calc-em(58px);
    }
  }

  h3 {
    font-size: calc-em(42px);
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
}
</style>

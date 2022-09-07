<template lang="pug">
.site-footer
  .container
    .footer-links
      a.btn.btn--links.btn--no-border(
        v-for='(item, index) in footerNav' 
        :key='index'
        :class='index'
        :href='item.url' 
        :target='item.target' 
        rel='noopener'
      )
        span.btn__text {{item.name}}

    .footer-content
      .footer-text
        | © 2022 Ambit. All rights reserved. 
        p Ambit is a trading division of AMICULUM Business Services Limited a company registered in England and Wales. Company number: 6726671. Registered office address: The Boathouse, Clarence Mill, Bollington, SK10 5JZ, UK
      .footer-logo
        img(
          src='@/assets/images/ambit_text_logo.svg'
          :title='footerTitle'
          :alt='footerTitle'
          width='554' 
          height='158'
        )
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  name: 'Footer',
  props: {
		footerTitle: {
			type: String
		},
    siteNav: {
			type: String
		}
	},
  setup(props) {
		let footerNav = ref(null)

		onMounted(async () => {
      await axios.get(props.siteNav).then(res => (
        footerNav.value = res.data.footerNav
			))
    })

		return { footerNav }
	}
}
</script>

<style lang="scss" scoped>
.site-footer {
  display: block;
  padding: 2rem 0;
  background: $white;

  .footer {
    &-links {
      display: block;
      width: 100%;
      margin: 0 auto;
      
      .btn--links {
        margin: 0 15px 0;
        background: transparent;
        padding: 0;
        border-radius: 0px;
        display: inline-block;

        &:first-child {
          margin: 0 15px 0 0;
        }

        &:last-child {
          margin: 0 0 0 0;
        }

        .btn__text {
          font-weight: 400;
          color: $blck;
          transition: all .2s ease-in-out;
          
          &:hover {
            color: $orange;
          }
        }
      }
    }

    &-content {
      display: block;
      width: 100%;
      margin: 20px auto 0;
      
      @include desktop {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;        
      }

      .footer {
        &-text {
          width: 100%;
          font-size: calc-em(14px);
          font-weight: 400;
          color: $blck;
          margin: 0 0 30px;

          @include desktop {
            width: 65%;
            font-size: calc-em(12px);
            padding: 0 90px 0 0;
            margin: 0;
          }
        }

        &-logo {
          width: 125px;
          height: auto;

          @include mobile {
            width: 100px;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
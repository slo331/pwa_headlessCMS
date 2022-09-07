<template lang="pug">
section.landing-banner(:class='class')
  .container
    LogoBanner(:class='class')

</template>

<script>
import LogoBanner from '@/components/atoms/LogoBanner';

export default {
  name: 'LandingBanner',
  components: { LogoBanner },
  props: {
		class: {
			type: String
		}
	},
}
</script>

<style lang="scss">
.landing {
  $p: &;

  &-banner {
    position: relative;
    height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2rem;

    .container {
      position: relative;
    }

    .logo-header {
      display: block;
      margin: 1rem 0 0.5rem;

      @include desktop {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
    }

    .logo-content {
      .subtitle {
        font-weight: 300;
        font-size: calc-em(34px);
        width: 100%;
        margin: 0 auto;
        // white-space: pre-line;

        @include mobile {
          width: 90%;
          font-size: calc-em(28px);
          white-space: unset;
        }
      }
    }

    .logo-links {
      display: block;
      margin: 3rem 0 2rem;
      padding: 0 1rem;

      @include tablet {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      @include desktop {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      .btn--link {
        margin: 1rem 0;

        @include tablet {
          margin: 0 1rem;
        }

        @include desktop {
          margin: 0 1rem;
        }
      }
    }

    &.red {
      .header-list {
        &:hover {
          color: $red;          
        }
      }
    }

    &.orange {
      .header-list {
        &:hover {
          color: $orange;          
        }
      }
    }

    &.green {
      .header-list {
        &:hover {
          color: $green;          
        }
      }
    }

    &.blue {
      .header-list {
        &:hover {
          color: $blue;          
        }
      }
    }
    &.reset {
      .header-list {
        &:hover {
          color: inherit;
        }
      }
    }
  }
}

svg {
  .st0 {
    fill: $white;
  }

  .st2 {
    opacity:.5
  }
}
</style>
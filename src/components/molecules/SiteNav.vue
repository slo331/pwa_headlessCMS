<template lang="pug">
nav.nav
  Transition(name='menu')
    .nav-links(v-show='expand')
      .nav-links__wrap
        ul.links.block.items-center.text-center
          li.links-item(
            v-for='(item, index) in primaryNav' 
            :key='index'
            :class=`{'active': $route.name === item.page}`
          )
            .item-parent(
              :class=`{'active': $route.name === item.page}`
              :data-section='item.page'
            )
              router-link.anchor-item(
                :to='item.url'
                :data-section='item.page') {{item.name}}
                button.btn.btn--subnav(v-if='item.subnav' type='button' aria-label='Subnav')
                  i.icon.icon-arrow-right
            
            .item__sub(v-if='item.subnav')
              .links-sub__container
                .sub-links__wrap
                  ul.sublinks
                    li.sublinks-item(v-for='(sub, subIndex) in item.subnav' :key='subIndex')
                      .item__child
                      router-link.anchor-item(
                        :to='sub.url'
                        :data-section='sub.page') {{sub.name}}

        .links-user(v-if='userNav')
          .user-login
            .user-button.dark Login
          .user-type
            a.user-button.light(
              v-for='(item, index) in userNav'
              :key='index'
              :href='item.url'
              :target='item.target') {{item.name}}
          
</template>

<script>
export default {
  name: 'SiteNav',
	props: {
    primaryNav: {
      type: Object
    },
		userNav: {
			type: Object
		},
    expand: {
      type: Boolean
    }
	}
}
</script>

<style lang="scss" scoped>
.nav {
  $p: &;
  display: block;
  position: absolute;
  width: 300px;
  right: 15px;
  z-index: 1;

  @include mobile {
    width: 100%;
    right: 0;
  }
  
  #{$p}-links {
    // display: none;
    position: relative;
    background: $white;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding: 0 10px 10px;
    box-shadow: 1px 1px 16px 3px rgba(0,0,0,0.10);

    @include mobile {
      box-shadow: none;
    }

    &__wrap {
      background: $white;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      overflow: hidden;

      .links {
        margin: 0;

        &-item {
          border-top: 1px solid $gray1;
          position: relative;
          overflow: hidden;
          display: block;
          margin: 0;

          &.active {
            .item-parent {
              .anchor-item {
                background-color: $red; 
                color: $white;
              }
            }
          }

          &:hover {
            @include desktop {
              .item-parent {
                .anchor-item {
                  color: $white;

                  &:after {
                    width: 100%;
                    opacity: 1; 
                  }
                }
              }
            }
          }
          
          &:first-child {
            border-top: none;
          }

          .item-parent {
            position: relative;
            z-index: 2;

            .anchor-item {
              position: relative;
              padding: 20px 0;
              font-size: calc-em(18px);
              font-weight: 300;
              transition: all .6s ease-in-out;
              z-index: 2;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 1;

              &:after {
                content: '';
                display: block;
                position: absolute; 
                left: 50%; 
                top: 0; 
                width: 0%; 
                height: 100%; 
                background-color: $red; 
                transform: translateX(-50%);
                opacity: 0;
                transition: all .5s ease-in-out;
                z-index: -1;
              }

              .btn--subnav {
                height: 100%;
                position: absolute;
                width: 50px;
                margin: 0;
                min-width: unset;
                padding: 0;
                right: 0;
                border-radius: 0;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                background: $white;
                border: none;
                border-left: 1px solid $gray1;
  
                .btn__text {
                  display: none;
                }

                .icon {
                  display: inline-block;
                  color: $blck;
                  transition: all .2s ease-in-out;
                }

                &:hover{
                  background: $orange;
                  border: 1px solid $orange;

                  .icon {
                    color: $white;
                    transform: rotate(90deg);
                  }
                }

                &.active {
                  background: $gray1;
                  border: 1px solid $gray1;

                  .icon {
                    transform: rotate(90deg);
                  }

                  &:hover {
                    .icon {
                      color: $red;
                    }
                  }
                }
              }
            }
          }

          .item__sub {
            display: none;
            background: $gray1;
            padding: 0 1rem;

            .sublinks {
              margin: 0;
              padding: 10px 0;

              &-item {
                margin: 0;
                padding: 10px 0;

                .item__child {
                  a {
                    display: block;
                    line-height: 1;
                    transition: all .2s ease-in-out;
                  }
                }

                &:hover {
                  .item__child {
                    a {
                      font-weight: $medium;
                      text-shadow: 0 0 1px $blck;
                    }
                  }  
                }
              }
            }
          }
        }
      }

      .links-user {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        overflow: hidden;

        .user-login {
          width: 100%;
          display: block;
          position: relative;
        }

        .user-type {
          width: 100%;
          display: flex;

          .user-button {
            @include desktop {
              &:hover {
                background: $green;
                color: $white;
              }
            }

            &:last-child {
              border-left: 1px solid $gray3;
            }
          }
        }

        .user-button {
          width: 100%;
          display: block;
          padding: 15px 0;
          text-align: center;
          font-size: calc-em(18px);
          font-weight: 300;
          background: $gray1;
          color: $white;
          transition: all .3s ease-in-out;
          position: relative;

          &.light {
            background: $gray2;
          }

          &.dark {
            background: $gray3;
          }
        }
      }
    }    
  }

  // Dropdown menu animation
  .menu-enter-active,
  .menu-leave-active {
    transition: all .8s ease-in-out;
  }
  
  .menu-enter-from,
  .menu-leave-to {
    top: -500px;
  }
  
  .menu-enter-to,
  .menu-leave-from {
    top: 0;
  }
}
</style>
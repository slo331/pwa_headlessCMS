<template lang="pug">
.site-header
		//- .container
		.header-wrap
			.container
				.logo-wrap(@click='gotoHome')
					img(
						src='@/assets/images/ambit_logo.svg'
						:title='headerTitle'
						:alt='headerTitle' 
						width='145' 
						height='41'
					)
				
				.nav-mobile(@click='menuFunc')
					.nav-menu
						.hamburger-menu(ref='hamburgerMenu')
							.nav-line.l1
							.nav-line.l2
							.nav-line.l3

		.container
			SiteNav(
				:primaryNav='primaryNav'
				:userNav='userNav'
				:expand='expand'
			)
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import SiteNav from '@/components/molecules/SiteNav';

export default {
	name: 'Header',
	components: { SiteNav },
	props: {
		headerTitle: {
			type: String
		},
		siteNav: {
			type: String
		}
	},
	setup(props) {
		const router = useRouter()
    // const route = useRoute()
		let navObj = ref(null)
		let primaryNav = ref(null)
		let userNav = ref(null)
		let expand = ref(false)
		let hamburgerMenu = ref(null)

		onMounted(async () => {
      await axios.get(props.siteNav).then(res => (
				navObj.value = res.data,
				primaryNav.value = res.data.primaryNav,
				userNav.value = res.data.userNav
			))
    })

		const gotoHome = () => {
			setTimeout(() => { 
        router.push({
          name: 'home'
        })
      }, 100)
		}

		const menuFunc = () => {
			expand.value = !expand.value;
			if(!hamburgerMenu.value.classList.contains('active')) {
				hamburgerMenu.value.classList.add('active');
				setTimeout(() => {
					hamburgerMenu.value.classList.add('rotate');
				}, 250);
			} else {
				hamburgerMenu.value.classList.remove('rotate');
				setTimeout(() => {
					hamburgerMenu.value.classList.remove('active');
				}, 250);
			}
		}

		return { navObj, primaryNav, userNav, expand, hamburgerMenu, gotoHome, menuFunc }
	}
}
</script>

<style lang="scss" scoped>
.site-header {
	display: block;
	width: 100%;
	background: $gray1;
	position: fixed;
	z-index: 2;

	&.headroom {
		transition: all .8s ease-in-out;

		&.headroom--not-top {
			box-shadow: 1px 1px 20px 5px rgba(0,0,0,0.15);

			@include mobile {
				box-shadow: 1px 1px 15px 5px rgba(0,0,0,0.25);

				.header-wrap {
					padding: 1em 0;
	
					.logo-wrap {
						img {
							width: 100px;
							height: auto;
						}
					}
	
					.nav-menu {  
						.hamburger-menu {
							width: 45px;
							height: 20px;
	
							&.active {
								.nav-line {
									height: 4px;
									background: $gray2;
									transition: all .5s ease-in-out;
				
									&.l1, &.l3 {
										top: 9px;
									}
				
									&.l2 {
										display: none;
									}
								}
				
								&.rotate {
									.l1 {
										transform: rotate(45deg);
									}
				
									.l3 {
										width: 100%;
										transform: rotate(-45deg);
									}
								}
							}
	
							.nav-line {
								width: 45px;
								height: 4px;
								
								&.l1 {
									top: 0;
								}
				
								&.l2 {
									display: block;
									top: 9px;
								}
				
								&.l3 {
									top: 18px;
								}
							}
						}
					}
				}
			}
		}
	}
	
	.header-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: $gray1;
		padding: 1.2em 0;
		position: relative;
		z-index: 2;
		transition: all .5s ease-in-out;

		@include desktop {
			padding: 1.5em 0;
		}

		.container {
			display: flex;
    	align-items: center;

			.logo-wrap {
				cursor: pointer;
				width: auto;
    		display: inline-block;
				
				img {
					width: 120px;
					height: auto;
					transition: all .5s ease-in-out;
				}
			
				@include desktop {   
					img {
						width: 150px;
						height: auto;
					}
				}
			}

			.nav-mobile {
				width: auto;
				display: block;
				// position: relative;
				position: absolute;
    		right: 20px;

				.nav-mobile {  
					display: flex;
					justify-content: flex-end;
					position: relative;
					z-index: 2;
					background: $gray1;
				}
			
				.nav-menu {  
					.hamburger-menu {
						display: block;
						position: relative;
						width: 50px;
						height: 30px;
						cursor: pointer;
						right: 0px;
						transition: all .5s ease-in-out;
			
						&.active {
							.nav-line {
								height: 5px;
								background: $gray2;
								transition: all .5s ease-in-out;
			
								&.l1, &.l3 {
									top: 13px;
								}
			
								&.l2 {
									display: none;
								}
							}
			
							&.rotate {
								.l1 {
									transform: rotate(45deg);
								}
			
								.l3 {
									width: 100%;
									transform: rotate(-45deg);
								}
							}
						}
			
						.nav-line {
							width: 50px;
							height: 5px;
							border-radius: 4px;
							background: $gray2;
							transition: all .5s ease-in-out;
							position: absolute;
							left: 0;
			
							&.l1 {
								top: 0;
							}
			
							&.l2 {
								display: block;
								top: 13px;
							}
			
							&.l3 {
								top: 26px;
							}
						}
					}
				}    
			}
		}
	}
}

.menu-overlay {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.85);
	z-index: 1;
}
</style>
import Image from 'next/image'
import LogoImg from '../../../public/images/logo.svg'
import MadeByImg from '../../../public/images/madeBy.svg'
import Social1Img from '../../../public/images/social1.svg'
import Social2Img from '../../../public/images/social2.svg'
import Social3Img from '../../../public/images/social3.svg'
import styles from './Footer.module.css'
import Subscribe from './subscribe/Subscribe'

function Footer() {
	return (
		<footer className={styles.footer}>
			<Subscribe />
			<div className={styles.container}>
				<div className={styles.footer__wrapper}>
					<div className={styles.footer__logo}>
						<a className={styles.footer__logoImg} href='/'>
							<Image src={LogoImg} alt='logo' />
						</a>
						<div className={styles.footer__text}>Design amazing digital experiences that create more happy in the world.</div>
					</div>
					<nav className={styles.footer__nav}>
						<h4 className={styles.footer__header}>Pages</h4>
						<ul className={styles.footer__list}>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									Home
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									Services
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									About us
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									Extra Sales/Landingpage
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									Free guide
								</a>
							</li>
						</ul>
					</nav>
					<nav className={styles.footer__nav}>
						<h4 className={styles.footer__header}>Contact</h4>
						<ul className={styles.footer__list}>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									+123 456 789
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									hello@happydigital.nl
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									Instagram
								</a>
							</li>
							<li className={styles.footer__item}>
								<a className={styles.footer__link} href='/'>
									LinkedIn
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className={styles.footer__udnerline}>
					<div className={styles.footer__madeBy}>
						<a href='/'>
							Made with a
							<Image className={styles.footer__madeByImg} src={MadeByImg} alt='logo' />
							by<b> HappyDigital</b>
						</a>
					</div>
					<ul className={styles.footer__socials}>
						<li className={styles.footer__social}>
							<a href='/'>
								<Image src={Social1Img} alt='in' />
							</a>
						</li>
						<li className={styles.footer__social}>
							<a href='/'>
								<Image src={Social2Img} alt='facebook' />
							</a>
						</li>
						<li className={styles.footer__social}>
							<a href='/'>
								<Image src={Social3Img} alt='dribble' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer

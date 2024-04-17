import Image from 'next/image'
import MentorImg from '../../../public/images/photo.png'
import TargetImg from '../../../public/images/target.svg'
import WaveImg from '../../../public/images/wave.svg'
import styles from './Hero.module.css'

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<Image className={styles.hero__decorImg} src={WaveImg} alt='decoration-element' />
				<div className={styles.hero__wrapper}>
					<div>
						<div className={styles.hero__tagline}>Proven strategies backed by science for success.</div>
						<h1 className={styles.hero__header}>Live life at the full potential</h1>
						<p className={styles.hero__info}>
							I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it
							is begin using backed by science. Wanna transform your life?
						</p>
						<button className={styles.hero__btn}>Get your free guide now</button>
					</div>
					<div className={styles.hero__photo}>
						<div className={styles.hero__success}>
							<Image className={styles.hero__target} src={TargetImg} alt='target' />
							<div>
								<div className={styles.hero__accuracy}>100%</div>
								<div className={styles.hero__rate}>Success rate this year</div>
							</div>
						</div>
						<Image src={MentorImg} alt='mentor' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

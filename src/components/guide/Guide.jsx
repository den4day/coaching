import Image from 'next/image'
import GuideImg from '../../../public/images/guide.png'
import GuideMessageImg from '../../../public/images/guideMessage.png'
import styles from './Guide.module.css'

function Guide() {
	return (
		<section className={styles.guide}>
			<div className={styles.container}>
				<div className={styles.guide__inner}>
					<div className={styles.guide__text}>
						<h2 className={styles.guide__header}>Don’t miss out on my ‘Live life at the full potential’ free guide</h2>
						<div className={styles.guide__info}>
							<p className={styles.guide__infoPart}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
							</p>
							<p className={styles.guide__infoPart}>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
								quasi architecto beatae vitae dicta sunt explicabo.
							</p>
						</div>
						<button className={styles.guide__btn}>Get your free guide now</button>
					</div>
					<div className={styles.guide__book}>
						<div className={styles.guide__circle}>
							<a className={styles.guide__link} href='/'>
								Free guide!
							</a>
						</div>
						<h2 className={styles.guide__title}>Are you ready to transform your life?</h2>
						<div className={styles.guide__line}>
							<Image className={styles.guide__iconImg} src={GuideMessageImg} alt='message-icon' />
							<div>
								<div className={styles.guide__subTitle}>
									<a className={styles.guide__link} href='/'>
										Ready to start? Let's talk!
									</a>
								</div>
								<div className={styles.guide__string}>Lorem ipsum dolor sit, consectetur adipiscing elit.</div>
							</div>
						</div>
						<Image className={styles.guide__bgImg} src={GuideImg} alt='background' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Guide

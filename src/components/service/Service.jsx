import Image from 'next/image'
import BookImg from '../../../public/images/book.svg'
import MessageImg from '../../../public/images/message.svg'
import PeopleImg from '../../../public/images/people.svg'
import WaveImg from '../../../public/images/wave.svg'
import styles from './Service.module.css'

function Service() {
	return (
		<section className={styles.service}>
			<div className={styles.container}>
				<Image className={styles.service__decorImg} src={WaveImg} alt='decoration-element' />

				<div className={styles.service__text}>
					<h2 className={styles.service__header}>I can help you in these particular areas.</h2>

					<div className={styles.service__info}>
						<p className={styles.service__infoPart}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
						</p>
						<p className={styles.service__infoPart}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
							quasi architecto beatae vitae dicta sunt explicabo.
						</p>
					</div>
				</div>

				<div className={styles.service__list}>
					<div className={styles.service__item}>
						<Image className={styles.service__iconImg} src={BookImg} alt='book-icon' />
						<h3 className={styles.service__title}>1:1 Coaching</h3>
						<p className={styles.service__itemInfo}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
						</p>
					</div>
					<div className={styles.service__item}>
						<Image className={styles.service__iconImg} src={MessageImg} alt='message-icon' />
						<h3 className={styles.service__title}>Consultation</h3>
						<p className={styles.service__itemInfo}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
						</p>
					</div>
					<div className={styles.service__item}>
						<Image className={styles.service__iconImg} src={PeopleImg} alt='people-icon' />
						<h3 className={styles.service__title}>Group Coaching Sessions</h3>
						<p className={styles.service__itemInfo}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service

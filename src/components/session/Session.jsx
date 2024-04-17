import Image from 'next/image'
import AvatarImg from '../../../public/images/avatar.png'
import MeetImg from '../../../public/images/meet.svg'
import styles from './Session.module.css'

function Session() {
	return (
		<section className={styles.session}>
			<div className={styles.container}>
				<div className={styles.session__inner}>
					<div className={styles.session__text}>
						<h2 className={styles.session__heading}>Get 15-Minutes Complimentary online session.</h2>
						<div className={styles.session__info}>Limited Period Offer. Claim Now.</div>
						<button className={styles.session__btn}>Book now</button>
					</div>
					<div className={styles.session__avatar}>
						<a className={styles.session__btnMeet} href='/'>
							<Image className={styles.session__meetImg} src={MeetImg} alt='google-meet' />
							<div>Meet</div>
						</a>
						<Image className={styles.session__avatarImg} src={AvatarImg} alt='avatar' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Session

import Image from 'next/image'
import CursorImg from '../../../public/images/pointer.svg'
import starImg from '../../../public/images/star.svg'
import starBgImg from '../../../public/images/starBg.svg'
import UserImg1 from '../../../public/images/user1.png'
import UserImg2 from '../../../public/images/user2.png'
import UserImg3 from '../../../public/images/user3.png'
import styles from './Review.module.css'

function Review() {
	return (
		<section className={styles.review}>
			<div className={styles.container}>
				<h2 className={styles.header}>Hear out what my clients say about me.</h2>
				<div className={styles.review__list}>
					<a className={styles.review__item} href='/'>
						<div className={styles.review__text}>
							"I gained so much <b>confidence</b> in my ability to connect and deepen my relationships with people."
						</div>
						<div className={styles.review__name}>Jane</div>
						<Image className={styles.review__userImg} src={UserImg1} alt='user-avatar' />
						<div className={styles.review__rating}>
							<Image className={styles.review__starImg} src={starImg} alt='star' />
							<Image className={styles.review__starImg} src={starImg} alt='star' />
							<Image className={styles.review__starImg} src={starImg} alt='star' />
							<Image className={styles.review__starImg} src={starImg} alt='star' />
							<Image className={styles.review__starImg} src={starImg} alt='star' />
						</div>
						<Image className={styles.review__cursorImg} src={CursorImg} alt='cursor-pointer' />
					</a>
					<a className={styles.review__item} href='/'>
						<div className={styles.review__text}>"I gained so much confidence in my ability to connect and deepen my relationships with people."</div>
						<div className={styles.review__name}>Catherine</div>
						<Image className={styles.review__userImg} src={UserImg2} alt='user-avatar' />
						<div className={styles.review__rating}>
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
						</div>
					</a>
					<a className={styles.review__item} href='/'>
						<div className={styles.review__text}>"I gained so much confidence in my ability to connect and deepen my relationships with people."</div>
						<div className={styles.review__name}>Jane</div>
						<Image className={styles.review__userImg} src={UserImg3} alt='user-avatar' />
						<div className={styles.review__rating}>
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
							<Image className={styles.review__starImg} src={starBgImg} alt='star' />
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Review

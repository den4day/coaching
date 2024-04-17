import Image from 'next/image'
import BlogImg1 from '../../../public/images/blog1.png'
import BlogImg2 from '../../../public/images/blog2.png'
import BlogImg3 from '../../../public/images/blog3.png'
import styles from './Blog.module.css'

function Blog() {
	return (
		<section className={styles.blog}>
			<div className={styles.container}>
				<h2 className={styles.blog__header}>Stay Motivated, read the weekly blog articles.</h2>
				<div className={styles.blog__list}>
					<article className={styles.blog__item}>
						<div>
							<Image className={styles.blog__blogImg} src={BlogImg1} alt='blog' />
						</div>
						<div className={styles.blog__info}>
							<h3 className={styles.blog__title}>
								<a href='/'>Balancing your love and work life.</a>
							</h3>
							<p className={styles.blog__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
							</p>
						</div>
					</article>
					<article className={styles.blog__item}>
						<div>
							<Image className={styles.blog__blogImg} src={BlogImg2} alt='blog' />
						</div>
						<div className={styles.blog__info}>
							<h3 className={styles.blog__title}>
								<a href='/'>A short break from Social Media is important.</a>
							</h3>
							<p className={styles.blog__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
							</p>
						</div>
					</article>
					<article className={styles.blog__item}>
						<div>
							<Image className={styles.blog__blogImg} src={BlogImg3} alt='blog' />
						</div>
						<div className={styles.blog__info}>
							<h3 className={styles.blog__title}>
								<a href='/'>How to be 1% Better Every Day</a>
							</h3>
							<p className={styles.blog__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
							</p>
						</div>
					</article>
				</div>
				<button className={styles.blog__btn}>Read more blogs</button>
			</div>
		</section>
	)
}

export default Blog

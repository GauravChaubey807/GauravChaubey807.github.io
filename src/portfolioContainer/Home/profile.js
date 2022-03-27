import React from "react";
import Typical from "react-typical";
import './profile.css'

export default function Profile(){
	return (
		<div className={"profile-container"}>
			<div className={"profile-parent"}>
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href={'https://www.facebook.com'} target={'_blank'} rel={'noreferrer'}>
								<i className="fa fa-facebook-square"/>
							</a>
							<a href={'https://plus.google.com'} target={'_blank'} rel={'noreferrer'}>
								<i className="fa fa-google-plus-square"/>
							</a>
							<a href={'https://www.instagram.com'} target={'_blank'} rel={'noreferrer'}>
								<i className="fa fa-instagram"/>
							</a>
							<a href={'https://www.youtube.com'} target={'_blank'} rel={'noreferrer'}>
								<i className="fa fa-youtube-square"/>
							</a>
							<a href={'https://www.twitter.com'} target={'_blank'} rel={'noreferrer'}>
								<i className="fa fa-twitter"/>
							</a>
						</div>
					</div>

					<div className="profile-details-name">
						<span className="primary-title">
							{" "}
							Hello, I'm <span className="highlighted-text">Gaurav</span>
						</span>
					</div>

					<div className="profile-details-role">
						<span className="primary-text">
							{" "}
							<h1>
								{" "}
								<Typical
								loop = {Infinity}
								steps={[
									"Enthusiastic Dev",
									1500,
									"Full Stack Developer",
									1500,
									"MERN Stack Dev",
									1500,
									"Cross Platform Dev",
									1500,
									"React/ React Native Dev",
									1500,
								]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building application with front and backend operations.
							</span>
						</span>
					</div>

					<div className="profile-options">
						<button className="btn primary-btn">
							Hire Me{" "}
						</button>
						<a href={'GauravChaubey.pdf'} target='_blank' rel={'noreferrer'}>
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>

				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>

			</div>
		</div>
	)
}

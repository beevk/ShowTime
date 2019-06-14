import React from 'react';
import './index.css';

const CreateIcon = (props: Object) => {
	if (props.iconname === 'github') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60">
				<path
					fill="#1F84F7"
					d="M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z"
				/>
			</svg>
		);
	} else if (props.iconname === 'linkedin') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60">
				<path
					fill="#0077B5"
					d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
				/>
			</svg>
		);
	} else if (props.iconname === 'twitter') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="60" width="60">
				<path
					fill="#1AB2E8"
					d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
				/>
			</svg>
		);
	} else if (props.iconname === 'email') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="20" width="20">
				<path
					fill="#fff"
					d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
				/>
			</svg>
		);
	} else if (props.iconname === 'phone') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="20" width="20">
				<path
					fill="#fff"
					d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
				/>
			</svg>
		);
	} else return <div />;
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="center">
					<p>Wanna work together?</p>
					<p>I'm currently looking for new opportunities to work on. Lets discuss if you have one.</p>
					<a href="mailto:beevk.singh@gmail.com" target="_blank" rel="noopener noreferrer">
						<button>Drop a Mail</button>
					</a>
				</div>

				<div className="extraInfo">
					<div className="left">
						<h4>Contact:</h4>
						<span className="contacts">
							<CreateIcon className="email" iconname="email" />
							<span className="contact">beevk.singh@gmail.com</span>
						</span>
						<span className="contacts">
							<CreateIcon className="phone" iconname="phone" />
							<span className="contact">+977 - 98 104 71235</span>
						</span>
					</div>

					<div className="right">
						<h4>Connect with me</h4>
						<a href="https://github.com/beevk" rel="noopener noreferrer" target="_blank" className="social">
							<CreateIcon className="github" iconname="github" />
						</a>
						<div className="srOnly">Github</div>

						<a
							href="https://linkedin.com/in/beevk"
							rel="noopener noreferrer"
							target="_blank"
							className="social"
						>
							<CreateIcon className="linkedin" iconname="linkedin" />
						</a>
						<div className="srOnly">LinkedIn</div>
						<a
							href="https://twitter.com/beevksingh"
							rel="noopener noreferrer"
							target="_blank"
							className="social"
						>
							<CreateIcon className="twitter" iconname="twitter" />
						</a>
						<div className="srOnly">Twitter</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero1.mp4" autoPlay loop muted />
			<Container>
				<MainHeading>Online Health Booking System🏥</MainHeading>
				<HeroText>
					simply define your services,booking for?, your availability, and we will get back to you in few minutes either by sms or email by making bookings 2️⃣4️⃣ ⁄ 7️⃣.
				</HeroText>
				<ButtonWrapper>
					<Link to="/login">
						<Button>Get Started</Button>
					</Link>
	
					<HeroButton> <Link to="/pricing">Find More
					 </Link>
					</HeroButton>
				
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;

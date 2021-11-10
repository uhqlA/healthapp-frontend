import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero1.mp4" autoPlay loop muted />
			<Container>
				<MainHeading>Online Health Booking System</MainHeading>
				<HeroText>
					simply define your services,booking for?, your availability, and we will get back to you in few minutes either by sms or email by making bookings 24/7.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					

					
					<HeroButton> <Link to="/feature">Find More
					 </Link>
					</HeroButton>
				
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;

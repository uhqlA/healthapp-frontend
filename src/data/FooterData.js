import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Home', 'Features', 'Pricing', 'Login'],
	},
	{
		title: 'Features',
		links: ['Client Information', 'Accept Online', 'Social Media', 'Video Meeting'],
	},
	{
		title: 'Social Media',
		links: ['Facebook', 'Telegram', 'Instagram', 'Twitter'],
	},
	{
		title: 'Legal',
		links: ['Location', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];

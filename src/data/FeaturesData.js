import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrVmMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="4rem" color="navy"/>;

export const featuresData = [
	{
		name: 'Best Security',
		description: 'We offer the best data security to our Patients, which makes us stand out',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Ease of Use',
		description: 'Our system is easy to book, and application can be done within the short period of time. We give patient assistance as easy as we can to make sure they do the correct booking',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Time to time update, screening of the system to make sure that the booking system is convenient to and working correctly. No user challenge to our patients',
		icon: iconStyle(GrVmMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need help. Visit Contact Us page to get to us.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Our Prices',
		description: 'Our prices do vary from your booking period. Visit PRICES Page for more information',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Patient Security',
		description:
			'Data is highly protected from end to end user, no data breach cause health data for patient is very confidential',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];

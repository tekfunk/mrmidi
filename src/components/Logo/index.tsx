'use client';
import React from "react";


export default function Logo(props: LogoProps) {
  const { color } = props;


  return (
    <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20" className="item" width={80} fill="black">
    <path d="M178.78,163.13c7.14,7.79,10.71,20.77,10.71,38.94v106.11c0,5.41-2.71,8.11-8.11,8.11h-11.36c-5.41,0-8.11-2.7-8.11-8.11
			V202.72c0-9.74-1.84-16.6-5.52-20.61c-3.68-4-9.95-6-18.82-6c-4.33,0-9.09,0.32-14.28,0.97c2.16,6.49,3.25,15.04,3.25,25.64
			v105.46c0,5.41-2.71,8.11-8.11,8.11h-11.36c-5.41,0-8.11-2.7-8.11-8.11V202.72c0-9.74-1.84-16.6-5.52-20.61
			c-3.68-4-9.95-6-18.82-6c-3.46,0-7.14,0.22-11.03,0.65v131.42c0,5.41-2.71,8.11-8.11,8.11H44.11c-5.41,0-8.11-2.7-8.11-8.11
			V164.42c0-4.75,2.48-7.68,7.46-8.76c15.36-2.81,27.79-4.22,37.32-4.22c13.63,0,23.9,2.6,30.83,7.79
			c10.6-5.19,21.85-7.79,33.75-7.79C160.5,151.44,171.64,155.34,178.78,163.13z M241.09,154.69c17.3-2.6,35.7-3.89,55.17-3.89
			c17.09,0,30.55,1.74,40.4,5.19c9.84,3.46,17.04,8.98,21.58,16.55c4.54,7.58,6.81,17.85,6.81,30.83c0,5.41-2.71,8.11-8.11,8.11
			h-11.36c-5.41,0-8.11-2.7-8.11-8.11c0-10.17-3.14-17.36-9.41-21.58c-6.28-4.22-16.87-6.33-31.8-6.33
			c-10.38,0-22.07,0.44-35.05,1.3v131.42c0,5.41-2.71,8.11-8.11,8.11h-11.36c-5.41,0-8.11-2.7-8.11-8.11V163.45
			C233.62,158.7,236.11,155.77,241.09,154.69z M738.55,163.13c7.14,7.79,10.71,20.77,10.71,38.94v106.11c0,5.41-2.71,8.11-8.11,8.11
			h-11.36c-5.41,0-8.11-2.7-8.11-8.11V202.72c0-9.74-1.84-16.6-5.52-20.61c-3.68-4-9.95-6-18.82-6c-4.33,0-9.09,0.32-14.28,0.97
			c2.16,6.49,3.25,15.04,3.25,25.64v105.46c0,5.41-2.71,8.11-8.11,8.11h-11.36c-5.41,0-8.11-2.7-8.11-8.11V202.72
			c0-9.74-1.84-16.6-5.52-20.61c-3.68-4-9.95-6-18.82-6c-3.46,0-7.14,0.22-11.03,0.65v131.42c0,5.41-2.71,8.11-8.11,8.11h-11.36
			c-5.41,0-8.11-2.7-8.11-8.11V164.42c0-4.75,2.48-7.68,7.46-8.76c15.36-2.81,27.79-4.22,37.32-4.22c13.63,0,23.9,2.6,30.83,7.79
			c10.6-5.19,21.85-7.79,33.75-7.79C720.27,151.44,731.41,155.34,738.55,163.13z M924.82,299.42v8.76c0,5.41-2.71,8.11-8.11,8.11
			h-115.2c-5.41,0-8.11-2.7-8.11-8.11v-8.76c0-5.4,2.7-8.11,8.11-8.11h43.81V178.7h-33.1c-5.41,0-8.11-2.7-8.11-8.11v-8.44
			c0-5.4,2.7-8.11,8.11-8.11h52.57c5.4,0,8.11,2.71,8.11,8.11V291.3h43.81C922.11,291.3,924.82,294.01,924.82,299.42z M872.9,77.78
			V99.2c0,5.41-2.71,8.11-8.11,8.11h-21.09c-5.41,0-8.11-2.7-8.11-8.11V77.78c0-5.4,2.7-8.11,8.11-8.11h21.09
			C870.19,69.67,872.9,72.38,872.9,77.78z M1107.19,310.13c-15.58,6.27-31.7,9.41-48.35,9.41c-22.72,0-41.54-6.86-56.46-20.61
			c-14.93-13.74-22.39-34.99-22.39-63.77c0-28.77,7.46-50.02,22.39-63.77c14.93-13.74,33.75-20.61,56.46-20.61
			c8,0,16.33,0.87,24.99,2.6V81.03c0-5.4,2.7-8.11,8.11-8.11h11.36c5.4,0,8.11,2.71,8.11,8.11v222.29
			C1111.41,306.34,1110,308.62,1107.19,310.13z M1062.08,174.81c-16.23,0-29.32,4.6-39.27,13.79c-9.95,9.2-14.93,24.72-14.93,46.57
			c0,20.77,4.59,35.81,13.79,45.11c9.19,9.3,21.58,13.95,37.16,13.95c8.22,0,16.55-0.97,24.99-2.92V177.08
			C1075.39,175.57,1068.14,174.81,1062.08,174.81z M1298,299.42v8.76c0,5.41-2.71,8.11-8.11,8.11h-115.2c-5.41,0-8.11-2.7-8.11-8.11
			v-8.76c0-5.4,2.7-8.11,8.11-8.11h43.81V178.7h-33.1c-5.41,0-8.11-2.7-8.11-8.11v-8.44c0-5.4,2.7-8.11,8.11-8.11h52.57
			c5.4,0,8.11,2.71,8.11,8.11V291.3h43.81C1295.29,291.3,1298,294.01,1298,299.42z M1246.08,77.78V99.2c0,5.41-2.71,8.11-8.11,8.11
			h-21.09c-5.41,0-8.11-2.7-8.11-8.11V77.78c0-5.4,2.7-8.11,8.11-8.11h21.09C1243.37,69.67,1246.08,72.38,1246.08,77.78z"/>
    </svg>
    </React.Fragment>
  );
}

interface LogoProps {
  color: string;
}
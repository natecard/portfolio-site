import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SpeedInsights />
		<RouteSwitch />
	</React.StrictMode>,
);

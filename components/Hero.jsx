"use client";

import { ArrowDown, Play } from "lucide-react";
import { useState } from "react";
import "./Hero.css";

export default function Hero() {
	const [pointer, setPointer] = useState({ x: 0, y: 0 });
	const handleMouseMove = (event) => {
		setPointer({
			x: (event.clientX / window.innerWidth - 0.5) * 2,
			y: (event.clientY / window.innerHeight - 0.5) * 2,
		});
	};

	return (
		<section className="hero" onMouseMove={handleMouseMove}>
			<div className="hero-background" style={{ transform: `translate3d(${pointer.x * 5}px, ${pointer.y * 3}px, 0) scale(1.03)` }} />
			<div className="hero-left-overlay" />
			<div className="hero-noise" />
			<div className="hero-copy">
				<div className="hero-label"><span className="hero-label-line" /><span>METEOROID STONE CLADDING</span></div>
				<h1>Transform<br />Your Space<br /><em>with Luxury</em><br />Stone Cladding</h1>
				<p>Transforming spaces with precision-cut CNC stone cladding and bespoke interior designs.</p>
				<div className="hero-actions">
					<a href="/collections" className="hero-primary-btn">EXPLORE COLLECTIONS</a>
					<a href="#cnc" className="hero-video-btn"><span className="hero-play"><Play size={13} fill="currentColor" /></span>WATCH VIDEO</a>
				</div>
			</div>
			<div className="hero-stats">
				<div className="hero-stat"><div className="hero-stat-number">500+</div><div className="hero-stat-label">PROJECTS COMPLETED</div></div>
				<div className="hero-stat hero-stat-bordered"><div className="hero-stat-number">100%</div><div className="hero-stat-label">SATISFACTION</div></div>
				<div className="hero-stat hero-stat-bordered"><div className="hero-stat-number">5 <span className="hero-star">★</span></div><div className="hero-stat-label">REVIEWS</div></div>
				<div className="hero-stat hero-stat-description"><p>Pioneering CNC Stone Cladding innovation with precise implementation from Kishangarh, Rajasthan.</p></div>
			</div>
			<div className="hero-scroll"><div className="hero-scroll-icon"><ArrowDown size={16} strokeWidth={1.5} /></div><span>Scroll To Explore</span></div>
			<div className="hero-location">18° 31' N&nbsp;&nbsp;73° 51' E</div>
		</section>
	);
}


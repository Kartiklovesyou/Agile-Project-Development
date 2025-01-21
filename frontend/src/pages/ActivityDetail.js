import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ActivityDetail() {
	const location = useLocation(); // Get the location object (which contains the state passed from the previous page)
	const navigate = useNavigate();
	const { activity } = location.state || {}; // Destructure activity object from the state

	useEffect(() => {
		if (!activity) {
			navigate('/dashboard'); // If no activity data is passed, redirect to Dashboard
		}
	}, [activity, navigate]);

	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<header className="bg-gray-800 text-white py-6 px-8">
				<h1 className="text-4xl font-bold">Shipment Details</h1>
				<p className="text-xl mt-2">Shipment Deltail Text</p>
			</header>
			<div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-3xl font-bold text-gray-700 mb-6">Activity Details</h2>

				{/* Activity Details */}
				<div className="mb-4">
					<h3 className="text-xl font-semibold text-gray-700">Shipment ID: {activity?.shipmentId}</h3>
				</div>
				<div className="mb-4">
					<p className="text-lg text-gray-600">
						<strong>Origin:</strong> {activity?.origin}
					</p>
				</div>
				<div className="mb-4">
					<p className="text-lg text-gray-600">
						<strong>Destination:</strong> {activity?.destination}
					</p>
				</div>
				<div className="mb-4">
					<p className="text-lg text-gray-600">
						<strong>Status:</strong>
						<span className={
							`text-${activity?.status === 'Delivered' ? 'green'
								: activity?.status === 'Delayed' ? 'red'
									: 'yellow'
							}-500`
						}>
							{activity?.status}
						</span>
					</p>
				</div>
				<div className="mb-4">
					<p className="text-lg text-gray-600">
						<strong>Date:</strong> {activity?.date}
					</p>
				</div>

				{/* Back Button */}
				<div className="mt-8 text-center">
					<button
						onClick={() => navigate('/dashboard')}
						className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
					>
						Back to Dashboard
					</button>
				</div>
			</div>
		</div>
	);
}

export default ActivityDetail;

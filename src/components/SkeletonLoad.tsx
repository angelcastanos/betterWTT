/**
*@fileoverview Skeleton load component
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

/**
 * Shows a skeleton load while the data is being fetched
 * @returns {JSX.Element} JSX Element
 */
export const SkeletonLoad = () => {
	return (
		<>
			{Array(10)
				.fill(0)
				.map((_, i) => (
					<SkeletonCard key={i} />
				))}
		</>
	);
};

const SkeletonCard = () => {
	return (
		<div className="skeleton-card">
			<div className="skeleton-card-body">
				<div className="skeleton-card-img" />
				<div className="skeleton-card-title" />
				<div className="skeleton-card-description" />
			</div>
		</div>
	);
};

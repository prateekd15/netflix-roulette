import styles from './SortControl.module.css';

function SortControl({ sortFilters, selectedFilter, onSelect }) {
	const handleChange = (event) => {
		console.log("SortControl handleChange called with value ", event);
		onSelect(event.target.value);
	  };

	return (
    <div className={styles.sort_control_outer_select}>
		<span className={styles.sort_control_label}>SORT BY</span>
		<label className={styles.select}>
			<select
				className={styles.sort_control_select}
				id="sort_control_select"
				onChange={handleChange}
				value={selectedFilter}>
					{sortFilters.map((sort) => (
					<option key={sort} value={sort}>
						{sort}
					</option>
				))}
			</select>
		</label>
    </div>
  );
}

export default SortControl;
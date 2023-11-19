import './SortControl.css';

function SortControl({ sortFilters, selectedFilter, onSelect }) {
	const handleChange = (event) => {
		console.log("SortControl handleChange called with value ", event);
		onSelect(event.target.value);
	  };

	return (
    <div className="sort-control_outer-select">
		<span className='sort-control_label'>SORT BY</span>
		<label className="select">
			<select
				id="sort-control_select"
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
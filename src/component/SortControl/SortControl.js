import './SortControl.css';

function SortControl({ sortFilters, selectedFilter, onSelect }) {
	const handleChange = (event) => {
		const selectedGenre = event.target.value;
		onSelect(selectedGenre);
	  };

	return (
    <div className="sort-control_outer-select float-right">
		<span className='sort-control_label'>SORT BY</span>
		<label className="sort-control__select">
			<select
				id="sort-control_select"
				onChange={handleChange}>
					{sortFilters.map((sort) => (
					<option key={sort} value={selectedFilter}>
						{sort}
					</option>
				))}
			</select>
		</label>
    </div>
  );
}

export default SortControl;
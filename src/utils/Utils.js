export const convertToHoursAndMinutes = minutes => {
    if (typeof minutes !== 'number' || minutes < 0) {
      return '';
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    const hoursText = hours > 0 ? `${hours}h` : '';
    const minutesText = remainingMinutes > 0 ? `${remainingMinutes}m` : '';
  
    return `${hoursText} ${minutesText}`.trim();
  }

  export const setParamsInURL = (id, searchQuery, activeGenre, selectedFilter, offset) => {
    const params = new URLSearchParams();
        if (searchQuery) params.set('query', searchQuery);
        if (activeGenre) params.set('genre', activeGenre);
        if (selectedFilter) params.set('sortBy', selectedFilter);
        params.set('offset', offset.toString());
        if (id) {
            window.history.pushState({}, '', `/${id}?${params.toString()}`);
        } else {
            window.history.pushState({}, '', `/?${params.toString()}`);
        }
}

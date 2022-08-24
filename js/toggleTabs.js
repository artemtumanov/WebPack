function toggleTabs(clickSelector, tabOn, tabOff) {
    clickSelector.addEventListener('click', () => {
        tabOn.style.display = 'block';
        tabOff.style.display = 'none';
    }); 
}
export default toggleTabs;

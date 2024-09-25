
const uicItems = document.querySelectorAll('.uic-item');
const output = document.querySelector('.selected-output');


let selectedItems = [];


uicItems.forEach(item => {
  item.addEventListener('click', function() {
    const itemText = this.textContent;
 
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
      selectedItems = selectedItems.filter(selected => selected !== itemText);
    } else {
      this.classList.add('selected');
      selectedItems.push(itemText);
    }

    if (selectedItems.length > 0) {
      output.textContent = `Selected Items: ${selectedItems.join(', ')}`;
    } else {
      output.textContent = 'Selected Items: None';
    }
  });
});

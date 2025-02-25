
let ratioValue = 1;
let isRatioSet = false;

const addTextBoxBtn = document.getElementById('addTextBoxBtn');
const setRatioBtn = document.getElementById('setRatioBtn');
const scaleValueBtn = document.getElementById('scaleValueBtn');
const clearBtn = document.getElementById('clearBtn');
const inputContainer = document.getElementById('inputContainer');

addTextBoxBtn.addEventListener('click', () => {
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    const label = document.createElement('input');
    label.type = 'text';
    label.placeholder = 'Label';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Value';

    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    inputContainer.appendChild(inputGroup);
});

setRatioBtn.addEventListener('click', () => {
    isRatioSet = true;
    const ratio = prompt('Enter the ratio (e.g., 2 for double):');
    ratioValue = parseFloat(ratio);
    if (isNaN(ratioValue) || ratioValue <= 0) {
        alert('Please enter a valid ratio.');
        isRatioSet = false; // Reset if invalid
        return;
    }
    
    // Disable further editing
    const inputs = document.querySelectorAll('.input-group input[type="text"]:nth-child(2)');
    inputs.forEach(input => {
        input.disabled = true;
    });
});

scaleValueBtn.addEventListener('click', () => {
    if (!isRatioSet) {
        alert('Please set a ratio first.');
        return;
    }

    const inputs = document.querySelectorAll('.input-group input[type="text"]:nth-child(2)');
    inputs.forEach(input => {
        const originalValue = input.value;
        const newValue = (originalValue ? parseFloat(originalValue) : 0) * ratioValue;
        input.value = newValue.toFixed(2);
    });
});

// Clear all input boxes and reset settings
clearBtn.addEventListener('click', () => {
    inputContainer.innerHTML = ''; // Clear all input boxes
    isRatioSet = false; // Reset ratio state
    ratioValue = 1; // Reset ratio value
    
    // Enable all input fields in case they were disabled
    const inputs = document.querySelectorAll('.input-group input[type="text"]:nth-child(2)');
    inputs.forEach(input => {
        input.disabled = false;
    });
});

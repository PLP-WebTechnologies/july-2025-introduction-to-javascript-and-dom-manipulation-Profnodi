// ==============================================
// PART 1: JAVASCRIPT BASICS - Variables, Conditionals
// ==============================================

// Variable declarations with different data types
let userName = "Guest"; // string
let userAge = 0; // number
let isAdult = false; // boolean
const LEGAL_AGE = 18; // constant

/**
 * Checks if user is adult based on input age
 * Demonstrates conditionals and user input
 */
function checkAge() {
    // Get user input from HTML element
    const ageInput = document.getElementById('ageInput');
    const ageResult = document.getElementById('ageResult');
    
    // Basic input validation
    if (!ageInput.value || isNaN(ageInput.value)) {
        ageResult.textContent = "Please enter a valid age!";
        ageResult.style.color = "#e53e3e";
        return;
    }
    
    userAge = parseInt(ageInput.value);
    
    // Conditional logic with if/else
    if (userAge < 0) {
        ageResult.textContent = "Age cannot be negative!";
        ageResult.style.color = "#e53e3e";
    } else if (userAge < LEGAL_AGE) {
        ageResult.textContent = `You are ${userAge} years old - You are a minor.`;
        ageResult.style.color = "#d69e2e";
        isAdult = false;
    } else if (userAge >= 18 && userAge < 65) {
        ageResult.textContent = `You are ${userAge} years old - You are an adult.`;
        ageResult.style.color = "#38a169";
        isAdult = true;
    } else {
        ageResult.textContent = `You are ${userAge} years old - You are a senior.`;
        ageResult.style.color = "#3182ce";
        isAdult = true;
    }
    
    // Using ternary operator for quick conditional assignment
    const statusMessage = isAdult ? "Welcome adult user!" : "Parental guidance recommended";
    console.log(statusMessage);
}

// ==============================================
// PART 2: JAVASCRIPT FUNCTIONS - Reusability
// ==============================================

/**
 * Calculates total price with tax
 * @param {number} price - The base price
 * @param {number} quantity - Quantity of items
 * @param {number} taxRate - Tax rate (default 0.08 for 8%)
 * @returns {number} Total price including tax
 */
function calculateTotalPrice(price, quantity = 1, taxRate = 0.08) {
    const subtotal = price * quantity;
    const taxAmount = subtotal * taxRate;
    return subtotal + taxAmount;
}

/**
 * Formats a string with capitalization and adds excitement
 * @param {string} text - The text to format
 * @returns {string} Formatted text
 */
function formatString(text) {
    if (!text) return "Please provide some text!";
    
    // Capitalize first letter and add exclamation
    const capitalized = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return `${capitalized}!!!`;
}

/**
 * Demonstrates function usage by calculating and displaying total
 */
function calculateTotal() {
    const priceInput = document.getElementById('priceInput');
    const quantityInput = document.getElementById('quantityInput');
    const totalResult = document.getElementById('totalResult');
    
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value) || 1;
    
    if (isNaN(price) || price <= 0) {
        totalResult.textContent = "Please enter a valid price!";
        totalResult.style.color = "#e53e3e";
        return;
    }
    
    const total = calculateTotalPrice(price, quantity);
    totalResult.textContent = `Total (including 8% tax): $${total.toFixed(2)}`;
    totalResult.style.color = "#38a169";
}

/**
 * Demonstrates string formatting function
 */
function formatAndDisplay() {
    const stringInput = document.getElementById('stringInput');
    const formatResult = document.getElementById('formatResult');
    
    const formattedText = formatString(stringInput.value);
    formatResult.textContent = formattedText;
    formatResult.style.color = "#3182ce";
}

// ==============================================
// PART 3: JAVASCRIPT LOOPS - Repetition
// ==============================================

/**
 * Generates multiplication table using nested for loops
 * Demonstrates nested loops and DOM manipulation
 */
function generateMultiplicationTable() {
    const tableContainer = document.getElementById('multiplicationTable');
    tableContainer.innerHTML = '';
    
    // Create header row
    let tableHTML = '<div class="table-header">×</div>';
    for (let i = 1; i <= 5; i++) {
        tableHTML += `<div class="table-header">${i}</div>`;
    }
    
    // Nested for loops to generate table
    for (let i = 1; i <= 5; i++) {
        tableHTML += `<div class="table-header">${i}</div>`;
        for (let j = 1; j <= 5; j++) {
            tableHTML += `<div class="table-cell">${i * j}</div>`;
        }
    }
    
    tableContainer.innerHTML = tableHTML;
}

/**
 * Countdown timer using while loop
 * Demonstrates asynchronous operations with setTimeout
 */
function countdownTimer() {
    const countdownDisplay = document.getElementById('countdownDisplay');
    let count = 10;
    
    countdownDisplay.textContent = count;
    countdownDisplay.style.fontSize = '2em';
    
    // Using setInterval for continuous execution (similar to loop)
    const intervalId = setInterval(() => {
        count--;
        countdownDisplay.textContent = count;
        
        if (count <= 0) {
            clearInterval(intervalId);
            countdownDisplay.textContent = "Time's up! 🎉";
            countdownDisplay.style.color = "#38a169";
        } else if (count <= 3) {
            countdownDisplay.style.color = "#e53e3e";
        }
    }, 1000);
}

// ==============================================
// PART 4: DOM MANIPULATION - Interactive Web Page
// ==============================================

/**
 * Changes text color randomly
 * Demonstrates style manipulation and random color generation
 */
function changeText() {
    const textElement = document.getElementById('textToChange');
    const colors = ['#e53e3e', '#dd6b20', '#d69e2e', '#38a169', '#319795', '#3182ce', '#5a67d8', '#805ad5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    textElement.style.color = randomColor;
    textElement.style.fontWeight = 'bold';
    textElement.style.transition = 'color 0.3s ease';
}

/**
 * Toggles visibility of content
 * Demonstrates classList manipulation
 */
function toggleVisibility() {
    const content = document.getElementById('contentToToggle');
    content.classList.toggle('hidden');
}

/**
 * Adds new item to the list
 * Demonstrates dynamic element creation and appending
 */
function addNewItem() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    
    // Generate random item text
    const items = ['New Task', 'Important Note', 'Reminder', 'Shopping Item', 'Meeting', 'Project Update'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const itemNumber = itemList.children.length + 1;
    
    newItem.textContent = `${randomItem} ${itemNumber}`;
    newItem.style.opacity = '0';
    
    // Add with fade-in animation
    itemList.appendChild(newItem);
    setTimeout(() => {
        newItem.style.transition = 'opacity 0.5s ease';
        newItem.style.opacity = '1';
    }, 10);
}

/**
 * Resets all demonstrations to initial state
 * Demonstrates comprehensive DOM manipulation
 */
function resetAll() {
    // Reset Part 1
    document.getElementById('ageInput').value = '';
    document.getElementById('ageResult').textContent = '';
    
    // Reset Part 2
    document.getElementById('priceInput').value = '';
    document.getElementById('quantityInput').value = '1';
    document.getElementById('totalResult').textContent = '';
    document.getElementById('stringInput').value = '';
    document.getElementById('formatResult').textContent = '';
    
    // Reset Part 3
    document.getElementById('multiplicationTable').innerHTML = '';
    document.getElementById('countdownDisplay').textContent = '';
    document.getElementById('countdownDisplay').style.color = '#e53e3e';
    
    // Reset Part 4
    const textElement = document.getElementById('textToChange');
    textElement.style.color = '';
    textElement.style.fontWeight = '';
    
    document.getElementById('contentToToggle').classList.remove('hidden');
    
    const itemList = document.getElementById('itemList');
    while (itemList.children.length > 2) {
        itemList.removeChild(itemList.lastChild);
    }
    
    alert("All sections have been reset to their initial state!");
}

// Initialize some elements on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Fundamentals Assignment Loaded!");
    generateMultiplicationTable();
});
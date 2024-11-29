document.addEventListener('DOMContentLoaded', () => {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expensePopup = document.getElementById('expensePopup');
    const closePopupBtns = document.querySelectorAll('.close-popup');
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const categoryFilter = document.getElementById('categoryFilter');
    const totalSpentElement = document.getElementById('totalSpent');
    const balanceElement = document.getElementById('balance');
    const contactUsIcon = document.querySelector('.contact-us');
    const contactPopup = document.getElementById('contactPopup');
    const closeContactPopupBtn = contactPopup.querySelector('.close-popup');

    let totalSpent = 0;


    // Open popup when Add Expense button is clicked
    addExpenseBtn.addEventListener('click', () => {
        expensePopup.classList.remove('hidden');
    });

    // Close popup when the close button is clicked
    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            expensePopup.classList.add('hidden');
        });
    });

    // Handle form submission
    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const transactionType = document.getElementById('transactionType').value;
        const date = new Date().toLocaleString();

        let balanceChange = 0;

        if (transactionType === 'spend') {
            totalSpent += amount;
            balanceChange -= amount;
        } else {
            balanceChange += amount;
        }

        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item-bar', transactionType);
        expenseItem.innerHTML = `
            <span class="category">${category}</span>
            <span class="amount">${transactionType === 'spend' ? '₹' + amount : '+' + '₹' + amount}</span>
            <span class="date">${date}</span>
            <span class="paymentMethod">${paymentMethod}</span>
        `;

        expenseList.appendChild(expenseItem);
        expensePopup.classList.add('hidden');

        // Update balance and total spent
        const currentBalance = parseFloat(balanceElement.textContent);
        balanceElement.textContent = (currentBalance + balanceChange).toFixed(2);
        totalSpentElement.textContent = totalSpent.toFixed(2);
    });

    // Handle category filter
    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value.toLowerCase();
        filterExpensesByCategory(selectedCategory);
    });

    // Filter expenses by category
    function filterExpensesByCategory(category) {
        const expenseBars = document.querySelectorAll('.expense-item-bar'); // Dynamically query all items
        expenseBars.forEach(bar => {
            const barCategory = bar.querySelector('.category').textContent.toLowerCase();
            if (category === 'all' || barCategory === category) {
                bar.style.display = 'flex'; // Show matching expenses
            } else {
                bar.style.display = 'none'; // Hide non-matching expenses
            }
        });
    }

    // Handle category buttons (expense grid)
    const expenseItems = document.querySelectorAll('.expense-item');
    expenseItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            categoryFilter.value = category; // Update dropdown for user clarity
            filterExpensesByCategory(category);
        });
    });
});

analyticsToggle.innerHTML = '➤'; // Initially closed
analyticsToggle.addEventListener('click', () => {
    if (analyticsPanel.style.left === '0px') {
        analyticsPanel.style.left = '-300px'; // Close panel
        analyticsToggle.innerHTML = '➤';
    } else {
        analyticsPanel.style.left = '0'; // Open panel
        analyticsToggle.innerHTML = '➽';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const rightPanelToggle = document.getElementById('rightPanelToggle');
    const rightPanel = document.getElementById('rightPanel');
    const closeRightPanel = document.getElementById('closeRightPanel');
    const notificationsTab = document.getElementById('notificationsTab');
    const profileTab = document.getElementById('profileTab');
    const panelTitle = document.getElementById('panelTitle');
    const panelContent = document.getElementById('panelContent');

    // Open the right panel
    rightPanelToggle.addEventListener('click', () => {
        rightPanel.style.right = '0'; // Slide in
    });

    // Close the right panel
    closeRightPanel.addEventListener('click', () => {
        rightPanel.style.right = '-350px'; // Slide out
    });

    // Load notifications content
    notificationsTab.addEventListener('click', () => {
        panelTitle.textContent = 'Notifications';
        panelContent.innerHTML = '<p>Loading notifications...</p>';

        // Simulate backend data fetch
        setTimeout(() => {
            panelContent.innerHTML = `
                <ul>
                    <li>Notification 1: You spent ₹500 on food.</li>
                    <li>Notification 2: Your balance is low!</li>
                    <li>Notification 3: Expense report generated.</li>
                </ul>
            `;
        }, 1000);
    });

    // Load profile content
    profileTab.addEventListener('click', () => {
        panelTitle.textContent = 'Profile';
        panelContent.innerHTML = '<p>Loading profile...</p>';

        // Simulate backend data fetch
        setTimeout(() => {
            panelContent.innerHTML = `
                <p><strong>Name:</strong> Abhishek</p>
                <p><strong>Email:</strong> abhishek@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Account Balance:</strong> ₹5000</p>
            `;
        }, 1000);
    });

    // Default to notifications tab on load
    notificationsTab.click();
});
document.addEventListener('DOMContentLoaded', () => {
    // Contact Us Popup Functionality
    const contactUsIcon = document.querySelector('.contact-us');
    const contactPopup = document.getElementById('contactPopup');
    const closeContactPopupBtn = contactPopup.querySelector('.close-popup');

    // Open Contact Popup
    contactUsIcon.addEventListener('click', () => {
        contactPopup.classList.remove('hidden');
    });

    // Close Contact Popup
    closeContactPopupBtn.addEventListener('click', () => {
        contactPopup.classList.add('hidden');
    });

    // Optional: Close popup if clicked outside
    contactPopup.addEventListener('click', (event) => {
        if (event.target === contactPopup) {
            contactPopup.classList.add('hidden');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expensePopup = document.getElementById('expensePopup');
    const closePopupBtns = document.querySelectorAll('.close-popup');
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const categoryFilter = document.getElementById('categoryFilter');
    const totalSpentElement = document.getElementById('totalSpent');
    const balanceElement = document.getElementById('balance');
    const notificationIcon = document.querySelector('.notification-icon');
    
    // Notification tracking
    let notifications = [];
    let unreadNotificationsCount = 0;

    // Update notification display
    function updateNotificationDisplay() {
        notificationIcon.innerHTML = `🔔 ${unreadNotificationsCount > 0 ? unreadNotificationsCount : ''}`;
    }

    // Add notification
    function addNotification(message) {
        const notification = {
            id: Date.now(),
            message: message,
            timestamp: new Date().toLocaleString(),
            read: false
        };
        
        notifications.unshift(notification);
        unreadNotificationsCount++;
        updateNotificationDisplay();
        
        // Optional: Limit notifications to last 10
        if (notifications.length > 10) {
            notifications.pop();
        }
    }

    // Handle form submission with enhanced notification
    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const transactionType = document.getElementById('transactionType').value;
        const date = new Date().toLocaleString();

        let balanceChange = 0;

        if (transactionType === 'spend') {
            totalSpent += amount;
            balanceChange -= amount;
            
            // Create a specific notification for spending
            addNotification(`Spent ₹${amount} on ${category} via ${paymentMethod}`);
        } else {
            balanceChange += amount;
            
            // Create a notification for credit
            addNotification(`Credited ₹${amount} to account`);
        }

        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item-bar', transactionType);
        expenseItem.innerHTML = `
            <span class="category">${category}</span>
            <span class="amount">${transactionType === 'spend' ? '₹' + amount : '+' + '₹' + amount}</span>
            <span class="date">${date}</span>
            <span class="paymentMethod">${paymentMethod}</span>
        `;

        expenseList.appendChild(expenseItem);
        expensePopup.classList.add('hidden');

        // Update balance and total spent
        const currentBalance = parseFloat(balanceElement.textContent);
        balanceElement.textContent = (currentBalance + balanceChange).toFixed(2);
        totalSpentElement.textContent = totalSpent.toFixed(2);
    });

    // Existing code for notifications tab in right panel
    document.getElementById('notificationsTab').addEventListener('click', () => {
        const panelContent = document.getElementById('panelContent');
        
        if (notifications.length === 0) {
            panelContent.innerHTML = '<p>No notifications</p>';
            return;
        }

        // Create notification list
        const notificationHTML = notifications.map(notification => `
            <div class="notification-item">
                <p>${notification.message}</p>
                <small>${notification.timestamp}</small>
            </div>
        `).join('');

        panelContent.innerHTML = notificationHTML;
        
        // Reset unread count
        unreadNotificationsCount = 0;
        updateNotificationDisplay();
    });

    // Rest of your existing code...
});
// Budget Tracking and Alerts System
document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const dailyLimitInput = document.getElementById('daily-limit');
    const monthlyLimitInput = document.getElementById('monthly-limit');
    const saveLimitsBtn = document.getElementById('save-limits');
    const alertMessage = document.getElementById('alert-message');
    const analyticsContent = document.querySelector('.analytics-content');

    // Expense tracking variables
    let dailyExpenses = 0;
    let monthlyExpenses = 0;
    let dailyLimit = 50;
    let monthlyLimit = 1000;

    // Chart configuration
    let expenseChart = null;

    // Save budget limits
    saveLimitsBtn.addEventListener('click', () => {
        dailyLimit = parseFloat(dailyLimitInput.value);
        monthlyLimit = parseFloat(monthlyLimitInput.value);
        
        // Store limits in localStorage
        localStorage.setItem('dailyLimit', dailyLimit);
        localStorage.setItem('monthlyLimit', monthlyLimit);
        
        alertMessage.textContent = 'Budget limits updated successfully!';
        alertMessage.style.color = 'green';
    });

    // Modify existing expense form submission
    const expenseForm = document.getElementById('expenseForm');
    expenseForm.addEventListener('submit', (event) => {
        const amount = parseFloat(document.getElementById('amount').value);
        const transactionType = document.getElementById('transactionType').value;

        if (transactionType === 'spend') {
            // Update daily and monthly expenses
            dailyExpenses += amount;
            monthlyExpenses += amount;

            // Check against daily limit
            if (dailyExpenses > dailyLimit) {
                showAlert(`Daily spending limit exceeded! Current: ₹${dailyExpenses.toFixed(2)}`, 'red');
            }

            // Check against monthly limit
            if (monthlyExpenses > monthlyLimit) {
                showAlert(`Monthly spending limit exceeded! Current: ₹${monthlyExpenses.toFixed(2)}`, 'red');
            }

            // Update chart
            updateExpenseChart();
        }
    });

    // Alert function
    function showAlert(message, color) {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.style.color = color;
        alertDiv.style.padding = '10px';
        alertDiv.style.backgroundColor = color === 'red' ? '#ffdddd' : '#ddffdd';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.marginBottom = '10px';

        // Prepend to analytics content
        analyticsContent.insertBefore(alertDiv, analyticsContent.firstChild);

        // Remove alert after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    // Create expense chart
    function createExpenseChart() {
        // Create canvas element
        const chartCanvas = document.createElement('canvas');
        chartCanvas.id = 'expenseChart';
        chartCanvas.width = 400;
        chartCanvas.height = 200;

        // Add to analytics content
        analyticsContent.appendChild(chartCanvas);

        // Chart.js configuration
        const ctx = chartCanvas.getContext('2d');
        expenseChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Daily Expenses', 'Monthly Expenses', 'Daily Limit', 'Monthly Limit'],
                datasets: [{
                    label: 'Expenses vs Limits',
                    data: [dailyExpenses, monthlyExpenses, dailyLimit, monthlyLimit],
                    backgroundColor: [
                        dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
                        monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ],
                    borderColor: [
                        dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
                        monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount (₹)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Expense Tracking'
                    }
                }
            }
        });
    }

    // Update expense chart
    function updateExpenseChart() {
        if (!expenseChart) {
            createExpenseChart();
            return;
        }

        expenseChart.data.datasets[0].data = [
            dailyExpenses, 
            monthlyExpenses, 
            dailyLimit, 
            monthlyLimit
        ];

        // Update colors based on limit
        expenseChart.data.datasets[0].backgroundColor = [
            dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
            monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)'
        ];

        expenseChart.update();
    }

    // Load saved limits from localStorage
    const savedDailyLimit = localStorage.getItem('dailyLimit');
    const savedMonthlyLimit = localStorage.getItem('monthlyLimit');

    if (savedDailyLimit) {
        dailyLimit = parseFloat(savedDailyLimit);
        dailyLimitInput.value = dailyLimit;
    }

    if (savedMonthlyLimit) {
        monthlyLimit = parseFloat(savedMonthlyLimit);
        monthlyLimitInput.value = monthlyLimit;
    }

    // Initialize chart
    createExpenseChart();
});
// Budget Tracking and Alerts System
document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const dailyLimitInput = document.getElementById('daily-limit');
    const monthlyLimitInput = document.getElementById('monthly-limit');
    const saveLimitsBtn = document.getElementById('save-limits');
    const alertMessage = document.getElementById('alert-message');
    const analyticsContent = document.querySelector('.analytics-content');

    // Expense tracking variables
    let dailyExpenses = 0;
    let monthlyExpenses = 0;
    let dailyLimit = 50;
    let monthlyLimit = 1000;

    // Expense categories tracking
    const expenseCategories = {
        'Food': 0,
        'Transportation': 0,
        'Entertainment': 0,
        'Utilities': 0,
        'Shopping': 0,
        'Miscellaneous': 0
    };

    // Monthly expenses history (for histogram)
    const monthlyExpensesHistory = [];

    // Chart configurations
    let expenseChart = null;
    let categoryChart = null;
    let monthlyExpensesChart = null;

    // Save budget limits
    saveLimitsBtn.addEventListener('click', () => {
        dailyLimit = parseFloat(dailyLimitInput.value);
        monthlyLimit = parseFloat(monthlyLimitInput.value);
        
        // Store limits in localStorage
        localStorage.setItem('dailyLimit', dailyLimit);
        localStorage.setItem('monthlyLimit', monthlyLimit);
        
        alertMessage.textContent = 'Budget limits updated successfully!';
        alertMessage.style.color = 'green';
    });

    // Modify existing expense form submission
    const expenseForm = document.getElementById('expenseForm');
    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting

        const amount = parseFloat(document.getElementById('amount').value);
        const transactionType = document.getElementById('transactionType').value;
        const category = document.getElementById('category').value;

        if (transactionType === 'spend') {
            // Update daily and monthly expenses
            dailyExpenses += amount;
            monthlyExpenses += amount;

            // Update category expenses
            expenseCategories[category] += amount;

            // Check against daily limit
            if (dailyExpenses > dailyLimit) {
                showAlert(`Daily spending limit exceeded! Current: ₹${dailyExpenses.toFixed(2)}`, 'red');
            }

            // Check against monthly limit
            if (monthlyExpenses > monthlyLimit) {
                showAlert(`Monthly spending limit exceeded! Current: ₹${monthlyExpenses.toFixed(2)}`, 'red');
            }

            // Update charts
            updateExpenseChart();
            updateCategoryChart();
            updateMonthlyExpensesChart();
        }
    });

    // Alert function
    function showAlert(message, color) {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.style.color = color;
        alertDiv.style.padding = '10px';
        alertDiv.style.backgroundColor = color === 'red' ? '#ffdddd' : '#ddffdd';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.marginBottom = '10px';

        // Prepend to analytics content
        analyticsContent.insertBefore(alertDiv, analyticsContent.firstChild);

        // Remove alert after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    // Create expense overview chart
    function createExpenseChart() {
        // Create canvas element
        const chartCanvas = document.createElement('canvas');
        chartCanvas.id = 'expenseChart';
        chartCanvas.width = 400;
        chartCanvas.height = 200;

        // Add to analytics content
        analyticsContent.appendChild(chartCanvas);

        // Chart.js configuration
        const ctx = chartCanvas.getContext('2d');
        expenseChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Daily Expenses', 'Monthly Expenses', 'Daily Limit', 'Monthly Limit'],
                datasets: [{
                    label: 'Expenses vs Limits',
                    data: [dailyExpenses, monthlyExpenses, dailyLimit, monthlyLimit],
                    backgroundColor: [
                        dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
                        monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ],
                    borderColor: [
                        dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
                        monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount (₹)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Expense Overview'
                    }
                }
            }
        });
    }

    // Create category expenses chart
    function createCategoryChart() {
        // Create canvas element
        const chartCanvas = document.createElement('canvas');
        chartCanvas.id = 'categoryChart';
        chartCanvas.width = 400;
        chartCanvas.height = 200;

        // Add to analytics content
        analyticsContent.appendChild(chartCanvas);

        // Chart.js configuration
        const ctx = chartCanvas.getContext('2d');
        categoryChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(expenseCategories),
                datasets: [{
                    label: 'Expenses by Category',
                    data: Object.values(expenseCategories),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount (₹)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Expenses by Category'
                    }
                }
            }
        });
    }

    // Create monthly expenses histogram
    function createMonthlyExpensesChart() {
        // Create canvas element
        const chartCanvas = document.createElement('canvas');
        chartCanvas.id = 'monthlyExpensesChart';
        chartCanvas.width = 400;
        chartCanvas.height = 200;

        // Add to analytics content
        analyticsContent.appendChild(chartCanvas);

        // Chart.js configuration
        const ctx = chartCanvas.getContext('2d');
        monthlyExpensesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyExpensesHistory.map((_, index) => `Month ${index + 1}`),
                datasets: [{
                    label: 'Monthly Expenses',
                    data: monthlyExpensesHistory,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount (₹)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Expenses History'
                    }
                }
            }
        });
    }

    // Update expense overview chart
    function updateExpenseChart() {
        if (!expenseChart) {
            createExpenseChart();
            return;
        }

        expenseChart.data.datasets[0].data = [
            dailyExpenses, 
            monthlyExpenses, 
            dailyLimit, 
            monthlyLimit
        ];

        // Update colors based on limit
        expenseChart.data.datasets[0].backgroundColor = [
            dailyExpenses > dailyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
            monthlyExpenses > monthlyLimit ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)'
        ];

        expenseChart.update();
    }

    // Update category chart
    function updateCategoryChart() {
        if (!categoryChart) {
            createCategoryChart();
            return;
        }

        categoryChart.data.datasets[0].data = Object.values(expenseCategories);
        categoryChart.update();
    }

    // Update monthly expenses histogram
    function updateMonthlyExpensesChart() {
        // At the end of each month, add the total monthly expenses to history
        if (monthlyExpensesHistory.length === 0 || monthlyExpensesHistory.length < 12) {
            monthlyExpensesHistory.push(monthlyExpenses);
        } else {
            // If we have 12 months of data, remove the oldest and add the newest
            monthlyExpensesHistory.shift();
            monthlyExpensesHistory.push(monthlyExpenses);
        }

        if (!monthlyExpensesChart) {
            createMonthlyExpensesChart();
            return;
        }

        monthlyExpensesChart.data.labels = monthlyExpensesHistory.map((_, index) => `Month ${index + 1}`);
        monthlyExpensesChart.data.datasets[0].data = monthlyExpensesHistory;
        monthlyExpensesChart.update();
    }

    // Load saved limits from localStorage
    const savedDailyLimit = localStorage.getItem('dailyLimit');
    const savedMonthlyLimit = localStorage.getItem('monthlyLimit');

    if (savedDailyLimit) {
        dailyLimit = parseFloat(savedDailyLimit);
        dailyLimitInput.value = dailyLimit;
    }

    if (savedMonthlyLimit) {
        monthlyLimit = parseFloat(savedMonthlyLimit);
        monthlyLimitInput.value = monthlyLimit;
    }

    // Initialize charts
    createExpenseChart();
    createCategoryChart();
    createMonthlyExpensesChart();
});

POCKET PLANNER: THERAPIST FOR PEOPLE'S POCKETS

PROBLEM STATEMENT:

Managing personal and group finances effectively is a challenge for many individuals. People often struggle to track their daily and monthly spending habits, identify where their money is going, and stay within their budgets. Additionally, splitting expenses with friends or family can be a tedious process, leading to confusion about who owes whom and how much. 

SOLUTION:

PocketPlanner provides with an easy to use interface to record your expenses categorized on it's type. It helps us to set daily and monthly budgets and alerts you if have or are about to cross the budget. People want accessibility across different demographics with a focus on simplicity and clarity.
To acheive this, it has graphical representation of the expenses. Additionally, it also provides with a split feature where you can split your expense with a group of people!

HOW TO USE POCKET PLANNER?

Simply, just open the site and add expenses based on the category and the amount.

<img width="615" alt="6" src="https://github.com/user-attachments/assets/6f28c97b-ece3-4e46-8ccf-0ee9d20528db">

To set daily and monthly budget, click on the right arrow on left side of the screen. You can also view the graphical representation of your expenses here.

<img width="605" alt="1" src="https://github.com/user-attachments/assets/7a893a8c-349e-4a5d-8515-08f5fbd6649a">

<img width="598" alt="2" src="https://github.com/user-attachments/assets/e678d371-641f-4338-a31c-a9f53d08d553">

To view notifications and your profile details, click on the left arrow on right side of the screen.

<img width="177" alt="3" src="https://github.com/user-attachments/assets/e97f05eb-31ac-43c6-bc71-077fc2591e8a">
<img width="134" alt="4" src="https://github.com/user-attachments/assets/fb519186-d9a4-400e-89ee-7e97c61322c8">
<img width="144" alt="5" src="https://github.com/user-attachments/assets/ab576d3e-03d4-4afb-bda7-1e48a603d4fe">

If you want to split your expenses with a group of people, click on the split button on the main page. This will redirect you to a new webpage where you have to enter the amount and the number of people and the splitted expenses are calculated once you click the calculate button.

<img width="600" alt="8" src="https://github.com/user-attachments/assets/246322cf-01c2-4a46-a0c0-7f8523cf5051">


![9](https://github.com/user-attachments/assets/ec439d84-8958-4840-bc34-7aca1117772a)

Additionally, PocketPlanner also provides with helpDesk and support.

<img width="620" alt="7" src="https://github.com/user-attachments/assets/a562ca78-540d-4ac2-b236-834c49d3fc2a">


TECHNICAL DOCUMENTATION:


File Structure:

index.html: Main HTML file containing the app layout and structure.

style.css: CSS file for styling the app.

script.js: JavaScript file for functionality (handling user interactions, adding expenses, etc.).


Components: 
Header Section

Contains user profile information, a profile picture, and control icons (notifications, contact us, help).

Profile Section: Displays the greeting and profile picture. Allows profile picture update.

Control Icons: Icons for quick access to notifications, contact support, and help sections.


Dashboard Content

Expense Filter: Allows the user to filter expenses by categories like food, travel, etc.

Balance Display: Shows total spent and remaining balance.

Expense Grid: Visual representation of different expense categories (food, travel, etc.).

Add Expense Button: Opens a popup to add new expenses.

Expense List: Displays the list of expenses that the user has added.


Expense Popup

Form for adding a new expense.
Inputs include amount, category, payment method, and transaction type (spend/credit).
Upon submission, the form updates the expense list and financial details (total spent, balance).

Analytics Panel

Allows users to set budget limits (daily and monthly).
Alerts are displayed if the user exceeds their set limits.

Right Panel

Contains notifications and profile information.
The user can toggle between notifications and profile tabs.

Footer

Displays quick links (Dashboard, Profile, Expenses) and copyright information.
JavaScript Functionality

Add Expense Logic

The addExpenseBtn triggers the opening of the expense form.
On form submission, the expenseForm calculates the total spent and updates the balance.
Expenses are categorized (food, travel, etc.) and added to the expense list dynamically.

Expense Filtering

The categoryFilter dropdown allows users to filter expenses by category. Each expense item has a data-category attribute, and the filtering logic hides or shows items based on the selected category.

Budget Alerts

The app allows users to set daily and monthly budget limits. When an expense exceeds these limits, an alert is displayed with a message indicating the breach.

Profile Section

The profile section allows users to upload and update their profile picture using an input field (input[type="file"]). The picture is displayed in the profilePic element once selected.

Notifications Panel

The right panel shows notifications and user profile information, which can be toggled using the "Notifications" and "Profile" buttons.

Popup Logic
All popups (expense form, contact us) are initially hidden with the hidden class. They are shown when the corresponding buttons are clicked and hidden when the close button (&times;) is pressed.

Charts for Analytics:

The app uses a bar chart (expenseChart) to display expenses versus budget limits (daily and monthly).
The chart is dynamically updated with each expense entry.
A category-based chart (categoryChart) could be added to track the breakdown of expenses by category.

Popup Management:

Various popups for adding expenses, viewing notifications, and viewing profiles are toggled using event listeners. Popups are hidden or shown based on user interaction.

Expense and Analytics Updates:

Whenever an expense is added, the app checks if the spending exceeds predefined limits and updates the respective charts. Alerts notify the user of any excess.

Event Listeners:

Multiple event listeners manage user interactions such as adding an expense, changing filters, opening/closing panels, and navigating between tabs (e.g., notifications, profile).

createExpenseChart():

Initializes a bar chart for displaying daily and monthly expenses vs limits.
Displays four data points: daily expenses, monthly expenses, daily limit, and monthly limit.
Colors indicate if limits are exceeded.

createCategoryChart():

Initializes a bar chart showing expenses by category.
Uses different colors for each category.
Categories are dynamic and data-driven from expenseCategories.

createMonthlyExpensesChart():

Initializes a line chart to display the history of monthly expenses.
Uses monthlyExpensesHistory for the data, where each month’s expenses are tracked.

updateExpenseChart():

Updates the expenseChart with current values of daily/ monthly expenses and limits.
Changes color when limits are exceeded.

updateCategoryChart():

Updates the categoryChart with updated values from expenseCategories.

updateMonthlyExpensesChart():

Updates monthlyExpensesChart with the latest monthly expense data.
Maintains a rolling 12-month history by shifting old data.

Initialization:
On page load, it checks for saved limits in localStorage and applies them if present.
Three charts are created: expenseChart, categoryChart, and monthlyExpensesChart.
Limits for daily and monthly expenses are also handled by saving them in localStorage.

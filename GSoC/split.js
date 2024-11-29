
document.addEventListener('DOMContentLoaded', () => {
    const splitCalculateBtn = document.getElementById('split-calculate-btn');
    const splitResultElem = document.getElementById('split-result');
    const addBorrowedBtn = document.getElementById('add-borrowed-btn');
    const borrowedContainer = document.getElementById('borrowed-container');
    const addPayableBtn = document.getElementById('add-payable-btn');
    const payableContainer = document.getElementById('payable-container');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultElem = document.getElementById('result');

    let borrowedMembers = [];
    let payableMembers = [];

   
    splitCalculateBtn.addEventListener('click', () => {
        const totalAmountSplit = parseFloat(document.getElementById('total-amount-split').value);
        const numberOfMembersSplit = parseInt(document.getElementById('number-of-members-split').value);

        if (!isNaN(totalAmountSplit) && numberOfMembersSplit > 0) {
            const amountPerMemberSplit = totalAmountSplit / numberOfMembersSplit;
            splitResultElem.textContent = `Each member has to pay: Rs. ${amountPerMemberSplit.toFixed(2)}`;
        } else {
            splitResultElem.textContent = 'Please enter valid values for total amount and number of members.';
        }
    });


    addBorrowedBtn.addEventListener('click', () => {
        const borrowedDiv = document.createElement('div');
        borrowedDiv.classList.add('member-input');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Name';
        nameInput.classList.add('borrowed-name');

        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.placeholder = 'Amount Borrowed';
        amountInput.classList.add('borrowed-amount');

        borrowedDiv.appendChild(nameInput);
        borrowedDiv.appendChild(amountInput);
        borrowedContainer.appendChild(borrowedDiv);

        borrowedMembers.push({ name: nameInput, amount: amountInput });
    });

 
    addPayableBtn.addEventListener('click', () => {
        const payableDiv = document.createElement('div');
        payableDiv.classList.add('member-input');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Name';
        nameInput.classList.add('payable-name');

        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.placeholder = 'Amount Payable';
        amountInput.classList.add('payable-amount');

        payableDiv.appendChild(nameInput);
        payableDiv.appendChild(amountInput);
        payableContainer.appendChild(payableDiv);

        payableMembers.push({ name: nameInput, amount: amountInput });
    });


    calculateBtn.addEventListener('click', () => {
        let totalBorrowed = 0;
        let totalPayable = 0;

        borrowedMembers.forEach(member => {
            const amount = parseFloat(member.amount.value);
            if (!isNaN(amount)) {
                totalBorrowed += amount;
            }
        });

        payableMembers.forEach(member => {
            const amount = parseFloat(member.amount.value);
            if (!isNaN(amount)) {
                totalPayable += amount;
            }
        });

        const netPayable = totalPayable - totalBorrowed;
        resultElem.textContent = `Total amount payable: Rs. ${netPayable.toFixed(2)}`;
    });
});
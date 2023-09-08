document.addEventListener('DOMContentLoaded', function () {
    const receiptForm = document.getElementById('receipt-form');
    const receiptDiv = document.getElementById('receipt');
    const printButton = document.getElementById('print-receipt');

    receiptForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get value
        const guestName = document.getElementById('guest-name').value;
        const roomNumber = document.getElementById('room-number').value;
        const checkInDate = document.getElementById('check-in').value;
        const checkOutDate = document.getElementById('check-out').value;
        const totalPrice = document.getElementById('total-price').value;

        // Create receipt HTML
        const receiptHTML = `
            <h2>Hotel Receipt</h2>
            <p><strong>Guest Name:</strong> ${guestName}</p>
            <p><strong>Room Number:</strong> ${roomNumber}</p>
            <p><strong>Check-In Date:</strong> ${checkInDate}</p>
            <p><strong>Check-Out Date:</strong> ${checkOutDate}</p>
            <p><strong>Total Price:</strong> $${totalPrice}</p>
        `;

        // bottom recipt
        receiptDiv.innerHTML = receiptHTML;
    });

    printButton.addEventListener('click', function () {
        // print option
        window.print();
    });
});
